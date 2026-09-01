import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

const root = new URL('../../', import.meta.url);
const source = await readFile(new URL('lib/leadAnalytics.ts', root), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ES2022,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const analytics = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);

function createStorage() {
  const values = new Map();
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: (key) => values.delete(key),
  };
}

function installBrowser(pathname, hostname = 'www.theimpulsedigital.com') {
  const events = [];
  globalThis.sessionStorage = createStorage();
  globalThis.document = { referrer: '' };
  globalThis.window = {
    location: { hostname, pathname, search: '' },
    gtag: (...args) => events.push(args),
  };
  return events;
}

test('direct thank-you visits never create lead success events', () => {
  const events = installBrowser('/thank-you/');
  analytics.consumeVerifiedLeadSuccess();
  assert.equal(events.length, 0);
});

test('recent same-region form attempts create one success event and clear state', () => {
  const events = installBrowser('/contact-us/');
  analytics.markLeadFormAttempt('/contact-us/');
  window.location.pathname = '/thank-you/';
  analytics.consumeVerifiedLeadSuccess();

  assert.deepEqual(events.map((event) => event[1]), [
    'lead_form_attempt',
    'lead_form_success',
  ]);
  analytics.consumeVerifiedLeadSuccess();
  assert.equal(events.length, 2);
});

test('cross-region returns do not create success events', () => {
  const events = installBrowser('/ae/contact-us/');
  analytics.markLeadFormAttempt('/ae/contact-us/');
  window.location.pathname = '/thank-you/';
  analytics.consumeVerifiedLeadSuccess();
  assert.deepEqual(events.map((event) => event[1]), ['lead_form_attempt']);
});

test('local and preview-style hosts do not initialise business events', () => {
  const events = installBrowser('/contact-us/', '127.0.0.1');
  analytics.markLeadFormAttempt('/contact-us/');
  analytics.fireLeadEvent('phone_click');
  assert.equal(events.length, 0);
});
