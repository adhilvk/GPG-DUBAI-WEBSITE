"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import "./ArticleDownload.css";
import { useLanguage } from "@/context/LanguageContext";

const ARTICLE_OPTIONS = [
  { id: "a", label: "Download A", file: "/images/wealthmultiplication.pdf" },
  { id: "b", label: "Download B", file: "/images/wealthmultiplication.pdf" },
  { id: "c", label: "Download C", file: "/images/wealthmultiplication.pdf" },
  { id: "d", label: "Download D", file: "/images/wealthmultiplication.pdf" },
];

const COVER_IMAGE = "/images/chiragpic.jpeg";

export default function ArticleDownload() {
  const { t } = useLanguage();
  const accent = t("exclusiveProjects.articleAccent");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = "";
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
          <h2 className="article-download__title">
            {t("exclusiveProjects.articleTitle")}
            {accent ? (
              <>
                {" "}
                <span className="article-download__title-accent">{accent}</span>
              </>
            ) : null}
          </h2>
          <p className="article-download__note">
            Waiting for the content to be mentioned.
          </p>

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
                {ARTICLE_OPTIONS.map((article) => (
                  <li key={article.id} role="none">
                    <button
                      type="button"
                      role="menuitem"
                      className="article-download__menu-item"
                      onClick={() => handleDownload(article.file)}
                    >
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
