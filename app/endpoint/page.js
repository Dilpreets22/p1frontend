'use client'
import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import Link from 'next/link'
export default function EndpointPage() {
  return (
    <div className=" text-gray-300">
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

          <Link href='/link2'>
            <button className="inline-flex items-center text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded-3xl text-base mt-4 md:mt-0">
              Get Demo
            </button>
          </Link>

        </div>
      </header>
    </div>
      {/* Hero */}
      <section className="container mx-auto px-7 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">Endpoint Security</h1>
          <p className="mb-6 text-gray-400">
            Protect every endpoint with next-gen prevention and control.  
            Reduce risk, support compliance, and gain real-time monitoring.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <ShieldCheck className="text-indigo-400 w-5 h-5 mr-2" />
              Next-Gen Antimalware Engine
            </li>
            <li className="flex items-center">
              <ShieldCheck className="text-indigo-400 w-5 h-5 mr-2" />
              Device & Application Control
            </li>
            <li className="flex items-center">
              <ShieldCheck className="text-indigo-400 w-5 h-5 mr-2" />
              Data Leakage Prevention
            </li>
          </ul>
        </div>

        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/endpoint.png"
            alt="Endpoint Protection Dashboard"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Use cases */}
      <section className="container mx-auto px-5 py-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">File Upload Blocking</h3>
            <p className="text-gray-400 text-sm">
              Prevent unauthorized file transfers across endpoints.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">PII Detection</h3>
            <p className="text-gray-400 text-sm">
              Automatically detect and secure personal identifiable information.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Policy Enforcement</h3>
            <p className="text-gray-400 text-sm">
              Enforce security policies across all connected devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
