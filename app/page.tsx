import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Contact from "@/components/main/Contact";

// Your component logic


import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Contact/>
      </div>
    </main>
  );
}
