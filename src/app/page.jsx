
import Hero from "@/Dev/Components/Hero";
import Navbar from "@/Dev/Components/Navbar";
import ScrollMerge3D from "@/Dev/Components/ScrollMerge3D";
import Section2 from "@/Dev/Components/Section2";
import Section3 from "@/Dev/Components/Section3";
import Section6 from "@/Dev/Components/Section6";
import Section5 from "@/Dev/Components/Section5";
import Section7 from "@/Dev/Components/Section7";
import Section8 from "@/Dev/Components/Section8";
import Section9 from "@/Dev/Components/Section9";
import Section10 from "@/Dev/Components/Section10";
import Section11 from "@/Dev/Components/Section11";
import Section12 from "@/Dev/Components/Section12";
import Footer from "@/Dev/Components/Footer";

export default async function Home() {

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 6000);
  })
  
  return (
    <>
    <Navbar/>
    <Hero/>
    <Section2/>
    <Section3/>
    {/* <ScrollMerge3D/> */}
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    <Section9/>
    <Section10/>
    <Section11/>
    <Section12/>
    <Footer/>
    </>
  );
}
