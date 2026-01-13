import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Contact />
      </main>
      <div className="container mx-auto px-4 my-8 flex justify-center">
        <img
          src="/images/footer-banner.jpg"
          alt="Featured"
          className="max-w-full h-auto rounded-lg"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
