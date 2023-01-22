import style from "./ContactBlock.module.css";
import contact_block_image from "../../../assets/contact_block_image.svg";

const ContactBlock = () => {
  return (
    <div className={style["block"]} id="contact-block">
      <div className={style["block-margin"]} />
      <div className={style["contact-block"]}>
        <div className={style["contact-form"]}>
          <span className={style["contact-form__title"]}>
            Zdalna obsługa księgowa dla Twojej firmy
          </span>
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
            type="text"
            placeholder="telefon"
          />
          <button className={style["form-block__btn"]}>Wyślij</button>
        </div>
        <img src={contact_block_image} alt="" />
      </div>
    </div>
  );
};

export default ContactBlock;
