import style from "./Footer.module.css";
import finance_expert_logo from "../../assets/finance_expert_logo.svg";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    document.getElementById("footer").addEventListener("click", (event) => {
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
    <footer className={style["footer"]} id="footer">
      <div className={style["footer-content"]}>
        <img src={finance_expert_logo} alt="" />
        <div className={style["link-block"]}>
          <button className={style["link-block__item"]}>O nas</button>
          <button className={style["link-block__item"]}>Oferta</button>
          <button className={style["link-block__item"]}>Cennik</button>
          <button className={style["link-block__item"]}>Korzyści</button>
          <button className={style["link-block__item"]}>Kontakt</button>
        </div>
        <div className={style["contact-block"]}>
          <div className={style["address-block"]}>
            <span>Finance Expert Sp. z o.o.</span>
            <span>ul. Krupnicza 2-4/31</span>
            <span>50-074 Wrocław</span>
            <span>NIP: 8971906842</span>
          </div>
          <div className={style["link-item-block"]}>
            <a href="tel:+48 502 708 529">+48 502 708 529</a>
            <a href="mailto:biuro@finexp.pl">biuro@finexp.pl</a>
          </div>
        </div>
      </div>
      <div className={style["separator"]} />
      <div className={style["bottom-block"]}>
        <a href="#">Polityka prywatności</a>
        <span>© 2023 | All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
