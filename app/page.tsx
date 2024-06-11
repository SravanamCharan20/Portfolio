"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "../components/ui/tracing-beam";
import { LampContainer } from "../components/ui/lamp";



const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <TracingBeam>
        <TracingBeam>
          <div className="max-w-7xl w-full">
            <FloatingNav navItems={navItems} />
            <Hero />
            <Grid />
            <RecentProjects />
            <Experience />
            <Approach />
            <LampContainer>
              <Footer />
            </LampContainer>
          </div>
        </TracingBeam>
      </TracingBeam>
    </main>
  );
};

export default Home;
