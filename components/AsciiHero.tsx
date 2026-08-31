"use client";

import Image from "next/image";
import { motion } from "motion/react";
import gpkTriangleLogo from "@/public/gpk_logo_new.webp";

export default function AsciiHero() {
  return (
    <div className="flex items-center justify-start w-225 max-w-full h-full -translate-y-15">
      {/* ── Entrance "swish" ──────────────────────────────────────────────
          Starts at scale 0, springs past full size, settles back down.
          Lower `damping` relative to `stiffness` = bigger overshoot/bounce;
          raise `damping` for a softer landing. `mass` slows the whole thing
          down if you want the swish to feel heavier. */}
      <motion.div
        className="relative w-full h-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, mass: 1 }}
      >
        <Image
          src={gpkTriangleLogo}
          alt="Graphics Programming Knights logo"
          className="w-full h-full object-fill"
          priority
        />

        {/* ── Shine sweep ─────────────────────────────────────────────────
            A soft white band that slides diagonally across the logo. It's
            masked to the logo image's own alpha channel, so the glow only
            ever lands on the logo's pixels rather than a rectangle around
            it. To fire it on hover instead of automatically, delete
            `animate`/`transition` here and drive it with `whileHover` on
            the wrapping motion.div above instead. */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
            "linear-gradient(115deg, transparent 48%, rgba(255,255,255,0.15) 50%, transparent 52%)",
            backgroundSize: "250% 250%",
            WebkitMaskImage: `url(${gpkTriangleLogo.src})`,
            maskImage: `url(${gpkTriangleLogo.src})`,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 100%" }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            delay: 0.2,
            repeat: Infinity,
            repeatDelay: 8.0,
          }}
        />
      </motion.div>
    </div>
  );
}
