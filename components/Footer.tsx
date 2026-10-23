import Image from "next/image";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import gpklogo from "@/public/gpk_logo_new.webp";

const linkGroups = [
  {
    title: "Club",
    links: [
      { label: "Home", href: "#home" },
      { label: "About us", href: "#about" },
      { label: "Challenges", href: "#challenges" },
      { label: "Team", href: "#team" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Workshop Slides", href: "https://github.com/GraphicsProgrammingKnights/Workshops" },
      { label: "GitHub Repos", href: "https://github.com/orgs/GraphicsProgrammingKnights/repositories" },
      { label: "Linktree", href: "https://linktr.ee/GPKnights" },
    ],
  },
];

const socialLinks = [
  { label: "Discord", href: "https://discord.gg/h9VRpcQDV", icon: FaDiscord },
  { label: "Instagram", href: "https://www.instagram.com/gpknights_", icon: FaInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/graphics-programming-knights/", icon: FaLinkedin },
  { label: "YouTube", href: "https://www.youtube.com/@GraphicProgrammingKnights", icon: FaYoutube },
  { label: "GitHub", href: "https://github.com/GraphicsProgrammingKnights/gpkweb", icon: FaGithub },
];

const focusStyles = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light";

export default function Footer() {
  return (
    <div className="w-full border-t border-card-border">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 py-8 md:grid-cols-[2fr_1fr_1fr] md:gap-x-12">
          <div className="col-span-2 flex items-center gap-4 md:col-span-1">
            <Image
              src={gpklogo}
              alt="GPK logo"
              className="h-auto w-28 shrink-0 sm:w-36"
              sizes="(min-width: 640px) 144px, 112px"
            />
            <div className="max-w-60">
              <p className="text-sm font-bold leading-snug text-text-primary sm:text-base">
                Graphics Programming Knights
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                UCF&apos;s computer graphics community.
              </p>
            </div>
          </div>
          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={`Footer ${group.title.toLowerCase()}`}>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-text-primary">
                {group.title}
              </h2>
              <ul className="space-y-1">
                {group.links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("#") ? undefined : "_blank"}
                      rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
                      className={`inline-block py-1 text-sm text-text-secondary transition-colors hover:text-accent-light ${focusStyles}`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t border-card-border py-3 sm:flex-row">
          <p className="text-center text-xs text-text-secondary sm:text-left">
            © 2026 Graphics Programming Knights
          </p>
          <ul aria-label="Social links" className="flex gap-1 text-text-secondary">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-card-background hover:text-accent-light ${focusStyles}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
