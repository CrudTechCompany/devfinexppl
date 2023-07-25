import style from "./ContactForm.module.css";
import close_icon from "../../assets/close_icon.svg";
import check_box_off from "../../assets/check-box-off.svg";
import check_box_on from "../../assets/check-box-on.svg";
import successfully_image from "../../assets/successfully_image.svg";
import { useState } from "react";
import axios from "axios";
import { useInView } from 'react-intersection-observer';
import Sucess from "./Success";
import InputMask from 'react-input-mask';

const ContactForm = (props) => {

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [successfullyState, setSuccessfulyState] = useState(false);
  const setSuccessfulyStateHandler = () => {
    setSuccessfulyState((prev) => {
      prev = !prev;
      return prev;
    });
  };
  const onClickContinueButtonHandler = () => {
    props.setContactFormState();
    setSuccessfulyStateHandler();
  };
  const params = {
    ID_LIST: "63d2f233aaa21d679e722b02",
    KEY: "17d763e350b4de07d83936e65261ad20",
    TOKEN:
      "ATTA5d0876c3c8d85f0daef4bf1f0a82e4efa5a86940d30056f0390d6c08564d3263853A8461",
  };
  const [nameFieldState, setNameFieldState] = useState("");
  const setNameFieldStateHandler = (event) => {
    setNameFieldState((prev) => {
      prev = event.target.value;
      return prev;
    });
  };
  const [emptyNameFieldState, setEmptyNameFieldState] = useState(false);
  const [surnameFieldState, setSurnameFieldState] = useState("");
  const setSurnameFieldStateHandler = (event) => {
    setSurnameFieldState((prev) => {
      prev = event.target.value;
      return prev;
    });
  };
  const [emptySurnameFieldState, setEmptySurnameFieldState] = useState(false);
  const [phoneNumberFieldState, setPhoneNumberFieldState] = useState("");
  const setPhoneNumberStateHandler = (event) => {
    setPhoneNumberFieldState((prev) => {
      prev = event.target.value;
      return prev;
    });
  };
  const [emptyPhoneNumberFieldState, setEmptyPhoneNumberFieldState] =
    useState(false);
  const [checkBoxState, setCheckBoxState] = useState(false);
  const onClickCheckBoxHandler = () => {
    setCheckBoxState((prev) => !prev);
  };
  const [errorCheckBoxState, setErrorCheckBoxState] = useState(false);
  const onClickSendButtonHandler = () => {
    if (
      nameFieldState.length !== 0 &&
      surnameFieldState.length !== 0 &&
      phoneNumberFieldState.length !== 0 &&
      checkBoxState
    ) {
      setNameFieldState("");
      setSurnameFieldState("");
      setPhoneNumberFieldState("");
      setCheckBoxState(false);
      setErrorCheckBoxState(false);
      setEmptyNameFieldState(false);
      setEmptySurnameFieldState(false);
      setEmptyPhoneNumberFieldState(false);
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
        nameFieldState + " " + surnameFieldState + " " + phoneNumberFieldState;
      const data = {
        desc: dataDesc,
        name: dataName,
      };
      try {
        axios.post("https://biznesexpert.bitrix24.pl/rest/2237/1ievccze15ppnpci/crm.lead.add.json", {
          fields: {
            "TITLE": "finexp.pl | Contact Form",
            "ASSIGNED_BY_ID": 11,
            "SOURCE_ID": "UC_HGNS9W",
            "NAME": nameFieldState,
            "LAST_NAME": surnameFieldState,
            "STATUS_ID": "NEW",
            "OPENED": "Y",
            "PHONE": [{ "VALUE": phoneNumberFieldState, "VALUE_TYPE": "WORK" }],
          }
        }).then((response) =>
          response.status === 200
            ? setSuccessfulyStateHandler()
            : props.setContactFormState()
        );
      } catch (e) {
        console.log(e);
      }
    } else {
      if (nameFieldState.length === 0) {
        setEmptyNameFieldState(true);
      } else {
        setEmptyNameFieldState(false);
      }
      if (surnameFieldState.length === 0) {
        setEmptySurnameFieldState(true);
      } else {
        setEmptySurnameFieldState(false);
      }
      if (phoneNumberFieldState.length === 0) {
        setEmptyPhoneNumberFieldState(true);
      } else {
        setEmptyPhoneNumberFieldState(false);
      }
      if (checkBoxState) {
        setErrorCheckBoxState(false);
      } else {
        setErrorCheckBoxState(true);
      }
    }
  };
  return (
    successfullyState ?
      (<Sucess t={props.t} setContactFormState={onClickContinueButtonHandler} />) : (
        <div className={style["block"]}>
          <div ref={ref} className={`${style["content"]} ${inView ? style["show-element"] : style[""]} `}>
            <div className={style["content__content"]}>
              <div className={style["head-block"]}>
                <button onClick={props.setContactFormState}>
                  <img src={close_icon} alt="" />
                </button>
              </div>
              <div className={style["form-block"]}>
                <span className={style["title"]}>
                  {props.t("contact_form_title")}
                </span>
                <input
                  style={{
                    borderColor: emptyNameFieldState
                      ? "rgba(222, 68, 68, 1)"
                      : "rgba(207, 207, 207, 1)",
                  }}
                  value={nameFieldState}
                  onChange={setNameFieldStateHandler}
                  className={style["input-field"]}
                  type="text"
                  placeholder={props.t("name_input_placeholder")}
                />
                <input
                  style={{
                    borderColor: emptySurnameFieldState
                      ? "rgba(222, 68, 68, 1)"
                      : "rgba(207, 207, 207, 1)",
                  }}
                  value={surnameFieldState}
                  onChange={setSurnameFieldStateHandler}
                  className={style["input-field"]}
                  type="text"
                  placeholder={props.t("surname_input_placeholder")}
                />
                <div className={style["phone-number-input"]}>
                  <InputMask
                  style={{
                    borderColor: emptyPhoneNumberFieldState
                      ? "rgba(222, 68, 68, 1)"
                      : "rgba(207, 207, 207, 1)",
                  }}
                    mask="+48 999 999 999"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder={props.t("phone_number_input_placeholder")}
                    value={phoneNumberFieldState}
                    onChange={setPhoneNumberStateHandler}
                  />
                </div>
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
                  <span
                    style={{
                      color: errorCheckBoxState
                        ? "rgba(222, 68, 68, 1)"
                        : "rgba(255, 255, 255, 1)",
                    }}
                  >
                    {props.t("contact_form_checkbox")}
                  </span>
                </div>
                <button
                  className={style["form-block__button"]}
                  onClick={onClickSendButtonHandler}
                >
                  {props.t("contact_form_button")}
                </button>
              </div>
            </div>
          </div>
        </div>)
  );
};

export default ContactForm;
