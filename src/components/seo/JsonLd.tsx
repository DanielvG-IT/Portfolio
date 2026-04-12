interface JsonLdProps<T extends Record<string, unknown>> {
  id?: string;
  data: T;
}

export default function JsonLd<T extends Record<string, unknown>>({
  id,
  data,
}: JsonLdProps<T>) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
