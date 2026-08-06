import Image from "next/image";

export default function CommunityDetail({ community }) {
  return (
    <main className="bg-white text-neutral-900">
      <div className="pt-20">
        <div className="relative h-[65vh] min-h-[420px] w-full md:h-[80vh] md:min-h-[560px]">
          {community.image ? (
            <Image
              src={community.image}
              alt={community.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            <div className="h-full w-full bg-neutral-200" aria-hidden />
          )}
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <h1 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          <span className="text-neutral-900">{community.headingBlack ?? community.title}</span>
          {community.headingRed ? (
            <span className="text-[#E31E24]"> {community.headingRed}</span>
          ) : null}
        </h1>
        <div className="mx-auto mt-8 max-w-3xl space-y-6 text-justify text-base leading-relaxed text-neutral-600 md:text-lg">
          {community.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
