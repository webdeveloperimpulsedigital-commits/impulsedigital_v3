const LEGACY_HOST = 'impulsedigital.co.in';

function publicBlogBase(publicOrigin: string, isAe: boolean): string {
  return `${publicOrigin}${isAe ? '/ae/blog' : '/blog'}`;
}

function legacyBlogPath(isAe: boolean): string {
  return isAe ? '/ae/blog' : '/ID-web-blog';
}

export function rewriteBlogUrls(
  text: string,
  isAe: boolean,
  publicOrigin: string,
): string {
  const publicBase = publicBlogBase(publicOrigin, isAe);
  const legacyBase = `https://${LEGACY_HOST}${legacyBlogPath(isAe)}`;
  const legacyHttpBase = `http://${LEGACY_HOST}${legacyBlogPath(isAe)}`;

  let rewritten = text
    .replaceAll(`${legacyBase}/`, `${publicBase}/`)
    .replaceAll(legacyBase, publicBase)
    .replaceAll(`${legacyHttpBase}/`, `${publicBase}/`)
    .replaceAll(legacyHttpBase, publicBase);

  const escapedLegacy = legacyBase.replaceAll('/', '\\/');
  const escapedLegacyHttp = legacyHttpBase.replaceAll('/', '\\/');
  const escapedPublic = publicBase.replaceAll('/', '\\/');
  rewritten = rewritten
    .replaceAll(`${escapedLegacy}\\/`, `${escapedPublic}\\/`)
    .replaceAll(escapedLegacy, escapedPublic)
    .replaceAll(`${escapedLegacyHttp}\\/`, `${escapedPublic}\\/`)
    .replaceAll(escapedLegacyHttp, escapedPublic);

  const encodedPublic = encodeURIComponent(publicBase);
  for (const encodedLegacy of [
    encodeURIComponent(legacyBase),
    encodeURIComponent(legacyHttpBase),
  ]) {
    rewritten = rewritten.replace(
      new RegExp(encodedLegacy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'),
      encodedPublic,
    );
  }

  return rewritten;
}

export function enforceBlogDocumentLanguage(text: string, isAe: boolean): string {
  if (!/<html\b/i.test(text)) return text;
  const lang = isAe ? 'en-AE' : 'en-IN';
  if (/<html\b[^>]*\blang=(['"])[^'"]*\1/i.test(text)) {
    return text.replace(
      /<html\b([^>]*?)\blang=(['"])[^'"]*\2([^>]*)>/i,
      `<html$1lang="${lang}"$3>`,
    );
  }
  return text.replace(/<html\b([^>]*)>/i, `<html$1 lang="${lang}">`);
}

export function rewriteBlogText(
  text: string,
  isAe: boolean,
  publicOrigin: string,
  contentType: string,
): string {
  const withPublicUrls = rewriteBlogUrls(text, isAe, publicOrigin);
  return contentType.includes('text/html')
    ? enforceBlogDocumentLanguage(withPublicUrls, isAe)
    : withPublicUrls;
}
