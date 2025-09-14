'use client'
import { ShieldCheck, Network, Cloud } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const GlassCard = ({ icon: Icon, title, description, items }) => (
  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
    <div className="flex items-center mb-4">
      <Icon className="text-indigo-400 w-8 h-8 mr-3" />
      <h2 className="text-xl font-bold text-gray-200">{title}</h2>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <ul className="list-disc list-inside space-y-1">
      {items.map((item, idx) => (
        <li key={idx} className="text-gray-400">{item}</li>
      ))}
    </ul>
  </div>
)

export default function SecurityPage() {
  return (
    <section className="text-gray-300 body-font bg-gradient-to-b from-gray-900 to-black min-h-screen py-16">
        <div className=" bg-transparent ">
      <header className="text-gray-300 body-font bg-white/10 backdrop-blur-lg border border-white/20 rounded-4xl -mt-10 mr-4 ml-4">
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
      <div className="container mx-auto px-5">
        <h1 className="text-3xl font-bold mb-12 text-center mt-6 text-white">Security Solutions</h1>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Endpoint Security */}
          <GlassCard
            icon={ShieldCheck}
            title="Endpoint Security"
            description="Protect every endpoint with next-gen prevention and control."
            items={[
              'Next-Gen Antimalware Engine',
              'Device & Application Control',
              'Data Leakage Prevention',
              'Use cases: File upload blocking, PII detection, policy enforcement',
              'Benefits: Risk reduction, compliance support, real-time monitoring'
            ]}
          />
          

          {/* Network Security */}
            <GlassCard
            icon={Network}
            title="Network Security"
            description="Secure network access with real-time monitoring and ZTNA."
            items={[
              'ZTNA (Zero Trust Network Access)',
              'Web Filtering & Threat Detection',
              'Traffic Analysis: Real-time monitoring',
              'Interactive Network Visualization',
              'Benefits: Continuous visibility and risk mitigation'
            ]}
          />
        

          {/* Cloud Security */}
          <GlassCard
            icon={Cloud}
            title="Cloud Security"
            description="Multi-layered cloud protection covering apps, APIs, and posture."
            items={[
              'App Layer: Web & API Protection',
              'Scanners: Web, API & Mobile App Scanners',
              'Posture Management: Cloud & AI Security Posture Management',
              'Use Cases: Automated vulnerability scanning, compliance checks',
              'Benefits: End-to-end cloud security & posture compliance'
            ]}
          />
        </div>
      </div>
    </section>
  )
}
