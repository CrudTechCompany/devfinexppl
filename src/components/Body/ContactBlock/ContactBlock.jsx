import style from "./ContactBlock.module.css";
import contact_block from "../../../assets/contact_block.svg";
import { useState } from "react";
import axios from "axios";
/*import { useInView } from 'react-intersection-observer';*/

const ContactBlock = (props) => {

  /*const{ ref,inView } = useInView({
    threshold:0,
  });*/

  const params = {
    ID_LIST: "63d2f233aaa21d679e722b02",
    KEY: "17d763e350b4de07d83936e65261ad20",
    TOKEN:
      "ATTA5d0876c3c8d85f0daef4bf1f0a82e4efa5a86940d30056f0390d6c08564d3263853A8461",
  };
  const [checkBoxState, setCheckBoxState] = useState(false);
  const OnClickCheckBoxHandler = () => {
    setCheckBoxState((prev) => {
      if (prev === false) {
        setFalseCheckBoxState(false);
        prev = !prev;
        return prev;
      } else {
        return !prev;
      }
    });
  };
  const [falseCheckBoxState, setFalseCheckBoxState] = useState(false);
  const [nameInputFieldState, setNameInputFieldState] = useState("");
  const setNameInputFieldStateHandler = (event) => {
    setNameInputFieldState((prev) => {
      prev = event.target.value;
      return prev;
    });
  };
  const [emptyNameFieldState, setEmptyNameFieldState] = useState(false);
  const [surnameInputFieldState, setSurnameInputFieldState] = useState("");
  const setSurnameInputFieldStateHandler = (event) => {
    setSurnameInputFieldState((prev) => {
      prev = event.target.value;
      return prev;
    });
  };
  const [emptySurnameFieldState, setEmptySurnameFieldState] = useState(false);
  const [phoneNumberInputFieldState, setPhoneNumberInputFieldState] =
    useState("");
  const setPhoneNumberInputFieldStateHandler = (event) => {
    setPhoneNumberInputFieldState((prev) => {
      prev = event.target.value;
      return prev;
    });
  };
  const [emptyPhoneNumberFieldState, setEmptyPhoneNumberFieldState] =
    useState(false);
  const onClickSendButtonHandler = () => {
    if (
      nameInputFieldState.length !== 0 &&
      surnameInputFieldState.length !== 0 &&
      phoneNumberInputFieldState.length !== 0 &&
      checkBoxState
    ) {
      setNameInputFieldState("");
      setSurnameInputFieldState("");
      setPhoneNumberInputFieldState("");
      setEmptyNameFieldState(false);
      setEmptySurnameFieldState(false);
      setEmptyPhoneNumberFieldState(false);
      setCheckBoxState(false);
      setFalseCheckBoxState(false);
      let dataName = "ID: ";
      if (new Date().getDay() < 10) {
        dataName += "0" + new Date().getDay();
      } else {
        dataName += new Date().getDay();
      }
      if (new Date().getMonth() < 10) {
        dataName += "-0" + (new Date().getMonth() + 1);
      } else {
        dataName += "-" + (new Date().getMonth() + 1);
      }
      dataName += "-" + new Date().getFullYear();
      if (new Date().getHours() < 10) {
        dataName += " 0" + new Date().getHours();
      } else {
        dataName += " " + new Date().getHours();
      }
      if (new Date().getMinutes() < 10) {
        dataName += ":0" + new Date().getMinutes();
      } else {
        dataName += ":" + new Date().getMinutes();
      }
      if (new Date().getSeconds() < 10) {
        dataName += ":0" + new Date().getSeconds();
      } else {
        dataName += ":" + new Date().getSeconds();
      }
      let dataDesc =
        nameInputFieldState +
        " " +
        surnameInputFieldState +
        " " +
        phoneNumberInputFieldState;
      const data = {
        desc: dataDesc,
        name: dataName,
      };
      try {
        axios.post("https://api.trello.com/1/cards", data, {
          params: {
            idList: params["ID_LIST"],
            key: params["KEY"],
            token: params["TOKEN"],
          },
        }).then(() => {
          props.onSendForm(true);
        })
      
      } catch (e) {
        console.log(e);
      }
    } else {
      if (nameInputFieldState.length === 0) {
        setEmptyNameFieldState(true);
      } else {
        setEmptyNameFieldState(false);
      }
      if (surnameInputFieldState.length === 0) {
        setEmptySurnameFieldState(true);
      } else {
        setEmptySurnameFieldState(false);
      }
      if (phoneNumberInputFieldState.length === 0) {
        setEmptyPhoneNumberFieldState(true);
      } else {
        setEmptyPhoneNumberFieldState(false);
      }
      if (checkBoxState === false) {
        setFalseCheckBoxState(true);
      } else {
        setFalseCheckBoxState(false);
      }
    }
  };
  return (
    <div className={style["block"]} id="contact-block">
      <div className={style["form-block"]}>
        <h3 className={style["title"]}>{props.t("contact_block_title")}</h3>
        <input 
          style={{
            borderColor: emptyNameFieldState
              ? "rgba(222, 68, 68, 1)"
              : "rgba(207, 207, 207, 1",
          }}
          value={nameInputFieldState}
          onChange={setNameInputFieldStateHandler}
          className={`${style["input-field"]} `}
          type="text"
          placeholder={props.t("name_input_placeholder")}
        />
        <input 
          style={{
            borderColor: emptySurnameFieldState
              ? "rgba(222, 68, 68, 1)"
              : "rgba(207, 207, 207, 1",
          }}
          value={surnameInputFieldState}
          onChange={setSurnameInputFieldStateHandler}
          className={`${style["input-field"]}  `}
          type="text"
          placeholder={props.t("surname_input_placeholder")}
        />
        <input 
          style={{
            borderColor: emptyPhoneNumberFieldState
              ? "rgba(222, 68, 68, 1)"
              : "rgba(207, 207, 207, 1",
          }}
          value={phoneNumberInputFieldState}
          onChange={setPhoneNumberInputFieldStateHandler}
          className={`${style["input-field"]} `}
          type="tel"
          placeholder={props.t("phone_number_input_placeholder")}
        />
        <div className={style["check-box-block"]}>
          <button
            onClick={OnClickCheckBoxHandler}
            className={style["check-box-block__button"]}
            style={{
              borderColor: falseCheckBoxState
                ? "rgba(222, 68, 68, 1)"
                : "rgba(40, 40, 40, 1)",
            }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="19"
                height="19"
                rx="4"
                fill={checkBoxState ? "#282828" : "rgba(255, 255, 255, 1"}
              />
              <path
                d="M7.91667 12.9832L4.75 9.8165L5.85833 8.70817L7.91667 10.7665L13.1417 5.5415L14.25 6.64984L7.91667 12.9832Z"
                fill="white"
              />
            </svg>
          </button>

          <span>{props.t("contact_form_checkbox")}</span>
        </div>
        <button
          onClick={onClickSendButtonHandler}
          className={style["form-block__button"]}
        >
          {props.t("contact_block_send_button")}
        </button>
      </div>
      <img src={contact_block} alt="" />
    </div>
  );
};

export default ContactBlock;
