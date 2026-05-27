"use client";

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
  { key: "emaar", name: "Emaar", src: "/images/brand4.webp" },
];

const Slider = () => {
  const { t } = useLanguage();

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
