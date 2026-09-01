import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Page Not Found | GPG Global Real Estate",
  description: "The page you requested could not be found on GPG Global Real Estate.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 pt-28 pb-20 text-center">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
          404
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-sm text-slate-600 md:text-base">
          This page is unavailable. Browse luxury listings, trending projects, or return home.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg bg-[#E31E24] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#c81b20]"
          >
            Home
          </Link>
          <Link
            href="/luxury-properties"
            className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-[#E31E24] hover:text-[#E31E24]"
          >
            Luxury properties
          </Link>
          <Link
            href="/trending-projects"
            className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-[#E31E24] hover:text-[#E31E24]"
          >
            Trending projects
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
