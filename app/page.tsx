import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

import WhyChooseUs from "./components/WhyChooseUs";
import Industries from "./components/Industries";
import Process from "./components/Process";
import Impact from "./components/Impact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      {/* <Statistics /> */}
      <WhyChooseUs />
      <Industries />
      <Process />
      <Impact />
      <Footer />
    </main>
  );
}
