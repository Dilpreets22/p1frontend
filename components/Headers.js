"use client";
import { useState } from "react";
import Threads from './Threads';


export default function Headers() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle email submission here (API call)
    alert(`Demo request for: ${email}`);
  };

  return (
    <div style={{ width: '100%', height: '500px', position: 'relative', }}>
  <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
  />
  <section className="container mx-auto flex flex-col items-center text-center px-6 -mt-120">
        <h1 className="text-4xl md:text-6xl font-bold leading-snug">
          One-Stop{" "}
          <span className="text-blue-500">Cyber Security Product</span>
        </h1>
        <p className="mt-6 text-gray-400 max-w-xl">
          End-to-end protection for endpoint, network, and cloud — plus compliance support.
        </p>

        {/* Email capture */}
        <form
          onSubmit={handleSubmit}
          className="mt-40 relative flex-col sm:flex-row gap-4 w-full max-w-md"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 ml-4 mt-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium items-center justify-center mr-4"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-10 text-gray-400 text-sm">
          No credit card required • 14-days free trial
        </p>
      </section>
</div>
  );
}
