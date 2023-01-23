import React, { useEffect, useState } from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";
import Page404 from "./components/404/404";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import PrivacyPolicyPopUp from "./components/Pop-Up/PrivacyPolicyPoUp";

const MainPage = (props) => {
  useEffect(() => {
    localStorage.getItem("p_up_state") === "true"
      ? setPopUpState(false)
      : setPopUpState(true);
  }, []);
  const [popUpState, setPopUpState] = useState(true);
  const onClickPopUpAgreeButton = () => {
    localStorage.setItem("p_up_state", "true");
    setPopUpState(false);
  };

  return (
    <React.Fragment>
      {popUpState && (
        <PrivacyPolicyPopUp onClickPopUpAgreeButton={onClickPopUpAgreeButton} />
      )}
      <Header setMobileMenuState={props.setMobileMenuStateHandler} />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const App = () => {
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
      style={{ position: mobileMenuState ? "fixed" : "relative" }}
    >
      {mobileMenuState && (
        <MobileMenu setMobileMenuState={setMobileMenuStateHandler} />
      )}
      <Routes>
        <Route
          path="/"
          element={<MainPage setMobileMenuState={setMobileMenuStateHandler} />}
        >
          <Route index element={<Body />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
