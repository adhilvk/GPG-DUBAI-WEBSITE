"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Play } from "lucide-react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const InstagramGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const reels = [
    {
      id: 1,
      thumbnail: "/reels/thumb1.jpg",
      videoUrl:
        "https://res.cloudinary.com/dsldkspov/video/upload/v1772864903/video1_u6mv9a.mp4",
      caption: "Exploring Dubai's most prime locations.",
    },
    {
      id: 2,
      thumbnail: "/reels/thumb2.jpg",
      videoUrl:
        "https://res.cloudinary.com/dsldkspov/video/upload/v1772864992/video2_btc1dg.mp4",
      caption: "Today's opportunities in the marketplace.",
    },
    {
      id: 3,
      thumbnail: "/reels/thumb3.jpg",
      videoUrl:
        "https://res.cloudinary.com/dsldkspov/video/upload/v1772865013/video3_tru9f9.mp4",
      caption: "Fast tracking our way to number one.",
    },
    {
      id: 4,
      thumbnail: "/reels/thumb4.jpg",
      videoUrl:
        "https://res.cloudinary.com/dsldkspov/video/upload/v1772865031/video4_jkda8j.mp4",
      caption: "Join a top-tier team at GPG.",
    },
  ];

  const handleFollow = () => {
    window.open("https://www.instagram.com/xgpg.luxury/", "_blank");
  };

  return (
    <section className="relative bg-white px-6 py-12 md:py-14">
      <div className="absolute left-1/2 top-0 z-10 h-px w-full max-w-2xl -translate-x-1/2 bg-red-100" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-red-50 pb-5 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Social"
            title="Explore Our"
            accent="Social Media"
            subtitle="@xgpg.luxury"
            className="!mb-0 text-left [&_h2]:text-left [&_p]:mx-0"
          />
          <button
            onClick={handleFollow}
            className="shrink-0 rounded-lg bg-[#E31E24] px-10 py-3 text-sm font-bold tracking-wide text-white shadow-sm transition-colors hover:bg-[#c81b20]"
          >
            Follow
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {reels.map((reel) => (
            <motion.div
              key={reel.id}
              whileHover={{ y: -4 }}
              className="group relative h-100 cursor-pointer overflow-hidden rounded-xl border border-red-50 shadow-sm transition-shadow hover:shadow-[0_12px_32px_rgba(227,30,36,0.12)]"
              onClick={() => setSelectedVideo(reel)}
            >
              <img src={reel.thumbnail} alt="Reel" className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-[#E31E24]/0 opacity-0 transition-all group-hover:bg-[#E31E24]/30 group-hover:opacity-100">
                <Play className="h-12 w-12 fill-white text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute right-6 top-6 text-white hover:text-red-200"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="flex h-full max-h-[80vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white md:flex-row"
            >
              <div className="relative flex flex-1 items-center justify-center bg-black">
                <video
                  src={selectedVideo.videoUrl}
                  controls
                  autoPlay
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex w-full flex-col justify-between bg-white p-8 text-black md:w-100">
                <div>
                  <div className="mb-6 flex items-center space-x-3">
                    <img
                      src="/images/instadp.jpg"
                      alt="Instagram DP"
                      className="h-10 w-10 rounded-full border border-red-100 object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold">xgpg.luxury</p>
                      <p className="text-xs text-slate-500">Dubai, UAE</p>
                    </div>
                  </div>
                  <p className="leading-relaxed text-slate-700">{selectedVideo.caption}</p>
                  <p className="mt-4 text-sm font-medium text-[#E31E24]">
                    #gpg #dubairealestate #investing
                  </p>
                </div>

                <button
                  onClick={handleFollow}
                  className="mt-6 flex w-full items-center justify-center space-x-2 rounded-lg bg-[#E31E24] py-4 font-bold text-white transition-colors hover:bg-[#c81b20]"
                >
                  <Instagram size={20} />
                  <span>View on Instagram</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InstagramGallery;
