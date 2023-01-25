import style from "./404.module.css";
import page_404 from "../../assets/404.svg";
import { Link } from "react-router-dom";

const Page404 = (props) => {
  return (
    <div className={style["block"]}>
      <div className={style["content"]}>
        <img src={page_404} alt="" />
        <div className={style["content__content"]}>
          <span>{props.t("404_title")}</span>
          <span>{props.t("404_description")}</span>
          <Link to="/">
            <button>{props.t("404_button")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
