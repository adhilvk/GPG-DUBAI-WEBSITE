import React from "react";

const SubscriptionBanner = () => {
  return (
    <section className="border-y border-red-50 bg-white px-6 py-10 text-black md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24]">
            Stay Connected
          </p>
          <h2
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            className="text-3xl font-semibold tracking-tight text-black md:text-4xl"
          >
            Connect for <span className="text-[#E31E24]">updates</span>
          </h2>
          <p className="mt-2 text-lg text-slate-700">
            Stay informed with the latest market shifts and institutional reports.
          </p>
        </div>

        <div className="w-full flex-1 lg:max-w-2xl">
          <form className="mb-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Enter your name"
              className="flex-1 rounded-lg border border-red-100 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20"
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-red-100 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-[#E31E24] px-10 py-3 font-bold text-white shadow-sm transition-all hover:bg-[#c81b20]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionBanner;
