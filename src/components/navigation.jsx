import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/styles.css'; // Assurez-vous que le chemin est correct
import '../styles/logo.css';
import gbFlag from './langue/en/en.png';
import frFlag from './langue/fr/fr.png';

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
    flag: gbFlag,
  },
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr',
    flag: frFlag,
  },
];

export const Navigation = (props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">{t('Navigation.toggleNavigation')}</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#">
          <h2 className='log'><span>P</span>OWERK-<span>S</span>OFT</h2>
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">{t('Navigation.features')}</a>
            </li>
            <li>
              <a href="#about" className="page-scroll">{t('Navigation.about')}</a>
            </li>
            <li>
              <a href="#services" className="page-scroll">{t('Navigation.services')}</a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">{t('Navigation.gallery')}</a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">{t('Navigation.testimonials')}</a>
            </li>
            <li>
              <a href="#team" className="page-scroll">{t('Navigation.team')}</a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">{t('Navigation.contact')}</a>
            </li>
            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={i18n.language === 'en' ? gbFlag : frFlag}
                  alt="Flag"
                  style={{ width: '20px', marginRight: '5px' }}
                />
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                {languages.map(({ code, name, flag }) => (
                  <li key={code}>
                    <a
                      href="#"
                      onClick={() => changeLanguage(code)}
                      className="language-select"
                    >
                      <img
                        src={flag}
                        alt={name}
                        style={{ width: '20px', marginRight: '5px' }}
                      />
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
