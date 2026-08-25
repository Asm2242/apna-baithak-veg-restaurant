"use client";
import { useEffect, useState } from "react";

export default function LogoSplash() {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("apna-splash-shown")) {
        setShow(false);
        return;
      }
    } catch {}
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 900);
    const t3 = setTimeout(() => setPhase(3), 1600);
    const hide = setTimeout(() => {
      setShow(false);
      try { sessionStorage.setItem("apna-splash-shown", "1"); } catch {}
    }, 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(hide);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-[#040208] transition-opacity duration-700 ${phase === 3 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      aria-hidden
    >
      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_50%_45%,rgba(234,88,12,0.18),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(500px_300px_at_50%_80%,rgba(34,197,94,0.12),transparent_70%)]" />

      <div className="relative flex flex-col items-center px-6">
        {/* Neon logo image - place your uploaded file as /public/logo-neon.png ; fallback to CSS neon if missing */}
        <div className={`relative transition-all duration-700 ${phase >= 1 ? "scale-100" : "scale-90 opacity-60"} drop-shadow-[0_0_30px_rgba(251,146,60,0.35)]`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-neon.svg"
            alt="APNA BAITHAK Vegetarian Restaurant"
            className={`w-[300px] sm:w-[420px] object-contain select-none ${phase === 0 ? "opacity-90" : ""}`}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const fb = document.getElementById("neon-fallback");
              if (fb) fb.style.display = "flex";
            }}
          />
          {/* Fallback pure CSS neon logo */}
          <div id="neon-fallback" className="hidden flex-col items-center">
            <div className={`rounded-full border-2 border-[#f59e0b] px-8 py-6 bg-black shadow-[0_0_40px_rgba(245,158,11,0.45),inset_0_0_20px_rgba(245,158,11,0.15)] ${phase === 1 ? "animate-[neonFlicker_0.6s_steps(2)_1]" : ""}`}>
              <div className="flex items-center gap-4 text-[#f97316]">
                <span className={`text-3xl ${phase >= 1 ? "animate-[neonFlicker_0.3s_steps(2)_2]" : ""}`}>🍴</span>
                <span className="text-xl">👨‍🍳</span>
                <span className="text-3xl">🥄</span>
              </div>
              <div
                className={`mt-2 font-black tracking-[0.18em] text-3xl sm:text-4xl text-[#fb923c] ${phase >= 1 ? "animate-[neonFlicker_0.5s_steps(2)_1]" : ""}`}
                style={{ textShadow: "0 0 12px rgba(251,146,60,0.9), 0 0 28px rgba(234,88,12,0.7)" }}
              >
                APNA
              </div>
              <div
                className={`font-black tracking-[0.14em] text-3xl sm:text-4xl text-[#86efac] ${phase >= 2 ? "animate-[neonFlicker_0.4s_steps(2)_1]" : "opacity-70"}`}
                style={{ textShadow: "0 0 14px rgba(134,239,172,0.9), 0 0 32px rgba(34,197,94,0.6)" }}
              >
                BAITHAK
              </div>
              <div className="mt-2 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#facc15] px-4 py-1 text-center text-[10px] font-black tracking-[0.2em] text-[#1c0a00] shadow-[0_0_16px_rgba(250,204,21,0.6)]">VEGETARIAN RESTAURANT</div>
              <div className="mt-1 text-center text-[10px] tracking-[0.15em] text-white/80">Pure Veg. <span className="text-[#86efac]">🍃</span> Fresh Taste</div>
            </div>
          </div>

          {/* scanline flicker overlay for image */}
          <div className={`pointer-events-none absolute inset-0 rounded-[32px] ${phase === 1 ? "animate-[neonFlicker_0.25s_steps(2)_3]" : "opacity-0"}`} style={{ background: "repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,0.04) 2px 3px)", mixBlendMode: "overlay" }} />
        </div>

        <div className={`mt-6 h-[2px] w-[220px] rounded-full bg-gradient-to-r from-transparent via-[#facc15] to-transparent transition-all duration-700 ${phase >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-75"} shadow-[0_0_12px_rgba(250,204,21,0.8)]`} />

        <p className={`mt-3 text-xs font-bold tracking-[0.22em] text-white/60 transition-all duration-700 ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>ELDECO CITY • PURE VEG • ESTD</p>

        <div className="mt-4 flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-[#ea580c] animate-[neonFlicker_1s_steps(2)_infinite]" />
          <span className="h-1 w-1 rounded-full bg-[#facc15] animate-[neonFlicker_1s_steps(2)_infinite_0.2s]" />
          <span className="h-1 w-1 rounded-full bg-[#22c55e] animate-[neonFlicker_1s_steps(2)_infinite_0.4s]" />
        </div>
      </div>

      <style>{`
        @keyframes neonFlicker {
          0%, 18%, 22%, 25%, 53%, 57%, 100% { opacity: 1; filter: brightness(1); }
          20%, 24%, 55% { opacity: 0.55; filter: brightness(0.7); }
        }
        @keyframes neonBorder {
          0%,100% { box-shadow: 0 0 24px rgba(245,158,11,0.45), inset 0 0 18px rgba(245,158,11,0.18); }
          50% { box-shadow: 0 0 36px rgba(245,158,11,0.65), inset 0 0 24px rgba(245,158,11,0.28); }
        }
      `}</style>
    </div>
  );
}
