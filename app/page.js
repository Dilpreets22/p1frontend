'use client';
import Aurora from '@/components/Aurora';
import Features from '@/components/Features';
import Headers from "@/components/Headers";
import Navbar from "@/components/Navbar";
import Price from '@/components/Price';
import Second from "@/components/Second";
import Priority from "@/components/Priority";
import Testimonials from '@/components/Testimonials';


export default function Home() {
  return (
   <div>
      <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.6}
/>
    <Navbar/>  
    
    <Headers/>
    <Second/>
    <Features/>
    <Price/>
    <Priority/>
    <Testimonials/>
   </div>
  );
}
