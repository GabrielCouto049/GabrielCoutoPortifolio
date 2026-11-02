import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contact";
import Footer from "./components/Footer";
import { useReveal } from "./hooks/useReveal";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
      <SpeedInsights />
    </>
  );
}

export default App;
