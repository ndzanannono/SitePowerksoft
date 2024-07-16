import React from "react";
import "../styles/header.css";

const Header = (props) => {
  return (
    <header id="header">
      {/* <div className="intro">
        <div className="overlay">
          <div className="container"> */}
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
              {/* <img src="img/backgroud2.jpeg" className="img-responsive" alt="" /> */}
                <h1>
               POWERKSOFT SOLUTION
                  <span></span>
                </h1>
                <p>
                <strong><em>MEILLEURE AGENCE DE CONCEPTION ET DÉVELOPPEMENT DE SITES WEB ET MOBILE</em></strong></p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          {/* </div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
