"use client";

import './WhyInvest.css';
import { motion } from 'framer-motion';
// Icons: Use Lucide-React for the clean stroke look in the image
import { Briefcase, BarChart3, TrendingUp, Key, Home, Tag, Megaphone, Globe } from 'lucide-react';

const WhyInvest = () => {
  const features = [
    { title: "Experience", icon: <Briefcase size={28} />, desc: "Over 50 years of combined excellence in global markets." },
    { title: "Data Driven", icon: <BarChart3 size={28} />, desc: "Advice meticulously based on real-time market data and analytics." },
    { title: "High Returns", icon: <TrendingUp size={28} />, desc: "Targeting consistent double-digit returns for our global investors." },
    { title: "Inventory", icon: <Key size={28} />, desc: "Exclusive access to off-plan and ready developer inventory." },
    { title: "Premium Edge", icon: <Home size={28} />, desc: "Sourcing premium properties tailored for elite buyers." },
    { title: "Distress Deals", icon: <Tag size={28} />, desc: "Accessing out-of-market opportunities and high-value distress deals." },
    { title: "Marketing", icon: <Megaphone size={28} />, desc: "Utilizing substantial budgets to ensure maximum property exposure." },
    { title: "Global Network", icon: <Globe size={28} />, desc: "Leveraging our network of international business partners." },
  ];

  return (
    <div className="invest-wrapper">
    <section className="invest-section">
      <div className="invest-container">
                  <h2 className="text-gray-900 text-4xl font-serif font-semibold mb-2 text-center">Why To Invest With GPG</h2>

        <div className="invest-grid">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="invest-card text-gray-700 "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="invest-icon text-white">{item.icon}</div>
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