import style from "./MenuBlock.module.css";
import finance_expert_logo from "../../assets/finance_expert_logo.svg";
import close_icon from "../../assets/close_icon.svg";
import language_icon from "../../assets/lang_icon.svg";
import { Link } from "react-scroll";

const MenuBlock = (props) => {
//   const onClickMenuItemHandler = (event) => {
//     console.log(event.target.innerText);
//     switch (event.target.innerText) {
//       case "O nas": {
//         document
//           .getElementById("about-block")
//           .scrollIntoView({ behavior: "smooth", block: "start" });
//         console.log("AAA");
//         break;
//       }
//       default: {
//       }
//     }
//   };
  //   useEffect(() => {
  //     document
  //       .getElementById("mobile-menu")
  //       .addEventListener("click", (event) => {
  //         console.log(event.target.innerText);
  //         switch (event.target.innerText) {
  //           case "": {
  //             props.setMenuStateHandler();
  //             break;
  //           }
  //           case "O nas": {
  //             // props.setMenuStateHandler();
  //             // document
  //             //   .getElementById("about-block")
  //             //   .scrollIntoView({ behavior: "smooth", block: "start" });
  //             break;
  //           }
  //           case "Oferta": {
  //             document
  //               .getElementById("bureau-block")
  //               .scrollIntoView({ behavior: "smooth", block: "start" });
  //             break;
  //           }
  //           case "Cennik": {
  //             document
  //               .getElementById("price-block")
  //               .scrollIntoView({ behavior: "smooth", block: "start" });
  //             break;
  //           }
  //           case "Korzyści": {
  //             document
  //               .getElementById("work-block")
  //               .scrollIntoView({ behavior: "smooth", block: "start" });
  //             break;
  //           }
  //           case "Kontakt": {
  //             document
  //               .getElementById("contact-block")
  //               .scrollIntoView({ behavior: "smooth", block: "start" });
  //             break;
  //           }
  //           default: {
  //           }
  //         }
  //       });
  //   });
  return (
    <div className={style["menu-block"]} id="mobile-menu">
      <div className={style["menu-content"]}>
        <div className={style["head-block"]}>
          <img
            className={style["head-block__logo"]}
            src={finance_expert_logo}
            alt=""
          />
          <button onClick={props.setMenuStateHandler}>
            <img
              className={style["head-block__close"]}
              src={close_icon}
              alt=""
            />
          </button>
        </div>
        <img className={style["lang-block"]} src={language_icon} alt="" />
        <div className={style["link-block"]}>
          <Link
            className={style["link-block__item"]}
            onClick={props.setMenuStateHandler}
            to="about-block"
            smooth="true"
          >
            O nas
          </Link>
          <Link
            className={style["link-block__item"]}
            onClick={props.setMenuStateHandler}
            to="bureau-block"
            smooth="true"
          >
            Oferta
          </Link>
          <Link
            className={style["link-block__item"]}
            onClick={props.setMenuStateHandler}
            to="price-block"
            smooth="true"
          >
            Cennik
          </Link>
          <Link
            className={style["link-block__item"]}
            onClick={props.setMenuStateHandler}
            to="work-block"
            smooth="true"
          >
            Korzyści
          </Link>
          <Link
            className={style["link-block__item"]}
            onClick={props.setMenuStateHandler}
            to="contact-block"
            smooth="true"
          >
            Kontakt
          </Link>
        </div>
        <div className={style["contact-block"]}>
          <a onClick={props.setMenuStateHandler} href="mailto:biuro@finexp.pl">
            biuro@finexp.pl
          </a>
          <a href="tel:+48 502 708 529">+48 502 708 529</a>
        </div>
      </div>
    </div>
  );
};

export default MenuBlock;
