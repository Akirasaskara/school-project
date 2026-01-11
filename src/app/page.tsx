"use client";
import ShinyText from "@/components/shinytext";
import ColorBends from "@/components/ColorBends";
import RotatingText from "@/components/RotatingText";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import TiltedCard from "@/components/TiltedCard";
import SkillsSection from "@/components/skills";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <div className=" relative min-h-screen items-center justify-center font-poppins px-4 sm:px-6 lg:px-8 flex">
          <div className="absolute inset-0 z-0 w-full ">
            <ColorBends
              rotation={360}
              speed={0.45}
              colors={["#e77213"]}
              transparent
              autoRotate={0}
              scale={1}
              frequency={1}
              warpStrength={1}
              mouseInfluence={1}
              parallax={1.1}
              noise={0.1}
            />
          </div>
          <Navbar />

          <div className="relative z-10 w-full max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mt-40">
              <div className="shrink-0">
                <div className="relative">
                  <TiltedCard
                    imageSrc="/gue.jpeg"
                    altText="Gue ganteng"
                    captionText="Akira"
                    containerHeight="600px"
                    containerWidth="350px"
                    imageHeight="600px"
                    imageWidth="350px"
                    rotateAmplitude={10}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                  />
                  <div className="absolute -inset-1 bg-linear-to-r from-white-500 to-orange-900 rounded-3xl blur-lg -z-10"></div>
                </div>
              </div>

              <div className="flex-1 text-left">
                <div className="mb-6">
                  <h1 className="text-5xl sm:text-6xl font-bold mb-2 dark:text-zinc-100">
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
                  <p className="flex items-center text-3xl font-semibold text-zinc-200 dark:text-zinc-300 ">
                    Creative
                    <RotatingText
                      texts={["Developer", "Innovator", "Solver"]}
                      mainClassName="px-2 sm:px-2 md:px-3 mt-1.3 bg-transparent text-zinc-200 overflow-hidden  justify-center rounded-lg"
                      staggerFrom={"last"}
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

                <div className=" font-semibold space-y-4 text-zinc-200 dark:text-zinc-300 text-lg leading-relaxed">
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
                <div className="mt-8 flex gap-4">
                  <button className="px-6 py-3 bg-linear-to-r from-white-500 to-orange-900 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                    View Projects
                  </button>
                  <button className="px-6 py-3 bg-linear-to-r from-white-500 to-orange-900 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          <SkillsSection />
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}
