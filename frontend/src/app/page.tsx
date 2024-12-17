import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeaderPrivateAviation from "@/components/LeaderPrivateAviation";
import HowItWorkBox from "@/components/HowItWorkBox";
import OurMissionBox from "@/components/OurMissionBox";
import ClickSearchBox from "@/Components/ClickSearchBox";
import FlightDetails from "@/Components/FlightDetails";
import "./globals.css";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <FlightDetails/>
      <ClickSearchBox/>
      <LeaderPrivateAviation/>
     <HowItWorkBox/>
     <OurMissionBox/>
    
      <Footer/>
      
    </div>
  );
}
