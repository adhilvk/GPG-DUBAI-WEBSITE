"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import "./HomeContactPopup.css";

const POPUP_DELAY_MS = 3000;
const CONTACT_EMAIL = "enquiries@globalpropertygroup.co";

export default function HomeContactPopup() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("call");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleCallSubmit = (event) => {
    event.preventDefault();
    if (!phone.trim()) return;

    const subject = encodeURIComponent("Callback Request");
    const body = encodeURIComponent(`Please call me back at: ${phone.trim()}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    closePopup();
  };

  const handleMailSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;

    const subject = encodeURIComponent("Contact Request");
    const body = encodeURIComponent(`Please contact me at: ${email.trim()}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    closePopup();
  };

  if (!isVisible) return null;

  return (
    <div className="home-contact-popup" role="complementary" aria-labelledby="home-contact-popup-title">
      <div className="home-contact-popup__card">
        <button
          type="button"
          className="home-contact-popup__close"
          onClick={closePopup}
          aria-label={t("homeContactPopup.close")}
        >
          <X size={18} />
        </button>

        <div className="home-contact-popup__tabs">
          <button
            type="button"
            className={`home-contact-popup__tab ${activeTab === "call" ? "home-contact-popup__tab--active" : ""}`}
            onClick={() => setActiveTab("call")}
          >
            <Phone size={16} />
            {t("homeContactPopup.callTab")}
          </button>
          <button
            type="button"
            className={`home-contact-popup__tab ${activeTab === "mail" ? "home-contact-popup__tab--active" : ""}`}
            onClick={() => setActiveTab("mail")}
          >
            <Mail size={16} />
            {t("homeContactPopup.mailTab")}
          </button>
        </div>

        {activeTab === "call" ? (
          <>
            <h2 id="home-contact-popup-title" className="home-contact-popup__title">
              {t("homeContactPopup.callTitle")}
            </h2>
            <p className="home-contact-popup__subtitle">{t("homeContactPopup.callSubtitle")}</p>

            <form className="home-contact-popup__form" onSubmit={handleCallSubmit}>
              <label className="home-contact-popup__label" htmlFor="home-contact-phone">
                <Phone size={14} />
                {t("homeContactPopup.phoneLabel")}
              </label>
              <input
                id="home-contact-phone"
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder={t("homeContactPopup.phonePlaceholder")}
                className="home-contact-popup__input"
                required
              />
              <button type="submit" className="home-contact-popup__submit">
                {t("homeContactPopup.callButton")}
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 id="home-contact-popup-title" className="home-contact-popup__title">
              {t("homeContactPopup.mailTitle")}
            </h2>
            <p className="home-contact-popup__subtitle">{t("homeContactPopup.mailSubtitle")}</p>

            <form className="home-contact-popup__form" onSubmit={handleMailSubmit}>
              <label className="home-contact-popup__label" htmlFor="home-contact-email">
                <Mail size={14} />
                {t("homeContactPopup.emailLabel")}
              </label>
              <input
                id="home-contact-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={t("homeContactPopup.emailPlaceholder")}
                className="home-contact-popup__input"
                required
              />
              <button type="submit" className="home-contact-popup__submit">
                {t("homeContactPopup.mailButton")}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
