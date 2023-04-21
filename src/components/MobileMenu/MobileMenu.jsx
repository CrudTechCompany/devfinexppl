import style from "./MobileMenu.module.css";
import logo from "../../assets/finexp_logo.svg";
import close_icon from "../../assets/close_icon.svg";
import lang_pl_on from "../../assets/lang_pl_on.svg";
import lang_en_on from "../../assets/lang_en_on.svg";
import lang_ua_on from "../../assets/lang_ua_on.svg";
import lang_pl_off from "../../assets/lang_pl_off.svg";
import lang_en_off from "../../assets/lang_en_off.svg";
import lang_ua_off from "../../assets/lang_ua_off.svg";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import LanguageSelector from "../languageSelector/LanguageSelector";
const MobileMenu = (props) => {
  

  return (
    <div className={style["mobile-menu"]}>
      <div className={style["head-block"]}>
        <img className={style["head-block__logo"]} src={logo} alt="" />
        <button onClick={props.setMobileMenuState}>
          <img src={close_icon} alt="" />
        </button>
      </div>
      <div className={style["lang-block"]}>
        
        <LanguageSelector onLanguageChange={(lange)=>props.changeLanguages(lange)}/>
        
      </div>
      <div className={style["link-block"]}>
        <Link onClick={props.setMobileMenuState} to="about-block" smooth="true">
          {props.t("about_us_link")}
        </Link>
        <Link onClick={props.setMobileMenuState} to="offer-block" smooth="true">
          {props.t("offer_link")}
        </Link>
        <Link onClick={props.setMobileMenuState} to="price-block" smooth="true">
          {props.t("price_link")}
        </Link>
        <Link
          onClick={props.setMobileMenuState}
          to="benefit-block"
          smooth="true"
        >
          {props.t("benefits_link")}
        </Link>
        <Link
          onClick={props.setMobileMenuState}
          to="contact-block"
          smooth="true"
        >
          {props.t("contact_link")}
        </Link>
      </div>
      <div className={style["contact-block"]}>
        <button onClick={props.setMobileMenuState}>
          <a className={style["link"]} href="mailto:biuro@finexp.pl">
            biuro@finexp.pl
          </a>
        </button>
        <button onClick={props.setMobileMenuState}>
          <a className={style["link"]} href="tel:+48 502 708 529">
            +48 502 708 529
          </a>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
