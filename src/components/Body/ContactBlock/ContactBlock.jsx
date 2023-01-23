import style from "./ContactBlock.module.css";
import contact_block from "../../../assets/contact_block.svg";

const ContactBlock = () => {
  return (
    <div className={style["block"]} id="contact-block">
      <div className={style["form-block"]}>
        <h3 className={style["title"]}>
          Zdalna obsługa księgowa dla Twojej firmy
        </h3>
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
        <button>Wyślij</button>
      </div>
      <img src={contact_block} alt="" />
    </div>
  );
};

export default ContactBlock;
