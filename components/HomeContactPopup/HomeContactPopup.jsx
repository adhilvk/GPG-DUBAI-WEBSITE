"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Instagram, Mail, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./HomeContactPopup.css";

const POPUP_DELAY_MS = 800;
const WA_NUMBER = "971542068414";
const EMAIL = "enquiries@globalpropertygroup.co";
const INSTAGRAM_URL = "https://www.instagram.com/xgpg.luxury/";

function WhatsAppGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.888 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

function buildEnquiry({ name, phone, email, message }) {
  return [
    "Hello GPG,",
    "",
    `Name: ${name}`,
    phone ? `Phone: ${phone}` : null,
    email ? `Email: ${email}` : null,
    message ? `Message: ${message}` : null,
    "",
    "I would like to enquire about your properties.",
  ]
    .filter((line) => line !== null)
    .join("\n");
}

function openUrl(url) {
  const opened = window.open(url, "_blank");
  if (opened) {
    opened.opener = null;
    return;
  }

  window.location.href = url;
}

export default function HomeContactPopup() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);
  const [mode, setMode] = useState("form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady || mode !== "form") return undefined;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isReady, mode]);

  if (!isReady || pathname === "/contact-us") return null;

  const closeForm = () => {
    setError("");
    setMode("dock");
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setError("");
  };

  const handleWhatsApp = (event) => {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError(t("homeContactPopup.whatsappRequired"));
      return;
    }

    const text = buildEnquiry({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim(),
    });
    openUrl(`https://api.whatsapp.com/send?phone=${WA_NUMBER}&text=${encodeURIComponent(text)}`);
    resetForm();
  };

  const handleEmail = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError(t("homeContactPopup.emailRequired"));
      return;
    }

    const subject = `Website enquiry from ${name.trim()}`;
    const body = buildEnquiry({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim(),
    });
    openUrl(
      `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
    resetForm();
  };

  if (mode === "dock") {
    return (
      <div className="home-contact-popup" role="complementary" aria-label="Contact">
        <div className="home-contact-popup__card">
          <button
            type="button"
            className="home-contact-popup__close"
            onClick={() => setIsReady(false)}
            aria-label={t("homeContactPopup.close")}
          >
            <X size={14} />
          </button>

          <div className="home-contact-popup__actions">
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="home-contact-popup__icon-btn home-contact-popup__icon-btn--whatsapp"
              aria-label="WhatsApp +971 542068414"
              title="+971 542068414"
            >
              <WhatsAppGlyph className="home-contact-popup__icon" />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              onClick={(event) => {
                event.preventDefault();
                window.open(
                  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="home-contact-popup__icon-btn home-contact-popup__icon-btn--mail"
              aria-label={`Email ${EMAIL}`}
              title={EMAIL}
            >
              <Mail className="home-contact-popup__icon" strokeWidth={2} />
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="home-contact-popup__icon-btn home-contact-popup__icon-btn--instagram"
              aria-label="Instagram @xgpg.luxury"
              title="@xgpg.luxury"
            >
              <Instagram className="home-contact-popup__icon" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="home-contact-form-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="home-contact-form-title"
    >
      <button
        type="button"
        className="home-contact-form-overlay__backdrop"
        onClick={closeForm}
        aria-label={t("homeContactPopup.close")}
      />

      <div className="home-contact-form">
        <button
          type="button"
          className="home-contact-form__close"
          onClick={closeForm}
          aria-label={t("homeContactPopup.close")}
        >
          <X size={16} />
        </button>

        <p className="home-contact-form__eyebrow">{t("homeContactPopup.eyebrow")}</p>
        <h2 id="home-contact-form-title" className="home-contact-form__title">
          {t("homeContactPopup.title")}
        </h2>
        <p className="home-contact-form__subtitle">{t("homeContactPopup.subtitle")}</p>

        <form className="home-contact-form__fields" onSubmit={handleWhatsApp} noValidate>
          <label className="home-contact-form__label">
            {t("homeContactPopup.name")}
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={t("homeContactPopup.namePlaceholder")}
              className="home-contact-form__input"
            />
          </label>

          <label className="home-contact-form__label">
            {t("homeContactPopup.phone")}
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder={t("homeContactPopup.phonePlaceholder")}
              className="home-contact-form__input"
            />
          </label>

          <label className="home-contact-form__label">
            {t("homeContactPopup.email")}
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t("homeContactPopup.emailPlaceholder")}
              className="home-contact-form__input"
            />
          </label>

          <label className="home-contact-form__label">
            {t("homeContactPopup.message")}
            <textarea
              name="message"
              rows={3}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={t("homeContactPopup.messagePlaceholder")}
              className="home-contact-form__input home-contact-form__textarea"
            />
          </label>

          {error ? <p className="home-contact-form__error">{error}</p> : null}

          <div className="home-contact-form__buttons">
            <button
              type="button"
              className="home-contact-form__btn home-contact-form__btn--whatsapp"
              onClick={handleWhatsApp}
            >
              <WhatsAppGlyph className="home-contact-form__btn-icon" />
              {t("homeContactPopup.whatsappButton")}
            </button>
            <button
              type="button"
              className="home-contact-form__btn home-contact-form__btn--email"
              onClick={handleEmail}
            >
              <Mail size={16} strokeWidth={2} />
              {t("homeContactPopup.emailButton")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
