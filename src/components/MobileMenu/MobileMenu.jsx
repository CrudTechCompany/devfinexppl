import style from "./MobileMenu.module.css";
import logo from "../../assets/finexp_logo.svg";
import close_icon from "../../assets/close_icon.svg";
import lang_pl from "../../assets/lang_pl.svg";
import lang_en from "../../assets/lang_en.svg";
import lang_ua from "../../assets/lang_ua.svg";
import { Link } from "react-scroll";

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
        <img src={lang_pl} alt="" />
        <img src={lang_en} alt="" />
        <img src={lang_ua} alt="" />
      </div>
      <div className={style["link-block"]}>
        <Link onClick={props.setMobileMenuState} to="about-block" smooth="true">
          O nas
        </Link>
        <Link onClick={props.setMobileMenuState} to="offer-block" smooth="true">
          Oferta
        </Link>
        <Link onClick={props.setMobileMenuState} to="price-block" smooth="true">
          Cennik
        </Link>
        <Link
          onClick={props.setMobileMenuState}
          to="benefit-block"
          smooth="true"
        >
          Korzyści
        </Link>
        <Link
          onClick={props.setMobileMenuState}
          to="contact-block"
          smooth="true"
        >
          Kontakt
        </Link>
      </div>
      <div className={style["contact-block"]}>
        <button onClick={props.setMobileMenuState}>
          <a className={style["link"]} href="mailto:biuro@finexp.pl">biuro@finexp.pl</a>
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
