"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import HomeContactPopup from "@/components/HomeContactPopup/HomeContactPopup";

export default function AppProviders({ children }) {
  return (
    <LanguageProvider>
      {children}
      <HomeContactPopup />
    </LanguageProvider>
  );
}
