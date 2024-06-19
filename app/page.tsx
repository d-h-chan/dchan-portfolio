"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
// import Approach from "@/components/Approach";
// import Clients from "@/components/Clients";

const Home = () => {
  // dynamically import grid without ssr to avoid 'document is not defined' error
  const Grid = dynamic(() => import("@/components/Grid"), {
    ssr: false,
  });

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/*<Clients /> */}
        <Experience />
        {/*Approach /> */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
