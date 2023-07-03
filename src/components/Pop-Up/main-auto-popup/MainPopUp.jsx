import React from "react";
import style from './MainPopUp.module.css';
import close from '../../../assets/mainClose.svg';
import closeBlack from '../../../assets/closeBlack.svg';
import { useInView } from 'react-intersection-observer';

const MainPopUp = ( {t,setMainPopUpHandler,setContactFormState}) => {

    const{ ref,inView } = useInView({
        threshold:0,
      });

    return (
        <div className={style["main-popup-wrapper"]}>
            <div ref = {ref} className={`${style["main-content-wrapper"]} ${inView ? style["show-element"]: style[""]} `}>
                <div className={style["close-white"]} onClick={setMainPopUpHandler}><img src={close} alt="" /></div>
                <div className={style["close-black"]} onClick={setMainPopUpHandler}><img src={closeBlack} alt="" /></div>
                <div className={style["main-content"]}>
                    <div className={style["form-header"]}>
                        {t("mainPopUp_header")}
                    </div>
                    <div className={style['form-capture']}>
                        {t("mainPopUp_capture")}
                    </div>
                    <div className={style['form-description']}>
                        {t("mainPopUp_description")}
                    </div>
                    <div className={style["button-form"]}>
                        <button onClick={()=> {
                            setContactFormState(); 
                            setMainPopUpHandler();
                            }}>{t("mainPopUp_button")}</button>
                    </div>
                    <div className={style["text-bottom"]}>
                        * {t("mainPopUp_bottom")}
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default MainPopUp;