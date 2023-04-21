import style from "./ContactForm.module.css";
import close_icon from "../../assets/close_icon.svg";
import check_box_off from "../../assets/check-box-off.svg";
import check_box_on from "../../assets/check-box-on.svg";
import successfully_image from "../../assets/successfully_image.svg";
import { useState } from "react";
import axios from "axios";
import { useInView } from 'react-intersection-observer';

const Sucess = (props) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const onClickContinueButtonHandler = () => {
        props.setContactFormState();
    };
  
    return (
        <div className={style["block"]}>
            <div ref={ref} className={`${style["content"]} ${inView ? style["show-element"] : style[""]} `}>
                <div className={style["content__content"]}>
                    <img
                        className={style["successfully-img"]}
                        src={successfully_image}
                        alt=""
                    />
                    <span className={style["successfully-title"]}>{props.t("successfully_title")}</span>
                    <span className={style["successfully-description"]}>
                        {props.t("successfully_description")}
                    </span>
                    <button
                        className={style["successfully-button"]}
                        onClick={onClickContinueButtonHandler}
                    >
                        {props.t("404_button")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sucess;
