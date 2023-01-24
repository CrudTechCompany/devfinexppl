import { Link } from "react-router-dom";
import style from "./PrivacyPolicyPopUp.module.css";

const PrivacyPolicyPopUp = (props) => {
  return (
    <div className={style["pop-up"]}>
      <div className={style["pop-up__content"]}>
        <div className={style["content-block"]}>
          <span>
            Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
            poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na
            ich użycie.
          </span>
          <Link to="/privacy-policy" target="_blank" rel="noreferrer">
            Polityka prywatności
          </Link>
        </div>
        <button onClick={props.onClickPopUpAgreeButton}>
          Zaakceptuj i zamknij
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicyPopUp;
