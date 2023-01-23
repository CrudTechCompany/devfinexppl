import style from "./ContactForm.module.css";
import close_icon from "../../assets/close_icon.svg";
import check_box_off from "../../assets/check-box-off.svg";
import check_box_on from "../../assets/check-box-on.svg";
import { useState } from "react";

const ContactForm = (props) => {
  const [checkBoxState, setCheckBoxState] = useState(false);
  const onClickCheckBoxHandler = () => {
    setCheckBoxState((prev) => !prev);
  };
  return (
    <div className={style["block"]}>
      <div className={style["content"]}>
        <div className={style["content__content"]}>
          <div className={style["head-block"]}>
            <button onClick={props.setContactFormState}>
              <img src={close_icon} alt="" />
            </button>
          </div>
          <div className={style["form-block"]}>
            <span className={style["title"]}>Umów się na spotkanie</span>
            <input
              className={style["input-field"]}
              type="text"
              placeholder="Imię"
            />
            <input
              className={style["input-field"]}
              type="text"
              placeholder="nazwisko"
            />
            <input
              className={style["input-field"]}
              type="tel"
              placeholder="telefon"
            />
            <div className={style["check-box-block"]}>
              <button
                onClick={onClickCheckBoxHandler}
                className={style["check-box-button"]}
              >
                <img
                  src={checkBoxState ? check_box_on : check_box_off}
                  alt=""
                />
              </button>

              <span>
                Wyrażam zgodę na przetwarzanie danych osobowych. Informacje
                dotyczące przetwarzania Twoich danych osobowych - czytaj więcej
              </span>
            </div>
            <button className={style["form-block__button"]}>Wyślij</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
