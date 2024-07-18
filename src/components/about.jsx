import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import '../styles/about.css';

export const About = () => {
  const { t } = useTranslation();

  const paragraph = t('About.paragraph');
  const whyItems = t('About.why', { returnObjects: true });
  const why2Items = t('About.why2', { returnObjects: true });

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 1 } // Déclenche l'animation lorsque 25% de l'élément est visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div id="about" className="fade-in-container">
      <div className={`container fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/logo.jpeg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{t('About.title')}</h2>
              <p>{paragraph}</p>
              <h3>{t('About.whyTitle')}</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {whyItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {why2Items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
