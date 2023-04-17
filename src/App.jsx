import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";
import Page404 from "./components/404/404";
import Body from "./components/Body/Body";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import PrivacyPolicyPopUp from "./components/Pop-Up/PrivacyPolicyPopUp";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import "./i18n.js";

const MainPage = (props) => {
  return (
    <React.Fragment>
      <Header
        t={props.t}
        changeLanguages={props.changeLanguages}
        setMobileMenuState={props.setMobileMenuState}
      />
      <Outlet />
      <Footer t={props.t} changeLanguages={props.changeLanguages} />
    </React.Fragment>
  );
};

const App = () => {
  const { t, i18n } = useTranslation();
  const changeLanguages = (language) => {
    window.history.pushState('Language', 'Language', `/${language}`);
    i18n.changeLanguage(language);
  };
  useEffect(() => {
    localStorage.getItem("p_up_state") === "true"
      ? setPopUpState(false)
      : setPopUpState(true);
  }, []);
  const [popUpState, setPopUpState] = useState(true);
  const [contactFormState, setContactFormState] = useState(false);
  const setContactFormStateHandler = () => {
    setContactFormState((prev) => !prev);
  };
  const onClickPopUpAgreeButton = () => {
    localStorage.setItem("p_up_state", "true");
    setPopUpState(false);
  };
  const [mobileMenuState, setMobileMenuState] = useState(false);

  const setMobileMenuStateHandler = (event) => {
    event.preventDefault();
    setMobileMenuState((prev) => {
      prev = !prev;
      return prev;
    });
  };
  return (
    <div className="App">
      {mobileMenuState && (
        <MobileMenu
          t={t}
          changeLanguages={changeLanguages}
          setMobileMenuState={setMobileMenuStateHandler}
        />
      )}
      <Routes>
        <Route
          path="/:lang?"
          element={
            <React.Fragment>
              {popUpState && (
                <PrivacyPolicyPopUp
                  t={t}
                  onClickPopUpAgreeButton={onClickPopUpAgreeButton}
                />
              )}
              {contactFormState && (
                <ContactForm t={t} setContactFormState={setContactFormStateHandler} />
              )}
              <MainPage
                t={t}
                changeLanguages={changeLanguages}
                setPopUpState={setPopUpState}
                setMobileMenuState={setMobileMenuStateHandler}
              />
            </React.Fragment>
          }
        >
          <Route
            index
            element={
              <Body
                t={t}
                setContactFormState={setContactFormStateHandler}
              />
            }
          />
        </Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Page404 t={t} />} />
      </Routes>
    </div>
  );
};

export default App;
