"use client";

import "./WhyInvest.css";
import { motion } from "framer-motion";
import {
  Briefcase,
  BarChart3,
  TrendingUp,
  Key,
  Home,
  Tag,
  Megaphone,
  Globe,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

const WhyInvest = () => {
  const { t } = useLanguage();
  const features = [
    { title: t("whyInvest.experience"), icon: <Briefcase size={24} />, desc: t("whyInvest.experienceDesc") },
    { title: t("whyInvest.dataDriven"), icon: <BarChart3 size={24} />, desc: t("whyInvest.dataDrivenDesc") },
    { title: t("whyInvest.highReturns"), icon: <TrendingUp size={24} />, desc: t("whyInvest.highReturnsDesc") },
    { title: t("whyInvest.inventory"), icon: <Key size={24} />, desc: t("whyInvest.inventoryDesc") },
    { title: t("whyInvest.premiumEdge"), icon: <Home size={24} />, desc: t("whyInvest.premiumEdgeDesc") },
    { title: t("whyInvest.distressDeals"), icon: <Tag size={24} />, desc: t("whyInvest.distressDealsDesc") },
    { title: t("whyInvest.marketing"), icon: <Megaphone size={24} />, desc: t("whyInvest.marketingDesc") },
    { title: t("whyInvest.globalNetwork"), icon: <Globe size={24} />, desc: t("whyInvest.globalNetworkDesc") },
  ];

  return (
    <div className="invest-wrapper">
      <section id="why-invest" className="invest-section scroll-mt-28">
        <div className="invest-container">
          <SectionHeader
            eyebrow={t("whyInvest.eyebrow")}
            title={t("whyInvest.title")}
            accent={t("whyInvest.accent")}
            className="!mb-6"
          />

          <div className="invest-grid">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="invest-card text-slate-700"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="invest-icon">{item.icon}</div>
                <span className="invest-card-title">{item.title}</span>
                <p className="invest-card-text">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyInvest;
