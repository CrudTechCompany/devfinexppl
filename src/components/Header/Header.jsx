import style from "./Header.module.css";
import finexp_logo from "../../assets/finexp_logo.svg";
import { Link } from "react-scroll";
import lang_pl_on from "../../assets/lang_pl_on.svg";
import lang_en_on from "../../assets/lang_en_on.svg";
import lang_ua_on from "../../assets/lang_ua_on.svg";
import lang_pl_off from "../../assets/lang_pl_off.svg";
import lang_en_off from "../../assets/lang_en_off.svg";
import lang_ua_off from "../../assets/lang_ua_off.svg";
import menu_icon from "../../assets/menu_icon.svg";
import { useEffect, useState } from "react";

const Header = (props) => {
  const [langPlState, setLangPlState] = useState(false);
  const [langEnState, setLangEnState] = useState(false);
  const [langUaState, setLangUaState] = useState(false);
  useEffect(() => {
    switch (localStorage.getItem("i18nextLng")) {
      case "pl": {
        setLangPlState(true);
        break;
      }
      case "en": {
        setLangEnState(true);
        break;
      }
      case "ua": {
        setLangUaState(true);
        break;
      }
      default: {
      }
    }
  }, []);
  return (
    <header className={style["header"]}>
      <div className={style["content"]}>
        <img className={style["logo"]} src={finexp_logo} alt="" />
        <div className={style["link-block"]}>
          <Link
            className={style["link-block__item"]}
            to="about-block"
            smooth="true"
          >
            {props.t("about_us_link")}
          </Link>
          <Link
            className={style["link-block__item"]}
            to="offer-block"
            smooth="true"
          >
            {props.t("offer_link")}
          </Link>
          <Link
            className={style["link-block__item"]}
            to="price-block"
            smooth="true"
          >
            {props.t("price_link")}
          </Link>
          <Link
            className={style["link-block__item"]}
            to="benefit-block"
            smooth="true"
          >
            {props.t("benefits_link")}
          </Link>
          <Link
            className={style["link-block__item"]}
            to="contact-block"
            smooth="true"
          >
            {props.t("contact_link")}
          </Link>
        </div>
        <div className={style["contact-block"]}>
          <div className={style["lang-block"]}>
            <button
              className={style["lang-block__item"]}
              onClick={() => {
                setLangPlState(true);
                setLangEnState(false);
                setLangUaState(false);
                props.changeLanguages("pl");
              }}
            >
              <img src={langPlState ? lang_pl_on : lang_pl_off} alt="" />
            </button>
            <button
              className={style["lang-block__item"]}
              onClick={() => {
                setLangPlState(false);
                setLangEnState(true);
                setLangUaState(false);
                props.changeLanguages("en");
              }}
            >
              <img src={langEnState ? lang_en_on : lang_en_off} alt="" />
            </button>
            <button
              className={style["lang-block__item"]}
              onClick={() => {
                setLangPlState(false);
                setLangEnState(false);
                setLangUaState(true);
                props.changeLanguages("ua");
              }}
            >
              <img src={langUaState ? lang_ua_on : lang_ua_off} alt="" />
            </button>
          </div>
          <a
            className={style["contact-block__item"]}
            href="tel:+48 502 708 529"
          >
            +48 502 708 529
          </a>
        </div>
        <button
          className={style["menu-btn"]}
          onClick={props.setMobileMenuState}
        >
          <img src={menu_icon} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
