"use client";

import dynamic from "next/dynamic";
import Link from 'next/link';
import Image from "next/image";
import Footer from "@/components/Footer";

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function AboutPage() {
  return (
    <div>
              <div className=" bg-transparent ">
      <header className="text-gray-300 body-font bg-white/10 backdrop-blur-lg border border-white/20 rounded-4xl mt-4 mr-4 ml-4">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link href={'/'}>
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="Logo"
            />
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-200" href='/about'>About</Link>
            <Link className="mr-5 hover:text-gray-200" href='/security'>Security</Link>
            <Link className="mr-5 hover:text-gray-200" href='https://osto.bettermode.io/changelog'>Documentations</Link>
          </nav>

          <Link href='https://api.whatsapp.com/send/?phone=9119106555&text=Let%27s+chat&type=phone_number&app_absent=0'>
            <button className="inline-flex items-center text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded-3xl text-base mt-4 md:mt-0">
              Get Demo
            </button>
          </Link>

        </div>
      </header>
    </div>
        <main className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-7 md:px-16 relative">
      {/* Left Section with Globe */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
          <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundColor="rgba(0,0,0,0)"
            animateIn={true}
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* Right Section with Text */}
      <div className="w-full md:w-1/2 space-y-8">
        <h1 className="text-2xl md:text-4xl font-mono font-bold">
          ABOUT US
        </h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-bold">01 MISSION</h2>
            <p className="text-gray-400 text-sm md:text-base">
              We believe every startup deserves robust, affordable, and fast-to-deploy cybersecurity.
             Our mission is to deliver enterprise-level protection in minutes so founders can focus on building, not defending.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold">02 INNOVATION</h2>
            <p className="text-gray-400 text-sm md:text-base">
              We re-imagined security tools for agility.
             Our platform uses automation and AI to streamline threat detection, compliance,
              and posture management without adding complexity..
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold">03 SPEED & SUPPORT</h2>
            <p className="text-gray-400 text-sm md:text-base">
             Go live in under 10 minutes with our self-service platform and get expert support from a team that understands startup realities.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold">04 IMPACT</h2>
            <p className="text-gray-400 text-sm md:text-base">
             From early-stage teams to scaling ventures, 
             Osto.one protects hundreds of startups, automating security questionnaires, blocking threats, and ensuring compliance around the clock.
            </p>
          </div>
        </div>
      </div>
    </main> 
    <Footer/>
    </div>
   
  );
}
