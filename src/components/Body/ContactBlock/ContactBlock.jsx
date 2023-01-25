import style from "./ContactBlock.module.css";
import contact_block from "../../../assets/contact_block.svg";

const ContactBlock = (props) => {
  return (
    <div className={style["block"]} id="contact-block">
      <div className={style["form-block"]}>
        <h3 className={style["title"]}>
          {props.t("contact_block_title")}
        </h3>
        <input
          className={style["input-field"]}
          type="text"
          placeholder={props.t("name_input_placeholder")}
        />
        <input
          className={style["input-field"]}
          type="text"
          placeholder={props.t("surname_input_placeholder")}
        />
        <input
          className={style["input-field"]}
          type="text"
          placeholder={props.t("phone_number_input_placeholder")}
        />
        <button>{props.t("contact_block_send_button")}</button>
      </div>
      <img src={contact_block} alt="" />
    </div>
  );
};

export default ContactBlock;
