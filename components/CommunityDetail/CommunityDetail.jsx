import Image from "next/image";
import Link from "next/link";
import { getRelatedPropertiesForCommunity } from "@/lib/communityDetail";
import { isRemoteImageSrc } from "@/lib/luxuryProjectDetail";

export default function CommunityDetail({ community }) {
  const related = getRelatedPropertiesForCommunity(community, 3);

  return (
    <main className="bg-white text-neutral-900">
      <div className="pt-20">
        <div className="relative h-[65vh] min-h-[420px] w-full md:h-[80vh] md:min-h-[560px]">
          {community.image ? (
            <Image
              src={community.image}
              alt={`${community.title} in Dubai`}
              fill
              priority
              unoptimized={isRemoteImageSrc(community.image)}
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            <div className="h-full w-full bg-neutral-200" aria-hidden />
          )}
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <nav className="mb-8 text-center text-xs text-slate-500 md:text-sm" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#E31E24]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/areas" className="hover:text-[#E31E24]">
            Communities
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-slate-800">{community.title}</span>
        </nav>
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
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/luxury-properties"
            className="rounded-lg border border-[#E31E24] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-[#E31E24] hover:bg-[#E31E24] hover:text-white"
          >
            Luxury listings
          </Link>
          <Link
            href="/trending-projects"
            className="rounded-lg border border-slate-200 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-slate-800 hover:border-[#E31E24] hover:text-[#E31E24]"
          >
            Trending projects
          </Link>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight text-slate-900">
            Properties in {community.title}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((property) => (
              <article
                key={property.href}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <Link href={property.href} className="block">
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image
                      src={property.image}
                      alt={`${property.title} in ${property.location}`}
                      fill
                      unoptimized={isRemoteImageSrc(property.image)}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-slate-900">{property.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{property.location}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
