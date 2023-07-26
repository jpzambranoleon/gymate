import About from "../components/About/About";
import ChooseUs from "../components/ChooseUs";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials/Testimonials";
import Trainers from "../components/Trainers/Trainers";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
    </>
  );
}
