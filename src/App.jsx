import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import ExportMarkets from "./components/ExportMarkets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

// Component with Framer Motion
const AnimatedSection = ({ children, animation }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...animation.initial }}
      animate={
        inView
          ? { opacity: 1, ...animation.animate }
          : { opacity: 0, ...animation.initial }
      }
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />

      {/* Using Framer Motion */}
      <AnimatedSection
        animation={{
          initial: { y: 50 },
          animate: { y: 0 },
        }}
      >
        <About />
      </AnimatedSection>

      {/* Using AOS */}
      <div data-aos="fade-up">
        <Products />
      </div>

      {/* Using Framer Motion */}
      <AnimatedSection
        animation={{
          initial: { x: -100 },
          animate: { x: 0 },
        }}
      >
        <WhyChooseUs />
      </AnimatedSection>

      {/* Using AOS */}
      <div data-aos="zoom-in">
        <ExportMarkets />
      </div>

      {/* Using Framer Motion */}
      <AnimatedSection
        animation={{
          initial: { scale: 0.8 },
          animate: { scale: 1 },
        }}
      >
        <Contact />
      </AnimatedSection>

      <Footer />
    </div>
  );
}

export default App;
