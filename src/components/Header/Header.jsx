import style from "./Header.module.css";
import finexp_logo from "../../assets/finexp_logo.svg";
import { Link } from "react-scroll";
import lang_pl from "../../assets/lang_pl.svg";
import lang_en from "../../assets/lang_en.svg";
import lang_ua from "../../assets/lang_ua.svg";
import menu_icon from "../../assets/menu_icon.svg";

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
            O nas
          </Link>
          <Link
            className={style["link-block__item"]}
            to="offer-block"
            smooth="true"
          >
            Oferta
          </Link>
          <Link
            className={style["link-block__item"]}
            to="price-block"
            smooth="true"
          >
            Cennik
          </Link>
          <Link
            className={style["link-block__item"]}
            to="benefit-block"
            smooth="true"
          >
            Korzyści
          </Link>
          <Link
            className={style["link-block__item"]}
            to="contact-block"
            smooth="true"
          >
            Kontakt
          </Link>
        </div>
        <div className={style["contact-block"]}>
          <div className={style["lang-block"]}>
            <button className={style["lang-block__item"]}>
              <img src={lang_pl} alt="" />
            </button>
            <button className={style["lang-block__item"]}>
              <img src={lang_en} alt="" />
            </button>
            <button className={style["lang-block__item"]}>
              <img src={lang_ua} alt="" />
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
