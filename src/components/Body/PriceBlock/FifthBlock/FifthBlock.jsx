import style from "./FifthBlock.module.css";
import fifthBlockAccept from "../../../../assets/fifthBlockAccept.svg";
import { useInView } from 'react-intersection-observer';
import fifthBlockImg from '../../../../assets/fifthBlockImg.svg';
const FifthBlock = (props) => {

  const{ ref,inView } = useInView({
    threshold:0,
  })

  const content = [
    {
        text:props.t("price_fifth_text1")
    },
    {
        text:props.t("price_fifth_text2")
    },
    {
        text:props.t("price_fifth_text3")
    },
    {
        text:props.t("price_fifth_text4")
    },
    {
        text:props.t("price_fifth_text5")
    },
    {
        text:props.t("price_fifth_text6")
    },
    {
        text:props.t("price_fifth_text7")
    },
    {
        text:props.t("price_fifth_text8")
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
                <div><span className={style["title"]}>{props.t("price_fifth_title")}</span></div>
                <div><span className={style["green-span"]} >od 500 zł </span></div>                
            </div>
          <span className={style["description"]}>
            {props.t("price_capture_description_fifth")}
          </span>
          <div className={style["item-block"]}>          
              {contentItem}              
            </div>
          <span className={style["description"]}>
            {props.t("price_description_fifth")}
          </span>
          <button onClick={props.setContactFormState}>
            {props.t("price_block_contact_button")}
          </button>
        </div>
        <img src={fifthBlockImg} alt="" />
      </div>
    </div>
  );
};

export default FifthBlock;