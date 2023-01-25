import { Link } from "react-router-dom";
import style from "./PrivacyPolicyPopUp.module.css";

const PrivacyPolicyPopUp = (props) => {
  return (
    <div className={style["pop-up"]}>
      <div className={style["pop-up__content"]}>
        <div className={style["content-block"]}>
          <span>
            {props.t("pop_up_privacy_title")}
          </span>
          <Link to="/privacy-policy" target="_blank" rel="noreferrer">
            {props.t("privacy_policy_link")}
          </Link>
        </div>
        <button onClick={props.onClickPopUpAgreeButton}>
          {props.t("pop_up_privacy_button")}
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicyPopUp;
