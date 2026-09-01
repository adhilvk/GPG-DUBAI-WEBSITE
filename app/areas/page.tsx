import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { COMMUNITIES } from "@/data/communities";
import { breadcrumbSchema } from "@/lib/schema";
import { staticPageMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { isRemoteImageSrc } from "@/lib/luxuryProjectDetail";

export const metadata = staticPageMetadata("/areas");

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Communities", path: "/areas" },
        ])}
      />
      <Navbar />
      <main className="bg-white px-4 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 text-center md:mb-12">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24] md:text-xs">
              Dubai
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Our <span className="text-[#E31E24]">Communities</span>
            </h1>
            <div className="mx-auto mt-4 h-px w-16 bg-[#E31E24] md:w-20" aria-hidden />
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 md:text-base">
              Explore established Dubai communities represented by GPG Global Real Estate.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMMUNITIES.map((community) => (
              <article
                key={community.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <Link href={`/areas/${community.id}`} className="block">
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <Image
                      src={community.image}
                      alt={community.title}
                      fill
                      unoptimized={isRemoteImageSrc(community.image)}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-semibold text-slate-900">{community.title}</h2>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                      {community.paragraphs[0]}
                    </p>
                    <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wide text-[#E31E24]">
                      View community
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
