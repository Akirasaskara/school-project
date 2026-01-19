  "use client";

import ShinyText from "@/components/shinytext";
import RotatingText from "@/components/RotatingText";
import TiltedCard from "@/components/TiltedCard";
import SkillsSection from "@/components/skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative min-h-screen items-center justify-center font-poppins px-6 sm:px-8 lg:px-12 flex">
      <div className="relative z-10 w-full max-w-7xl">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 mt-24 lg:mt-28">
          {/* Profile Card */}
          <div className="shrink-0 w-full max-w-[320px] sm:max-w-[420px]">
            <div className="relative aspect-[420/720] w-full">
              <TiltedCard
                imageSrc="/gue.jpeg"
                altText="Gue ganteng"
                captionText="Akira"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.15}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
              <div className="absolute -inset-1 bg-linear-to-r from-white-500 to-orange-900 rounded-3xl blur-lg -z-10" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-left w-full">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-2 dark:text-zinc-100">
                <ShinyText
                  text="Hi, I'm Akira"
                  speed={3.6}
                  delay={0.4}
                  color="#ffffff"
                  shineColor="#c28093"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                />
              </h1>
              
              <p className="flex flex-wrap items-center text-2xl sm:text-4xl font-semibold text-zinc-200 dark:text-zinc-300">
                Creative
                <RotatingText
                  texts={["Developer", "Innovator", "Solver"]}
                  mainClassName="px-2 sm:px-2 md:px-3 mt-1 bg-transparent text-zinc-200 overflow-hidden justify-center rounded-lg"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 400,
                  }}
                  rotationInterval={7000}
                />
              </p>
            </div>

            {/* Description */}
            <div className="font-semibold space-y-5 text-zinc-200 dark:text-zinc-300 text-base sm:text-xl leading-loose">
              <p>
                Welcome to my digital space! I'm a passionate developer who
                loves creating beautiful and functional web experiences.
                With a keen eye for design and a deep understanding of
                modern technologies, I bring ideas to life.
              </p>
              <p>
                I specialize in building responsive, user-friendly
                applications using cutting-edge frameworks like Next.js,
                React, and TypeScript. Every project is an opportunity to
                push boundaries and create something remarkable.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <button className="px-8 py-4 text-lg bg-linear-to-r from-white-500 to-orange-900 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                View Projects
              </button>
              <button className="px-8 py-4 text-lg bg-linear-to-r from-white-500 to-orange-900 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <SkillsSection />
        <Projects />
      </div>
    </div>
  );
}