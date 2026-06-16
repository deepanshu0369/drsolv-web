import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Approach from "@/components/sections/Approach";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import ProgrammeStatus from "@/components/sections/ProgrammeStatus";
import Team from "@/components/sections/Team";
import Partner from "@/components/sections/Partner";
import Connect from "@/components/sections/Connect";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Approach />
      <Solution />
      <HowItWorks />
      <ProgrammeStatus />
      <Team />
      <Partner />
      <Connect />
    </>
  );
}
