import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import PrivacyPolicyPopUp from "./components/Pop-Up/PrivacyPolicyPoUp";

function App() {
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
      <Header setMobileMenuState={setMobileMenuStateHandler} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
