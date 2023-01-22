import { useState } from "react";
import style from "./App.module.css";
import AboutUsBlock from "./components/Body/AboutUsBlock/AboutUsBlock";
import Body from "./components/Body/Body";
import BureauServicesBlock from "./components/Body/BureauServicesBlock/BureauServicesBlock";
import ContactBlock from "./components/Body/ContactBlock/ContactBlock";
import HeadBlock from "./components/Body/HeadBlock/HeadBlock";
import PriceBlock from "./components/Body/PriceBlock/PriceBlock";
import WorkWithFEBlock from "./components/Body/WorkWithFEBlock/WorkWithFEBlock";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MenuBlock from "./components/MenuBlock/MenuBlock";

const App = () => {
  const [menuState, setMenuState] = useState(false);
  const setMenuStateHandler = () => {
    setMenuState((prev) => {
      prev = !prev;
      return prev;
    });
  };
  return (
    <div
      className={style["App"]}
      style={{ position: menuState ? "fixed" : "unset" }}
    >
      {menuState && <MenuBlock setMenuStateHandler={setMenuStateHandler} />}
      <Header setMenuStateHandler={setMenuStateHandler} />
      <Body>
        <HeadBlock />
        <AboutUsBlock />
        <BureauServicesBlock />
        <WorkWithFEBlock />
        <PriceBlock />
        <ContactBlock />
      </Body>
      <Footer />
    </div>
  );
};

export default App;
