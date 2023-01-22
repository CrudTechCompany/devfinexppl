import style from "./Header.module.css";
import finance_expert_logo from "../../assets/finance_expert_logo.svg";
import lang_icon from "../../assets/lang_icon.svg";
import menu_icon from "../../assets/mobile_menu_icon.svg";
import { useEffect } from "react";

const Header = (props) => {
  useEffect(() => {
    document.getElementById("header").addEventListener("click", (event) => {
      switch (event.target.innerText) {
        case "O nas": {
          document
            .getElementById("about-block")
            .scrollIntoView({ behavior: "smooth", block: "start" });
          break;
        }
        case "Oferta": {
          document
            .getElementById("bureau-block")
            .scrollIntoView({ behavior: "smooth", block: "start" });
          break;
        }
        case "Cennik": {
          document
            .getElementById("price-block")
            .scrollIntoView({ behavior: "smooth", block: "start" });
          break;
        }
        case "Korzyści": {
          document
            .getElementById("work-block")
            .scrollIntoView({ behavior: "smooth", block: "start" });
          break;
        }
        case "Kontakt": {
          document
            .getElementById("contact-block")
            .scrollIntoView({ behavior: "smooth", block: "start" });
          break;
        }
        default: {
        }
      }
    });
  });
  return (
    <header className={style["header"]} id="header">
      <div className={style["content"]}>
        <img className={style["content__logo"]} src={finance_expert_logo} alt="" />
        <div className={style["menu-block"]}>
          <button className={style["menu-block__btn"]}>O nas</button>
          <button className={style["menu-block__btn"]} href="#">
            Oferta
          </button>
          <button className={style["menu-block__btn"]} href="#">
            Cennik
          </button>
          <button className={style["menu-block__btn"]} href="#">
            Korzyści
          </button>
          <button className={style["menu-block__btn"]} href="#">
            Kontakt
          </button>
        </div>
        <div className={style["phone-block"]}>
          <img src={lang_icon} alt="" />
          <a className={style["phone-link"]} href="tel:+48 502 708 529">
            +48 502 708 529
          </a>
        </div>
        <button className={style["menu-button"]} onClick={props.setMenuStateHandler}>
          <img src={menu_icon} alt=""/>
        </button>
      </div>
    </header>
  );
};
export default Header;
