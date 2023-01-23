import React, { useEffect, useState } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";
import Page404 from "./components/404/404";
import Body from "./components/Body/Body";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import PrivacyPolicyPopUp from "./components/Pop-Up/PrivacyPolicyPopUp";

const MainPage = (props) => {
  return (
    <React.Fragment>
      <Header setMobileMenuState={props.setMobileMenuStateHandler} />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const App = () => {
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

  const setMobileMenuStateHandler = () => {
    setMobileMenuState((prev) => {
      prev = !prev;
      return prev;
    });
  };
  return (
    <div
      className="App"
      style={{
        position: mobileMenuState ? "fixed" : "relative",
      }}
    >
      {mobileMenuState && (
        <MobileMenu setMobileMenuState={setMobileMenuStateHandler} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              {popUpState && (
                <PrivacyPolicyPopUp
                  onClickPopUpAgreeButton={onClickPopUpAgreeButton}
                />
              )}
              {contactFormState && (
                <ContactForm setContactFormState={setContactFormStateHandler} />
              )}
              <MainPage
                setPopUpState={setPopUpState}
                setMobileMenuState={setMobileMenuStateHandler}
              />
            </React.Fragment>
          }
        >
          <Route
            index
            element={<Body setContactFormState={setContactFormStateHandler} />}
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
