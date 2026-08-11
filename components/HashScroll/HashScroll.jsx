"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToSectionId } from "@/lib/navigation";

export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;

    let attempts = 0;
    const maxAttempts = 30;

    const tryScroll = () => {
      if (scrollToSectionId(hash, { updateHash: false })) return;
      attempts += 1;
      if (attempts < maxAttempts) {
        window.setTimeout(tryScroll, 50);
      }
    };

    tryScroll();
  }, [pathname]);

  return null;
}
