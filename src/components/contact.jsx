import React, { useState } from "react";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import '../styles/contact.css'; // Assurez-vous d'inclure le fichier CSS

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const { t } = useTranslation();
  const [{ name, email, message }, setState] = useState(initialState);
  const [messageStatus, setMessageStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    try {
      emailjs.send(
        "service_d2oajql",
        "template_4rm8qyr",
        { name, email, message },
        {
          publicKey: "-ZD37AarNMVW0mP0z",
        }
      ).then(
        (result) => {
          console.log(result.text);
          clearState();
          setMessageStatus('success');
        },
        (error) => {
          console.log(error.text);
          setMessageStatus('error');
        }
      );
      console.log('SUCCESS!');
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err);
        setMessageStatus('error');
        return;
      }

      console.log('ERROR', err);
      setMessageStatus('error');
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>{t('Contact.title')}</h2>
                <p>{t('Contact.description')}</p>
              </div>
              <form name="sentMessage" validate="true" onSubmit={handleSubmit} id="sentMessage">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder={t('Contact.form.namePlaceholder')}
                        required
                        value={name}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder={t('Contact.form.emailPlaceholder')}
                        required
                        value={email}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder={t('Contact.form.messagePlaceholder')}
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg login">
                  {t('Contact.form.submitButton')}
                </button>
              </form>
              {messageStatus === 'success' && (
                <div className="notification success" role="alert">
                  {t('Contact.status.success')}
                </div>
              )}
              {messageStatus === 'error' && (
                <div className="notification error" role="alert">
                  {t('Contact.status.error')}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>{t('Contact.info.title')}</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> {t('Contact.info.address')}
                </span>
                {/* {props.data ? props.data.address : "loading"} */}
                Younde-cameroun(Melen)
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> {t('Contact.info.phone')}
                </span>{" "}
                {/* {props.data ? props.data.phone : "loading"} */}
                +237 671 510 324
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> {t('Contact.info.email')}
                </span>{" "}
                {/* {props.data ? props.data.email : "loading"} */}
                powerksoft2@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            {t('Contact.footer.text')}{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
