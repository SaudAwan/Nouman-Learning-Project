import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LeaderPrivateAviation from "@/components/LeaderPrivateAviation";
import HomePageHeadingBox from "@/components/HomePageHeadingBox ";
import "./globals.css";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <LeaderPrivateAviation/>
     <HomePageHeadingBox heading="How it Works" content="Swoop is a marketplace that allows a jet charterer or a flight initiator to offers seats for sale to the public.
      The jet charterer or the flight initiator offers available seats on a jet allowing Swoop members and Non-members to purchase a seat
      or seats on a given flight."/>
      
     <HomePageHeadingBox heading="Our Mission" content="Increase the number of people who can afford to fly privately from 1% to at least 17% of the population. 
      Decrease the number of Private planes flying that are emitting 10 times the pollutants into our atmosphere 
      than commercial flights, by filling every seat on every private plane.  
      Saving the environment one seat at a time."/>
      <Footer/>
      
    </div>
  );
}
