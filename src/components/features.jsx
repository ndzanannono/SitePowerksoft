import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import '../styles/features.css';

export const Features = () => {
  const { t } = useTranslation();
  const features = t('Features.items', { returnObjects: true });

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
    <div id="features" className="text-center fade-in-container">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{t('Features.title')}</h2>
        </div>
        <div className="row">
          {features && features.map((d, i) => (
            <div key={`${d.title}-${i}`} className={`col-xs-6 col-md-3 ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
              <i className={d.icon}></i>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
