"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, BedDouble, Ruler, MapPin } from 'lucide-react';

const ExclusiveProjects = () => {
  const projects = [
    {
      title: "The Heights By Emaar",
      type: "Villa",
      beds: "3, 4, 5",
      price: "TBA",
      area: "NA sq ft",
      location: "The Heights Country Club",
      image: "/images/heightsbyemaar.webp" // Use your actual image paths
    },
    {
      title: "Palm Central",
      type: "Apartment, Penthouse",
      beds: "1, 2, 3, 4, 5",
      price: "2.5M",
      area: "836 - 9,762 sq ft",
      location: "Palm Jebel Ali",
      image: "/images/palmcentral.jpg"
    },
    {
      title: "Grand Polo Club & Resort",
      type: "Villa",
      beds: "3, 4, 5",
      price: "5.7M",
      area: "2,948 - 8,607 sq ft",
      location: "Grand Polo Club & Resort",
      image: "/images/grandpolo.webp"
    },
    {
      title: "Damac Riverside",
      type: "Apartment, Townhouse",
      beds: "Studio, 1, 2, 4, 5",
      price: "1.5M",
      area: "800 - 3,470 sq ft",
      location: "Damac Riverside",
      image: "/images/Riverside.jpg"
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-360 mx-auto">
        
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h2 
          style={{ fontFamily: "'serif', 'Times New Roman', serif" }}
          className=" text-gray-900 text-4xl font-serif mb-4 font-semibold">Projects</h2>
          <p className="text-gray-400 text-lg">
            Explore Dubai's most exclusive properties with Richkey.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative h-150 rounded-4xl overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-bold mb-6 leading-tight">
                  {project.title}
                </h3>

                {/* Property Details List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Building2 size={18} className="text-gray-400 opacity-70" />
                    <span className="text-sm">{project.type}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <BedDouble size={18} className="text-gray-400 opacity-70" />
                    <span className="text-sm">{project.beds}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span className="text-lg font-bold">AED {project.price}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Ruler size={18} className="text-gray-400 opacity-70" />
                    <span className="text-sm">{project.area}</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPin size={18} className="text-gray-400 opacity-70 mt-1" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                </div>

                {/* Call to Action */}
                <button className="w-full py-4 bg-white text-black font-bold rounded-2xl transition-all duration-300 hover:bg-[#C5A059] hover:text-white">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExclusiveProjects;