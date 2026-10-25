"use client";

import Image from "next/image";
import { motion } from "motion/react";
import gpkTriangleLogo from "@/public/gpk_logo_new.webp";

export default function AsciiHero() {
  return (
    <div className="flex items-center justify-center w-full h-full overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, mass: 1 }}
      >
        <Image
          src={gpkTriangleLogo}
          alt="Graphics Programming Knights logo"
          className="w-full h-full object-contain"
          sizes="(min-width: 1344px) 38vw, (min-width: 1280px) 512px, (min-width: 1024px) 45vw, (min-width: 640px) 384px, 288px"
          priority
        />

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
