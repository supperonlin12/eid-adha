'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      videoRef.current.muted = false;
      videoRef.current.play();
    } else {
      videoRef.current.muted = true;
    }
    setIsMuted(!isMuted);
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-purple-200 via-indigo-200 to-blue-400 text-white font-sans overflow-hidden flex flex-col items-center justify-center px-6 py-10">

      {/* خلفية فيديو الحرم */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/mecca-video.mp4"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* زر التحكم بالصوت */}
      <button
        onClick={toggleSound}
        className="z-20 absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded px-4 py-2 text-sm text-white hover:bg-white/40 transition"
      >
        {isMuted ? 'تشغيل الصوت 🔊' : 'إيقاف الصوت 🔇'}
      </button>

      {/* محتوى التهنئة */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-center justify-center max-w-4xl mx-auto mb-20"
        style={{ marginTop: '-50px' }}
      >
        {/* عبارة العيد */}
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] mb-4 font-serif leading-tight text-yellow-300 text-center">
          عِيْد أَضْحَىٰ مُبَارَكْ
        </h1>

        {/* تهنئة متحركة */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-3xl text-amber-100 max-w-xl mx-auto font-light italic drop-shadow-lg leading-relaxed -mt-1 text-center"
          dir="rtl"
        >
          تَــقَــبَّــلَ اللّــهُ طَــاعَــتَــكُــم وَأَعَــادَ عَلَــيْــكُــمُ الْــعِــيــدَ بِــالْــخَــيْــرِ وَالْــيُــمْــنِ وَالْبَــرَكَــاتْ.. كُــلُّ عَــامٍ وَأَنْــتُــمْ بِــخَــيْــرٍ بِــمُــنَــاسَــبَــةِ عِــيــدِ الْأَضْــحَــى الْــمُــبَــارَك 
        </motion.p>
      </motion.div>

      {/* التوقيع مع الصورة */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="z-10 absolute bottom-6 text-center flex flex-col items-center gap-3"
      >
        <img
          src="/your-image.png"
          alt="Your Logo"
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
          style={{ marginBottom: '-10px' }}
        />
        <p className="text-white text-lg font-semibold drop-shadow-lg">Anas Alito</p>
        <p className="text-white/80 text-sm italic drop-shadow-md">Web Developer</p>

        {/* الأيقونات */}
        <div className="flex justify-center gap-6 text-yellow-300">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
            />
          </motion.svg>

          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            stroke="none"
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path d="M10 1.5l2.39 4.85 5.35.78-3.87 3.77.91 5.32L10 14.77l-4.78 2.51.91-5.32L2.26 7.13l5.35-.78L10 1.5z" />
          </motion.svg>

          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17h10M7 7h10M12 17v-6m0 0L9 11m3-0l3 1"
            />
          </motion.svg>
        </div>
      </motion.div>
    </main>
  );
}
