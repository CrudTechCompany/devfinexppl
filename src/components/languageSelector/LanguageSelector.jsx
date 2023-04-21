import "./LanguageSelector.css";
import planet from "../../assets/planet.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useOutsideAlerter from "./useOutsideAlerter";


const LanguageSelector = (props) => {
  const [currentLanguage, setCurrentLanguage] = useState('PL');
  const [ref,isShow,setIsShow] = useOutsideAlerter(false);
  const setLanguage = (language) => {
    setCurrentLanguage(language.toUpperCase());
    props.onLanguageChange(language.toLowerCase());
    setIsShow(false)
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
      <div ref={ref}className="language-wrapper">
        <div className="current-language">
          <img src={planet} alt="" />
          <button  className="language-button" onClick={() => setIsShow(!isShow)}>{currentLanguage}</button>
        </div>
        {isShow ? (
          <div  className="button-group">
            {avalibleOption}
          </div>) : (<></>)}
      </div>
    </div>
  );
};

export default LanguageSelector;