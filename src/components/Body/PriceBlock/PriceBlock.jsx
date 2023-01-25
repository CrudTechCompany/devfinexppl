import FirstBlock from "./FirstBlock/FirstBlock";
import FourthBlock from "./FourthBlock/FourthBlock";
import style from "./PriceBlock.module.css";
import SecondBlock from "./SecondBlock/SecondBlock";
import ThirdBlock from "./ThirdBlock/ThirdBlock";

const PriceBlock = (props) => {
  return (
    <div className={style["block"]} id="price-block">
      <div className={style["content-block"]}>
        <div className={style["content"]}>
          <div className={style["title-block"]}>
            <h3 className={style["title"]}>{props.t("price_block_title")}</h3>
            <span>{props.t("price_block_description")}</span>
          </div>
          <FirstBlock t={props.t} setContactFormState={props.setContactFormState}/>
          <SecondBlock t={props.t} setContactFormState={props.setContactFormState}/>
          <ThirdBlock t={props.t} setContactFormState={props.setContactFormState}/>
          <FourthBlock t={props.t} setContactFormState={props.setContactFormState}/>
        </div>
      </div>
    </div>
  );
};

export default PriceBlock;
