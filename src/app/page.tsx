import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestMinistry from "./components/LatestMinistry";
import Mission from "./components/Mission";
import MeetTheRealJesus from "./components/MeetTheRealJesus";
import PrayerCTA from "./components/PrayerCTA";
import SocialLinks from "./components/SocialLinks";
import GospelInvitation from "./components/GospelInvitation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0B0B0B] text-white">
      <Navbar />
      <Hero />
      <LatestMinistry />
      <Mission />
      <MeetTheRealJesus />
      <PrayerCTA />
      <SocialLinks />
      <GospelInvitation />
      <Footer />
    </main>
  );
}