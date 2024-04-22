import React from "react";
import Header from "../Components/header/Header";
import HeroSection from "../Components/heroSection/HeroSection";
import Menu from "../Components/menu/Menu";
import ContactForm from "../Components/contactForm/ContactForm";
import Footer from "../Components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Menu />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
