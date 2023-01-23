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
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const [popUpState, setPopUpState] = useState(true);
  const onClickPopUpAgreeButton = () => {
    localStorage.setItem("p_up_state", "true");
    setPopUpState(false);
  };
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
      {popUpState && (
        <PrivacyPolicyPopUp onClickPopUpAgreeButton={onClickPopUpAgreeButton} />
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
