import style from "./SixthBlock.module.css";
import fifthBlockAccept from "../../../../assets/fifthBlockAccept.svg";
import { useInView } from 'react-intersection-observer';
import sixthBlockImg from '../../../../assets/sixthBlockImg.svg';
import { keyboard } from "@testing-library/user-event/dist/keyboard";
const SixthBlock = (props) => {

  const{ ref,inView } = useInView({
    threshold:0,
  })

  const content = [
    {
        text:props.t("price_sixth_text1")
    },
    {
        text:props.t("price_sixth_text2")
    },
    {
        text:props.t("price_sixth_text3")
    },
    {
        text:props.t("price_sixth_text4")
    },
    {
        text:props.t("price_sixth_text5")
    },
    {
        text:props.t("price_sixth_text6")
    },
    {
        text:props.t("price_sixth_text7")
    },
    {
        text:props.t("price_sixth_text8")
    },
    {
        text:props.t("price_sixth_text9")
    },
    {
        text:props.t("price_sixth_text10")
    },
    {
        text:props.t("price_sixth_text11")
    },
  ];
  const contentItem = content.map((item) => (
    <div key={item.text} className={style["item-block-position"]}>
        <div>
            <img src={fifthBlockAccept} alt="" />
        </div>
        <div>
            {item.text}
        </div>
    </div>
  ))
  return (
    <div className={style["block"]}>
      <div className={style["content-block"]}>
        <div className={style["content"]}>
            <div className={style["title-wrapper"]}>
                <div><span className={style["title"]}>{props.t("price_sixth_title")}</span></div>
                <div><span className={style["green-span"]} >od 2000 zł </span></div>                
            </div>
          <span className={style["description"]}>
            {props.t("price_capture_description_sixth")}
          </span>
          <div className={style["item-block"]}>
           
              {contentItem}  
            
            </div>
          <span className={style["description"]}>
            {props.t("price_description_sixth")}
          </span>
          <button onClick={props.setContactFormState}>
            {props.t("price_block_contact_button")}
          </button>
        </div>
        <img src={sixthBlockImg} alt="" />
      </div>
    </div>
  );
};

export default SixthBlock;