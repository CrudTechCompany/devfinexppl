import style from "./Footer.module.css";
import finexp_logo from "../../assets/finexp_logo.svg";
import { Link } from "react-scroll";
import { Link as NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <div className={style["content-block"]}>
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
          <div>
            <div className={style["address-block"]}>
              <span>Finance Expert Sp. z o.o.</span>
              <span>ul. Krupnicza 2-4/31</span>
              <span>50-074 Wrocław</span>
              <span>NIP: 8971906842</span>
            </div>
            <div className={style["contact-block"]}>
              <a href="tel:+48 502 708 529">+48 502 708 529</a>
              <a href="mailto:biuro@finexp.pl">biuro@finexp.pl</a>
            </div>
          </div>
        </div>
        <div className={style["separator"]} />
        <div className={style["bottom-block"]}>
          <NavLink to="/privacy-policy" target="_blank">
            Polityka prywatności
          </NavLink>
          <span>© 2023 | All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
