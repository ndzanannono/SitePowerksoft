
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import '../styles/testimonials.css'; // Assurez-vous d'importer le bon fichier CSS

export const Testimonials = (props) => {
  const { t } = useTranslation();
  const testimonials = t('Testimonials.testimonials', { returnObjects: true });

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
    <div id="testimonials" className="fade-in-container">
      <div className={`container fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="section-title text-center">
          <h2>{t('Testimonials.title')}</h2>
        </div>
        <div className="row">
          {testimonials && testimonials.map((d, i) => (
            <div key={`${d.name}-${i}`} className={`col-md-4 ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
              <div className="testimonial">
                <div className="testimonial-image">
                  <img src={d.img} alt="" />
                </div>
                <div className="testimonial-content">
                  <p>"{d.text}"</p>
                  <div className="testimonial-meta"> - {d.name} </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
