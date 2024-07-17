import React from "react";
import { useTranslation } from 'react-i18next';
import "../styles/header.css";

const Header = (props) => {
  const { t } = useTranslation();

  return (
    <header className="header" >
      {/* <div className="intro"> */}
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {t('Header.title')}
                  <span></span>
                </h1>
                <p>
                  <strong><em>{t('Header.subtitle')}</em></strong>
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  {t('Header.button')}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
