import React from 'react';

const SubscriptionBanner = () => {
  return (
    <section className="bg-white py-12 px-6 border-y border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        
        {/* Updated "Connect" Heading */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#002B5B] tracking-tight">
            Connect for updates
          </h2>
          <p className="mt-2 text-slate-700 text-lg">
            Stay informed with the latest market shifts and institutional reports.
          </p>
        </div>

        {/* Form with Visible Placeholders */}
        <div className="flex-1 w-full lg:max-w-2xl">
          <form className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="text"
              placeholder="Enter your name"
              /* Use placeholder-slate-500 or 600 to ensure visibility against white */
              className="flex-1 px-4 py-3 border border-slate-300 rounded-sm focus:border-blue-600 outline-none placeholder:text-slate-500 text-slate-900"
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-sm focus:border-blue-600 outline-none placeholder:text-slate-500 text-slate-900"
              required
            />
            <button
              type="submit"
              className="bg-[#E31E24] hover:bg-[#D44D16] text-white font-bold py-3 px-10 rounded-sm transition-all shadow-sm"
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