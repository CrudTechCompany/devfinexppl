import style from "./LanguageSelector.css";
import planet from "../../assets/planet.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const LanguageSelector = (props) => {
  const [currentLanguage, setCurrentLanguage] = useState('PL');
  const [showOption, setShowOption] = useState(false);
  const setLanguage = (language) => {
    setCurrentLanguage(language.toUpperCase());
    props.onLanguageChange(language.toLowerCase());
    setShowOption(false);
  }
  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"))
  }, []);
  const langauges = ['pl', 'en', 'ua', 'ru'];
  const avalibleOption = langauges
    .filter(i => i !== currentLanguage.toLowerCase())
    .map(i => <button className="language-button" key={i} onClick={() => setLanguage(i)} >{i.toUpperCase()}</button>)
  return (
    <div >
      <div className="language-wrapper">
        <div className="current-language">
          <img src={planet} alt="" />
          <button className="language-button" onClick={() => setShowOption(true)}>{currentLanguage}</button>
        </div>
        {showOption ? (
          <div className="button-group">
            {avalibleOption}
          </div>) : (<></>)}
      </div>
    </div>
  );
};

export default LanguageSelector;