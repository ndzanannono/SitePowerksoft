import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import '../styles/Team.css'; // Assurez-vous d'importer le bon fichier CSS

export const Team = (props) => {
  const { t } = useTranslation();
  const teamMembers = t('Team.members', { returnObjects: true });

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
    <div id="team" className="text-center fade-in-container">
      <div className={`container fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>{t('Team.title')}</h2>
          <p>{t('Team.description')}</p>
        </div>
        <div className="row">
          {teamMembers && teamMembers.map((d, i) => (
            <div key={`${d.name}-${i}`} className={`col-md-3 col-sm-6 team ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={ref}>
              <div className="thumbnail">
                <img src={d.img} alt="..." className="team-img" />
                <div className="caption">
                  <h4>{d.name}</h4>
                  <p>{d.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
