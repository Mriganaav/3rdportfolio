import React from "react";
import Hero from "./components/hero/Hero"
import Projects from "./components/projects/Projects";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
const App = () => {
  return (
    <main className="h-dvh overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <div className="max-w-[1536px] pl-[16px] pr-[16px] mx-auto">
        <section className="h-dvh relative snap-center">
          <Hero />
        </section>
        <section className="h-dvh   snap-center">
          <Projects />
        </section>
        <section className="h-dvh  border snap-center">
          <Certificates />
        </section>
        <section className="h-dvh  border snap-center">
          <Contact />
        </section>
      </div>
    </main>
  );
};

export default App;
