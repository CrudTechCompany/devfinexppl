import style from "./404.module.css";
import page_404 from "../../assets/404.svg";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className={style["block"]}>
      <div className={style["content"]}>
        <img src={page_404} alt="" />
        <div className={style["content__content"]}>
          <span>Coś poszło nie tak</span>
          <span>Nie można znaleźć strony, której szukasz</span>
          <Link to="/">
            <button>Powrót na stronę główną</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
