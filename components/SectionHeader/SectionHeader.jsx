export function HeadingRedLines({ align = "center", className = "" }) {
  const alignClass = align === "left" ? "mr-auto" : "mx-auto";

  return (
    <div
      className={`mt-4 h-px w-16 bg-[#E31E24] md:w-20 ${alignClass} ${className}`}
      aria-hidden
    />
  );
}

export default function SectionHeader({
  eyebrow,
  title,
  accent,
  subtitle,
  className = "",
  linesAlign = "center",
  headingAs: HeadingTag = "h2",
}) {
  return (
    <div className={`mb-6 md:mb-8 text-center ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E31E24] md:text-xs">
          {eyebrow}
        </p>
      )}
      <HeadingTag className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {title}
        {accent && (
          <>
            {" "}
            <span className="text-[#E31E24]">{accent}</span>
          </>
        )}
      </HeadingTag>
      <HeadingRedLines align={linesAlign} />
      {subtitle && (
        <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-500 md:text-base">{subtitle}</p>
      )}
    </div>
  );
}
