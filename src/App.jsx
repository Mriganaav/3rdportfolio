import React from "react";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
import LottieBackground from "./background/lottiebg";

const App = () => {
  return (
    <>
      {/* Background */}
      <LottieBackground />

      {/* Foreground content */}
      <main className="relative z-10 min-h-dvh overflow-y-auto scroll-smooth">
        <div className="max-w-[1536px] px-4 mx-auto">
          <section className="min-h-dvh">
            <Hero />
          </section>

          <section className="min-h-dvh">
            <Projects />
          </section>

          <section className="min-h-dvh">
            <Certificates />
          </section>

          <section className="min-h-dvh">
            <Contact />
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
