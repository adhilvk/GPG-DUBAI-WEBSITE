export default function SectionHeader({ eyebrow, title, accent, subtitle, className = "" }) {
  return (
    <div className={`mb-6 md:mb-8 text-center ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24] md:text-xs">
          {eyebrow}
        </p>
      )}
      <h2
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl"
      >
        {title}
        {accent && (
          <>
            {" "}
            <span className="text-[#E31E24]">{accent}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-500 md:text-base">{subtitle}</p>
      )}
    </div>
  );
}
