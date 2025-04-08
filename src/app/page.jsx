import PandaScroll from "@/components/PangaScroll";
import Section4 from "@/components/Section4";
import Section9_Form from "@/components/Section9_Form";
import Card from "../components/Card";
import Section6 from "@/components/Section6";
import Last_Section from "@/components/Last_Section";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
      <Section6/>
      <Section4 />
      <Section9_Form />
      <PandaScroll />
      {/* <Card /> */}
      <Last_Section/>
    </>
  );
}
