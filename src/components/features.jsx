import React from "react";
import { useTranslation } from 'react-i18next';

export const Features = () => {
  const { t } = useTranslation();
  const features = t('Features.items', { returnObjects: true });

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{t('Features.title')}</h2>
        </div>
        <div className="row">
          {features
            ? features.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
