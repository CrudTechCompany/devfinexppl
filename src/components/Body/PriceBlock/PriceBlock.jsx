import FirstInfoBlock from "./FirstInfoBlock/FirstInfoBlock";
import FourthInfoBlock from "./FourthInfoBlock/FourthInfoBlock";
import style from "./PriceBlock.module.css";
import SecondInfoBlock from "./SecondInfoBlock/SecondInfoBlock";
import ThirdInfoBlock from "./ThirdInfoBlock/ThirdInfoBlock";

const PriceBlock = () => {
  return (
    <div className={style["block"]} id="price-block">
      <div className={style["block-margin"]}/>
      <div className={style["price-block"]}>
        <div className={style["content-block"]}>
          <span className={style["content-block__title"]}>Cennik</span>
          <span className={style["content-block__description"]}>
            Wszystkie kwoty są cenami netto
          </span>
          <FirstInfoBlock />
          <SecondInfoBlock />
          <ThirdInfoBlock />
          <FourthInfoBlock />
        </div>
      </div>
    </div>
  );
};

export default PriceBlock;
