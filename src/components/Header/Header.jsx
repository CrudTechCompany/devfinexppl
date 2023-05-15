import style from "./Header.module.css";
import finexp_logo from "../../assets/finexp_logo.svg";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu_icon.svg";
import { useEffect, useState } from "react";
import LanguageSelector from "../languageSelector/LanguageSelector";

const Header = (props) => {
  
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
            <LanguageSelector onLanguageChange={(lange)=>props.changeLanguages(lange)} />
          <a
            className={style["contact-block__item"]}
            href="tel:+48718808807"
          >
            +48 718 808 807
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
