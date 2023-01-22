import style from "./WorkWithFEBlock.module.css";
import icon_1 from "../../../assets/icon_1.svg";
import icon_2 from "../../../assets/icon_2.svg";
import icon_3 from "../../../assets/icon_3.svg";
import icon_4 from "../../../assets/icon_4.svg";
import icon_5 from "../../../assets/icon_5.svg";
import icon_6 from "../../../assets/icon_6.svg";
import icon_7 from "../../../assets/icon_7.svg";
import icon_8 from "../../../assets/icon_8.svg";

const WorkWithFEBlock = () => {
  return (
    <div className={style["block"]} id="work-block">
      <div className={style["block-margin"]}/>
      <div className={style["work-block"]}>
        <div className={style["block-title"]}>
          Korzyści współpracy z Finance <span>Expert</span>
        </div>
        <div className={style["content"]}>
          <div>
            <div className={style["item-block"]}>
              <img src={icon_1} alt="" />
              <span>Optymalizacja finansowa</span>
            </div>
            <div className={style["item-block"]}>
              <img src={icon_5} alt="" />
              <span>Doradztwo w bieżących sprawach firmy</span>
            </div>
            <div className={style["item-block"]}>
              <img src={icon_3} alt="" />
              <span>Rozwiązanie systemowe</span>
            </div>
            <div className={style["item-block"]}>
              <img src={icon_7} alt="" />
              <span>Elektroniczna wymiana dokumentów</span>
            </div>
          </div>
          <div>
            <div className={style["item-block"]}>
              <img src={icon_2} alt="" />
              <span>Bezpieczeństwo</span>
            </div>
            <div className={style["item-block"]}>
              <img src={icon_6} alt="" />
              <span>Mailowe przypomnienie o ważnych terminach</span>
            </div>
            <div className={style["item-block"]}>
              <img src={icon_4} alt="" />
              <span>Wsparcie merytoryczne</span>
            </div>
            <div className={style["item-block"]}>
              <img src={icon_8} alt="" />
              <span>Księgowość to nasza pasja</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithFEBlock;
