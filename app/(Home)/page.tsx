import Contact from "@/components/landingPage/Contact";
import Features from "@/components/landingPage/Features";
import Hero from "@/components/landingPage/Hero";
import Intro from "@/components/landingPage/Intro";
import Journey from "@/components/landingPage/Journey";
import Mentalissues from "@/components/landingPage/Mentalissues";
import RecoveryGuide from "@/components/landingPage/RecoveryGuide";


const page = () => {
  return (
    <main className="flex flex-col gap-12">
      <Hero />
      <Intro />
      <Mentalissues />
      <RecoveryGuide />
      <Journey />
      <Features />
      <Contact />
    </main>
  );
};

export default page;
