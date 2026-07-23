"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export default function PremiumFilterSelect({ label, value, onChange, options, t, prefix }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((option) => option.value === value) ?? options[0];
  const selectedLabel = t(`${prefix}.${selectedOption.labelKey}`);

  return (
    <div className="relative min-w-0 flex-1" ref={ref}>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen((isOpen) => !isOpen)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`flex h-11 w-full items-center justify-between rounded-xl border bg-white px-3.5 text-left text-sm font-medium text-slate-800 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 ${
          open
            ? "border-[#E31E24] ring-2 ring-[#E31E24]/10"
            : "border-slate-200 hover:border-[#E31E24]/40"
        }`}
      >
        <span className="truncate">{selectedLabel}</span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${open ? "rotate-180 text-[#E31E24]" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-slate-200/80 bg-white py-1.5 shadow-[0_16px_40px_rgba(15,23,42,0.14)] ring-1 ring-black/5"
        >
          {options.map((option) => {
            const optionLabel = t(`${prefix}.${option.labelKey}`);
            const isSelected = value === option.value;

            return (
              <li key={option.value || "all"} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-3.5 py-2.5 text-left text-sm transition-colors duration-150 ${
                    isSelected
                      ? "bg-[#E31E24]/10 font-semibold text-[#E31E24]"
                      : "text-slate-700 hover:bg-[#E31E24] hover:text-white"
                  }`}
                >
                  <span>{optionLabel}</span>
                  {isSelected && <Check size={14} className="shrink-0" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
