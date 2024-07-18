import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import '../styles/services.css'; // Assurez-vous d'importer le bon fichier CSS

export const Services = (props) => {
  const { t } = useTranslation();
  const services = t('Services.list', { returnObjects: true });

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
      { threshold: 0.25 } // Déclenche l'animation lorsque 25% de l'élément est visible
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
    <div id="services" className="text-center fade-in-container">
      <div className={`container fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="section-title">
          <h2>{t('Services.title')}</h2>
          <p>{t('Services.description')}</p>
        </div>
        <div className="row">
          {services && services.map((d, i) => (
            <div key={`${d.name}-${i}`} className={`col-md-4 ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
              <i className={d.icon}></i>
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
