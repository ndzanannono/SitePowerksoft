import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import Header from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Element, scroller } from "react-scroll";
import "./App.css";
import "./i18n"; // Importer la configuration i18next
import { useTranslation } from "react-i18next";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const { t, i18n } = useTranslation();
  const [landingPageData, setLandingPageData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the preloader
    setTimeout(() => {
      setLandingPageData(JsonData);
      setLoading(false);
    }, 2000); // Change 2000 to the number of milliseconds you want the preloader to last
  }, []);

  const scrollToComponent = (component) => {
    scroller.scrollTo(component, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div>
      {loading && <div id="preloader"></div>}
      {!loading && (
        <>
          <Navigation scrollToComponent={scrollToComponent} />
          <Element name="header">
            <Header />
          </Element>
          <Element name="features">
            <Features data={landingPageData.Features} />
          </Element>
          <Element name="about">
            <About data={landingPageData.About} />
          </Element>
          <Element name="services">
            <Services data={landingPageData.Services} />
          </Element>
          <Element name="gallery">
            <Gallery data={landingPageData.Gallery} />
          </Element>
          <Element name="testimonials">
            <Testimonials data={landingPageData.Testimonials} />
          </Element>
          <Element name="team">
            <Team data={landingPageData.Team} />
          </Element>
          <Element name="contact">
            <Contact data={landingPageData.Contact} />
          </Element>
        </>
      )}
    </div>
  );
};

export default App;
