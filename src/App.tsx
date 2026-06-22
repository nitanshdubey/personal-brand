import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Books from "./sections/Books";
import Courses from "./sections/Courses";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import CTA from "./sections/CTA";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Books />

        <Courses />

        <Testimonials />

        <Contact />

        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;