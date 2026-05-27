"use client";

import { useCallback, useRef } from "react";
import "./Slider.css";
import { useLanguage } from "@/context/LanguageContext";

const brands = [
  { key: "meraas", name: "Meraas", src: "/images/brand5.png" },
  { key: "dubai-properties", name: "Dubai Properties", src: "/images/brand6.webp" },
  { key: "nakheel", name: "Nakheel", src: "/images/brand7.png" },
  { key: "aldar", name: "Aldar", src: "/images/brand8.webp" },
  { key: "mag", name: "MAG", src: "/images/brand9.webp" },
  { key: "omniyat", name: "Omniyat", src: "/images/brand10.png" },
  { key: "damac", name: "Damac", src: "/images/brand11.webp" },
  { key: "ellington", name: "Ellington", src: "/images/brand1.webp" },
  { key: "binghatti", name: "Binghatti", src: "/images/brand3.webp" },
  { key: "emaar", name: "Emaar", src: "/images/brand4.webp", isReference: true },
];

/** Compensates for extra whitespace in logo source files */
const VISUAL_SCALE = {
  meraas: 0.92,
  "dubai-properties": 0.8,
  nakheel: 0.82,
  aldar: 0.84,
  mag: 0.86,
  omniyat: 1.75,
  damac: 1.7,
  ellington: 1.22,
  binghatti: 1.12,
  emaar: 1,
};

const Slider = () => {
  const { t } = useLanguage();
  const referenceHeightRef = useRef(null);
  const pendingLogosRef = useRef([]);

  const normalizeLogo = useCallback((img, brandKey) => {
    const referenceHeight = referenceHeightRef.current;
    if (!referenceHeight || !img) return;

    const visualScale = VISUAL_SCALE[brandKey] ?? 1;
    const baseHeight = referenceHeight / visualScale;

    img.style.height = `${baseHeight}px`;
    img.style.width = "auto";
    img.style.maxWidth = "100%";
    img.style.transform = visualScale === 1 ? "" : `scale(${visualScale})`;
  }, []);

  const handleLogoLoad = useCallback(
    (event, isReference, brandKey) => {
      const img = event.currentTarget;

      requestAnimationFrame(() => {
        if (isReference) {
          referenceHeightRef.current = img.getBoundingClientRect().height;
          pendingLogosRef.current.forEach(({ img: pendingImg, key }) =>
            normalizeLogo(pendingImg, key)
          );
          pendingLogosRef.current = [];
          return;
        }

        if (referenceHeightRef.current) {
          normalizeLogo(img, brandKey);
        } else {
          pendingLogosRef.current.push({ img, key: brandKey });
        }
      });
    },
    [normalizeLogo]
  );

  const displayBrands = [...brands, ...brands];

  return (
    <section className="slider-section">
      <div className="slider-inner">
        <header className="slider-header">
          <h2 className="slider-heading">
            <span className="slider-heading__line">{t("slider.line1")}</span>
            {t("slider.line2") ? (
              <span className="slider-heading__line">{t("slider.line2")}</span>
            ) : null}
          </h2>
        </header>

        <div className="marquee-container">
        <div className="marquee-content">
          {displayBrands.map((brand, index) => (
            <div
              key={`${brand.key}-${index}`}
              className={`logo-brand logo-brand--${brand.key}`}
            >
              <div className="logo-brand__frame">
                <div className="logo-brand__image-wrap">
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="logo-brand__image"
                    loading="lazy"
                    decoding="async"
                    onLoad={(event) =>
                      handleLogoLoad(event, Boolean(brand.isReference), brand.key)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Slider;
