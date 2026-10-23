import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import ChallengesSection from "@/components/ChallengesSection"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between pb-24 text-text-primary max-w-7xl w-full mx-auto">
        {/* START OF THE HOME SECTION */}
        <section id="home" className="min-h-[calc(100svh-4rem)] w-full flex flex-col items-center px-6 sm:px-10 lg:px-16">
          <HeroSection />
        </section>

        {/* START OF THE ABOUT SECTION */}
        <section id="about" className="min-h-screen w-full flex flex-col items-center px-24">
          <h2 className="text-4xl font-bold p-16 m-16 h-16 gap-16">
            About Us
          </h2>
          <AboutSection />
        </section>

        {/* START OF THE CHALLENGES SECTION */}
        <section id="challenges" className="min-h-screen w-full flex flex-col items-center px-24">
          <h2 className="text-4xl font-bold p-16 m-16 h-16 gap-16">
            Monthly Challenges
          </h2>
          <ChallengesSection />
        </section>

        {/* START OF THE TEAM SECTION */}
        <section id="team" className="min-h-screen w-full flex flex-col items-center px-24">
          <h2 className="text-4xl font-bold p-16 m-16 h-16 gap-16">
            Team
          </h2>
          <TeamSection />
        </section>
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </>
  );
}
