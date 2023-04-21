import style from "./Footer.module.css";
import finexp_logo from "../../assets/finexp_logo.svg";
import { Link } from "react-scroll";
import { Link as NavLink } from "react-router-dom";

const Footer = (props) => {
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
          <div>
            <div className={style["address-block"]}>
              <span>Finance Expert Sp. z o.o.</span>
              <span>ul. Kuźnicza 10, III piętro</span>
              <span>50-138 Wrocław</span>
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
            {props.t("privacy_policy_link")}
          </NavLink>
          <span>{props.t("all_rights_reserved")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
