import { Plus_Jakarta_Sans } from "next/font/google";
import CinematicBackground from "@/components/CinematicBackground";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import LogoTicker from "@/components/LogoTicker";
import ProgrammeOverview from "@/components/ProgrammeOverview";
import CourseHighlights from "@/components/CourseHighlights";
import IsThisForYou from "@/components/IsThisForYou";
import ProgrammeJourney from "@/components/ProgrammeJourney";
import Curriculum from "@/components/Curriculum"; // Added import
import SpecialisationsOverview from "@/components/SpecializationOverview";
import FacultyMentors from "@/components/FacultyMentors";
import AdmissionsEligibility from "@/components/AdmissionsEligibility";
import FAQ from "@/components/Faq";
import FinalCTA from "@/components/FinalCTA";
import ImageCTA from "@/components/ImageCTA";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400","500", "600"],
  display: "swap",
});

export default function Home() {
  return (
    <main className={`relative bg-[#02040a] min-h-screen text-white selection:bg-[#0066ff] selection:text-white overflow-x-hidden ${jakarta.className}`}>
      
      {/* Visual Engine */}
      <CinematicBackground />

      {/* Page Content */}
      <Hero />
      <VideoSection />
      <LogoTicker />
      <ProgrammeOverview />
      <CourseHighlights />
      <IsThisForYou />
      <ProgrammeJourney /> 
      <Curriculum /> 
      <SpecialisationsOverview/>{/* Added new Curriculum section */}
      <FacultyMentors/>
      <AdmissionsEligibility/>
      <FAQ/>
      {/* <ImageCTA/> */}
      {/* <FinalCTA/> */}
    </main>
  );
}