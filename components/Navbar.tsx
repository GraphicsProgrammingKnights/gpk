"use client";

import { useEffect, useState } from "react";

const sections = ["home", "about", "challenges", "membership", "team"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  /* views each section and updates when it crosses the middle band of the viewport yuhh */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: "-40% 0px -40% 0px" },
    );

    // Observe each section element (if present).
    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    /* if navbar component ever gets removed, this stops wasting resources in the background (in case)*/
    return () => observer.disconnect();
  }, []);
 
  /* contains navbar w gpk tiny logo on left and blurs anything near navbar*/
  return (
    <nav aria-label="Primary" className="sticky top-0 z-50 bg-page-background/10 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-y-3 px-6 py-4 md:flex-nowrap md:gap-x-6">
        <div>
          <a href="#home" className="font-bold text-text-primary">
            GPK
          </a>
        </div>

        {/* same checkout form as the membership card; Stripe collects every field */}
        <form method="POST" action="/api/checkout" className="shrink-0 md:order-last">
          <button
            type="submit"
            className="cursor-pointer rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-text-primary transition-colors hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light"
          >
            Pay dues
          </button>
        </form>

        {/* active section gets filled white box!!! On phones the links drop to their own row. */}
        <div className="flex w-full items-center justify-between md:ml-auto md:w-auto md:justify-end md:gap-4 lg:gap-8">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              aria-current={activeSection === section ? "location" : undefined}
              className={`capitalize rounded-md border px-1.5 py-1 text-xs sm:text-sm md:px-3 md:text-base ${
                activeSection === section
                  ? "border-text-primary bg-white text-black"
                  : "border-transparent text-text-primary"
              }`}
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
