// src/components/VideoFrame.jsx
import React, { useEffect, useRef } from "react";

// Ajusta estos valores internos si lo necesitas
const VIDEO_SRC = "/videos/promo-video.mp4";
const VIDEO_POSTER = "/images/promo-video-poster.jpg";
const WRAPPER_CLASSNAME = "w-[90vw] max-w-4xl mx-auto py-[10vh]";

export default function VideoFrame() {
  const videoRef = useRef(null);

  // Intento extra por si el navegador bloquea el autoplay
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // Ignorar silenciosamente
      }
    };
    tryPlay();
  }, []);

  return (
    <div className={WRAPPER_CLASSNAME}>
      {/* Marco elegante con blur */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
        {/* Glow sutil */}
        <div className="pointer-events-none absolute -inset-1 rounded-[inherit] bg-gradient-to-tr from-white/10 via-white/0 to-white/10 blur-2xl opacity-40" />
        {/* Bisel interno */}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/10" />

        {/* Área del video con relación 16:9 */}
        <div className="relative aspect-[16/9]">
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            poster={VIDEO_POSTER}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="metadata"
          />
          {/* Vignette sutil */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,transparent_0%,transparent_60%,rgba(0,0,0,0.35)_100%)]" />
        </div>

        {/* Pie translúcido opcional */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
    </div>
  );
}
