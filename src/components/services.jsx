import React from "react";
import { useTranslation } from 'react-i18next';

export const Services = (props) => {
  const { t } = useTranslation();

  const services = t('Services.list', { returnObjects: true });

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t('Services.title')}</h2>
          <p>{t('Services.description')}</p>
        </div>
        <div className="row">
          {services
            ? services.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
