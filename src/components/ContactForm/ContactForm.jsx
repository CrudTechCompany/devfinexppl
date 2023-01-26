import style from "./ContactForm.module.css";
import close_icon from "../../assets/close_icon.svg";
import check_box_off from "../../assets/check-box-off.svg";
import check_box_on from "../../assets/check-box-on.svg";
import { useState } from "react";
// import { GoogleSpreadsheet } from "google-spreadsheet";

const ContactForm = (props) => {
  // const {
  //   REACT_APP_PRIVATE_KEY,
  //   REACT_APP_CLIENT_EMAIL,
  //   REACT_APP_SPREADSHEET_ID,
  //   REACT_APP_SHEET_ID,
  // } = process.env;
  // const doc = new GoogleSpreadsheet(REACT_APP_SPREADSHEET_ID);
  // const appendSpreadsSheet = async (row) => {
  //   try {
  //     await doc.useServiceProviderAuth({
  //       client_email: REACT_APP_CLIENT_EMAIL,
  //       private_key: REACT_APP_PRIVATE_KEY,
  //     });
  //     await doc.loadInfo();
  //     console.log(doc.loadInfo());
  //     const sheet = doc.sheetsById(REACT_APP_SHEET_ID);
  //     const result = await sheet.addRow(row);
  //     return result;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
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
      console.log({
        name: nameFieldState,
        surname: surnameFieldState,
        phone_number: phoneNumberFieldState,
      });
    } else {
      if (nameFieldState.length === 0) {
        setEmptyNameFieldState(true);
      }else{
        setEmptyNameFieldState(false);
      }
      if (surnameFieldState.length === 0) {
        setEmptySurnameFieldState(true);
      }else{
        setEmptySurnameFieldState(false);
      }
      if (phoneNumberFieldState.length === 0) {
        setEmptyPhoneNumberFieldState(true);
      }else{
        setEmptyPhoneNumberFieldState(false);
      }
      if (checkBoxState) {
        setErrorCheckBoxState(false);
      }else{
        setErrorCheckBoxState(true);
      }
    }
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
            <input
              style={{
                borderColor: emptyPhoneNumberFieldState
                  ? "rgba(222, 68, 68, 1)"
                  : "rgba(207, 207, 207, 1)",
              }}
              value={phoneNumberFieldState}
              onChange={setPhoneNumberStateHandler}
              className={style["input-field"]}
              type="tel"
              placeholder={props.t("phone_number_input_placeholder")}
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
    </div>
  );
};

export default ContactForm;
