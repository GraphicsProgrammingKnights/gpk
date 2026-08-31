import Image from "next/image";
import gpkTriangleLogo from "@/public/gpk_logo_new.webp";

export default function AsciiHero() {
  return (
    <div className="flex items-center justify-start w-225 max-w-full h-full -translate-y-15">
      <Image
        src={gpkTriangleLogo}
        alt="Graphics Programming Knights logo"
        
        className="w-full h-full object-fill"
        priority
      />
    </div>
  );
}
