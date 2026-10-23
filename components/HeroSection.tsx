import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import AsciiHero from "./AsciiHero";

export default function HeroSection() {
  return (
    <section className="grid w-full min-w-0 flex-1 grid-cols-1 content-center items-center gap-8 py-10 text-text-primary sm:py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:py-16">
      {/* Left Column: Heading, Subheading, Button, and Icons */}
      <div className="flex min-w-0 flex-col gap-6">
        <h1 className="text-[clamp(2.4rem,5.4vw,5.4rem)] leading-[1.05] font-extrabold tracking-tight">
          Graphics Programming Knights
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-text-secondary sm:text-xl lg:text-2xl">
          University of Central Florida&apos;s Computer Graphics RSO
        </p>

        {/* Button and Icons Row */}
        <div className="flex flex-wrap items-center gap-5 mt-2">
          <a
            href="https://discord.gg/XwDHkT3fRa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-lg font-medium text-text-primary transition-colors hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light"
          >
            Join Us
            <FaDiscord size={28} />
          </a>

          {/* Icons Row */}
          <div className="flex flex-row items-center gap-5 text-text-secondary">
            <a
              href="https://www.instagram.com/gpknights_"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center hover:text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light"
            >
              <FaInstagram className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/company/graphics-programming-knights/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center hover:text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Keep the animated logo proportional to the available column width. */}
      <div className="order-first mx-auto aspect-square w-full max-w-72 sm:max-w-96 lg:order-last lg:max-w-lg">
        <AsciiHero />
      </div>
    </section>
  );
}
