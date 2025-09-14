'use client'
import Image from 'next/image'
import { Network } from 'lucide-react'

export default function NetworkPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <section className="container mx-auto px-7 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">Network Security</h1>
          <p className="mb-6 text-gray-400">
            Secure network access with real-time monitoring and Zero Trust Network Access.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Network className="text-indigo-400 w-5 h-5 mr-2" />
              ZTNA (Zero Trust Network Access)
            </li>
            <li className="flex items-center">
              <Network className="text-indigo-400 w-5 h-5 mr-2" />
              Web Filtering & Threat Detection
            </li>
            <li className="flex items-center">
              <Network className="text-indigo-400 w-5 h-5 mr-2" />
              Interactive Network Visualization
            </li>
          </ul>
        </div>

        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/images/network-dashboard.png"
            alt="Network Security Dashboard"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>
    </div>
  )
}
