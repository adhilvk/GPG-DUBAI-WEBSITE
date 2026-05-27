"use client";

import "./ArticleDownload.css";
import { useLanguage } from "@/context/LanguageContext";

const ARTICLE_PDF = "/images/wealthmultiplication.pdf";
const COVER_IMAGE = "/images/chiragpic.jpeg";

export default function ArticleDownload() {
  const { t } = useLanguage();
  const accent = t("exclusiveProjects.articleAccent");

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
          <a
            href={ARTICLE_PDF}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="article-download__button"
          >
            {t("exclusiveProjects.articleDownload")}
          </a>
        </div>
      </div>
    </div>
  );
}
