"use client";

type JsonLdProps = {
  data: unknown;
};

function serialize(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function JsonLd({ data }: JsonLdProps) {
  const nodes = (Array.isArray(data) ? data : [data]).filter(Boolean);

  if (!nodes.length) return null;

  return (
    <>
      {nodes.map((node, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(node) }}
        />
      ))}
    </>
  );
}
