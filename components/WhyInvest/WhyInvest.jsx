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

const WhyInvest = () => {
  const features = [
    { title: "Experience", icon: <Briefcase size={24} />, desc: "Over 50 years of combined excellence in global markets." },
    { title: "Data Driven", icon: <BarChart3 size={24} />, desc: "Advice meticulously based on real-time market data and analytics." },
    { title: "High Returns", icon: <TrendingUp size={24} />, desc: "Targeting consistent double-digit returns for our global investors." },
    { title: "Inventory", icon: <Key size={24} />, desc: "Exclusive access to off-plan and ready developer inventory." },
    { title: "Premium Edge", icon: <Home size={24} />, desc: "Sourcing premium properties tailored for elite buyers." },
    { title: "Distress Deals", icon: <Tag size={24} />, desc: "Accessing out-of-market opportunities and high-value distress deals." },
    { title: "Marketing", icon: <Megaphone size={24} />, desc: "Utilizing substantial budgets to ensure maximum property exposure." },
    { title: "Global Network", icon: <Globe size={24} />, desc: "Leveraging our network of international business partners." },
  ];

  return (
    <div className="invest-wrapper">
      <section className="invest-section">
        <div className="invest-container">
          <SectionHeader
            eyebrow="Why GPG"
            title="Why Invest"
            accent="With Us"
            subtitle="Institutional insight, global reach, and a partner-led approach to every mandate."
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
