import Image from "next/image";
import { ButtonGlitchBrightness } from "@/components/animatedButton";
import { ImageCarousel } from "@/components/ImageCarousel";
import { LogoCarousel } from "@/components/LogoCarousel";
import { ShiningCard } from "@/components/shiningCard";
import { LinkedInButton } from "@/components/LinkedInButton";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#1e1b4b,#020617)] before:fixed before:left-0 before:top-0 before:h-full before:w-full before:bg-[url('/noise.svg')] before:opacity-20 before:content-[''] before:pointer-events-none">
      <div className="relative grid grid-cols-1 md:grid-cols-2 md:h-screen">
        {/* Left Column: Scrollable Content */}
        <div className="px-8 md:overflow-y-auto relative">
          {/* Header */}
          <header className="flex justify-between items-center sticky top-0 backdrop-blur-md bg-black/20 py-4 -mx-8 px-8 z-10">
            <Image 
              src="/logo-white.svg" 
              alt="Superknowa Logo" 
              width={120} 
              height={32} 
              className="h-8 w-auto"
            />
            <a href="#contact-form" className="inline-block">
              <ButtonGlitchBrightness />
            </a>
          </header>

          {/* Hero Section */}
          <section className="py-10 border-b border-white/20 -mx-8 px-8">
            <h1 className="font-rubik text-[40px] leading-[48px] tracking-[-0.02em] text-white font-normal max-w-2xl">
              Superknowa <span className="text-violet-400">designs</span>, <span className="text-violet-400">architects</span> and <span className="text-violet-400">develops</span> systems for clients that are secure, scalable, resilient and easy to maintain.
            </h1>
          </section>

          {/* Clients Section */}
          <section className="py-10 border-b border-white/20 -mx-8 px-8">
            <p className="font-rubik text-[24px] leading-[32px] tracking-[-0.02em] text-white font-normal md:max-w-[460px] mb-8">
              We&apos;ve executed projects for clients ranging from <span className="text-violet-400">startups</span> to <span className="text-violet-400">multi-billion dollar clients</span>
            </p>
            <LogoCarousel />
          </section>

          {/* Capabilities Section */}
          <section className="py-10 border-b border-white/20 -mx-8 px-8">
            <h2 className="font-rubik text-[24px] leading-[32px] tracking-[-0.02em] text-white font-normal md:max-w-[460px] mb-8">
              A set of capabilities built to support modern technology companies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ShiningCard 
                title="AI Development"
                description="Chatbots and RAG knowledge systems built on cutting-edge LLMs"
              />
              <ShiningCard 
                title="Web Development"
                description="Modern websites and web apps built with NextJS and React"
              />
              <ShiningCard 
                title="Mobile App Development"
                description="Native iOS or Android apps or cross-platform React Native apps"
              />
              <ShiningCard 
                title="Cloud Infrastructure"
                description="Scalable and secure cloud infrastructure on AWS, GCP, or Azure"
              />
            </div>
          </section>

          {/* Team Section */}
          <section className="py-10 border-b border-white/20 -mx-8 px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mohan */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-rubik text-[24px] leading-[32px] tracking-[-0.02em] text-white font-normal">
                    Mohan Ramani
                  </h3>
                  <LinkedInButton href="https://www.linkedin.com/in/mohan-ramani-4441b8/" />
                </div>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/mohan.webp"
                    alt="Mohan Ramani"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Ray */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-rubik text-[24px] leading-[32px] tracking-[-0.02em] text-white font-normal">
                    Raymundo Leefmans
                  </h3>
                  <LinkedInButton href="https://www.linkedin.com/in/raymundo-leefmans-277a844/" />
                </div>
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/ray.webp"
                    alt="Ray Leefmans"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact-form" className="py-20 -mx-8 px-8">
            <h2 className="font-rubik text-[32px] leading-[40px] tracking-[-0.02em] text-white font-normal mb-8">
              Get in Touch
            </h2>
            <ContactForm />
          </section>
        </div>

        {/* Right Column: Image Carousel */}
        <ImageCarousel />
      </div>
    </div>
  );
}
