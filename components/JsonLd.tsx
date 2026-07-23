type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
  id?: string;
};

export function serializeJsonLd(
  data: Record<string, unknown> | Array<Record<string, unknown>>,
): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export default function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
