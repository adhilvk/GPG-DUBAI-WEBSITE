"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import "./ArticleDownload.css";
import { useLanguage } from "@/context/LanguageContext";
import { ARTICLE_DOWNLOAD_OPTIONS } from "@/data/articleDownloads";

const COVER_IMAGE =
  "https://res.cloudinary.com/dsldkspov/image/upload/v1784877069/chirag_new_hj8foh.jpg";

export default function ArticleDownload() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleDownload = (file) => {
    const url = file.startsWith("http") ? file : new URL(file, window.location.origin).toString();
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "The-Wealth-Multiplier.pdf");
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <div className="article-download mt-8 md:mt-10">
      <div className="article-download__grid">
        <div className="article-download__media">
          <img
            src={COVER_IMAGE}
            alt={t("exclusiveProjects.articleCoverAlt")}
            className="article-download__image"
          />
        </div>

        <div className="article-download__content">
          <div className="article-download__header">
            <p className="article-download__kicker">{t("exclusiveProjects.articleTitle")}</p>
            <h2 className="article-download__headline">{t("exclusiveProjects.articleSubtitle")}</h2>
            <div className="article-download__title-line" aria-hidden />
          </div>
          <div className="article-download__copy">
            <p className="article-download__description">
              {t("exclusiveProjects.articleDescription")}
            </p>
            <p className="article-download__description article-download__description--last">
              {t("exclusiveProjects.articleDescription2")}
            </p>
          </div>

          <div className="article-download__dropdown" ref={dropdownRef}>
            <button
              type="button"
              className="article-download__button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-haspopup="menu"
            >
              {t("exclusiveProjects.articleDownload")}
              <ChevronDown
                size={18}
                className={`article-download__chevron ${isOpen ? "article-download__chevron--open" : ""}`}
              />
            </button>

            {isOpen ? (
              <ul className="article-download__menu" role="menu">
                {ARTICLE_DOWNLOAD_OPTIONS.map((article) => (
                  <li key={article.id} role="none">
                    <button
                      type="button"
                      role="menuitem"
                      className="article-download__menu-item"
                      onClick={() => handleDownload(article.file)}
                    >
                      <Download size={16} className="article-download__menu-item-icon" />
                      {article.label}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
