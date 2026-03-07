"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Play } from 'lucide-react'; // Ensure lucide-react is installed

const InstagramGallery = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

   const reels = [
  { 
    id: 1, 
    thumbnail: "/reels/thumb1.jpg", 
    videoUrl: "https://res.cloudinary.com/dsldkspov/video/upload/v1772864903/video1_u6mv9a.mp4", 
    caption: "Exploring Dubai's most prime locations." 
  },
  { 
    id: 2, 
    thumbnail: "/reels/thumb2.jpg", 
    videoUrl: "https://res.cloudinary.com/dsldkspov/video/upload/v1772864992/video2_btc1dg.mp4", 
    caption: "Today's opportunities in the marketplace." 
  },
  { 
    id: 3, 
    thumbnail: "/reels/thumb3.jpg", 
    videoUrl: "https://res.cloudinary.com/dsldkspov/video/upload/v1772865013/video3_tru9f9.mp4", 
    caption: "Fast tracking our way to number one." 
  },
  { 
    id: 4, 
    thumbnail: "/reels/thumb4.jpg", 
    videoUrl: "https://res.cloudinary.com/dsldkspov/video/upload/v1772865031/video4_jkda8j.mp4", 
    caption: "Join a top-tier team at GPG." 
  },
];

    const handleFollow = () => {
        window.open("https://www.instagram.com/xgpg.luxury/", "_blank");
    };

    return (
        <section className="relative bg-white py-20 px-6">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-slate-300 z-10"></div>      

            <div className="max-w-7xl mx-auto">
                {/* Header with Follow Button */}
                <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
                    <div>
                        <h2 style={{ fontFamily: "'serif', 'Times New Roman', serif" }} className="font-semibold text-gray-900 text-3xl md:text-4xl mb-2">
                            Explore Our Social Media
                        </h2>
                        <p className="text-slate-400">@xgpg.luxury</p>
                    </div>
                    <button
                        onClick={handleFollow}
                        className="bg-[#C5A059] hover:bg-[#b38f4d] text-black px-8 py-2 font-bold rounded-sm transition-all"
                    >
                        Follow
                    </button>
                </div>

                {/* Reels Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                    {reels.map((reel) => (
                        <motion.div
                            key={reel.id}
                            whileHover={{ scale: 0.98 }}
                            className="relative h-120 cursor-pointer overflow-hidden rounded-lg group" onClick={() => setSelectedVideo(reel)}
                        >
                            <img src={reel.thumbnail} alt="Reel" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Play className="text-white w-12 h-12 fill-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video Modal Player */}
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
                            className="absolute top-6 right-6 text-white hover:text-slate-300"
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row max-w-5xl w-full h-full max-h-[80vh]"
                        >
                            {/* Left: Video Player */}
                            <div className="flex-1 bg-black flex items-center justify-center relative">
                                <video
                                    src={selectedVideo.videoUrl}
                                    controls
                                    autoPlay
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            {/* Right: Info Panel */}
                            <div className="w-full md:w-100 p-8 flex flex-col justify-between bg-white text-black">
                                <div>
                                    <div className="flex items-center space-x-3 mb-6">
                                        <img
                                            src="/images/instadp.jpg"
                                            alt="Instagram DP"
                                            className="w-10 h-10 rounded-full object-cover border border-slate-200"
                                        />

                                        <div>
                                            <p className="font-bold text-sm">xgpg.luxury</p>
                                            <p className="text-xs text-slate-500">Dubai, UAE</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-700 leading-relaxed">
                                        {selectedVideo.caption}
                                    </p>
                                    <p className="mt-4 text-blue-600 text-sm font-medium">#gpg #dubairealestate #investing</p>
                                </div>

                                <button
                                    onClick={handleFollow}
                                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg flex items-center justify-center space-x-2 hover:bg-black transition-colors"
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