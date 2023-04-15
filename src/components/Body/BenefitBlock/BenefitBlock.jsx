import style from "./BenefitBlock.module.css";
import benefit_1 from "../../../assets/benefit_1.svg";
import benefit_2 from "../../../assets/benefit_2.svg";
import benefit_3 from "../../../assets/benefit_3.svg";
import benefit_4 from "../../../assets/benefit_4.svg";
import benefit_5 from "../../../assets/benefit_5.svg";
import benefit_6 from "../../../assets/benefit_6.svg";
import benefit_7 from "../../../assets/benefit_7.svg";
import benefit_8 from "../../../assets/benefit_8.svg";
import { useInView } from 'react-intersection-observer';

const BenefitBlock = (props) => {
  const{ ref,inView } = useInView({
    threshold:0.5,
  })
  const content = [
    {
      icon: benefit_1,
      title: "Optymalizacja finansowa",
    },
    {
      icon: benefit_2,
      title: "Doradztwo w bieżących sprawach firmy",
    },
    {
      icon: benefit_3,
      title: "Rozwiązanie systemowe",
    },
    {
      icon: benefit_4,
      title: "Elektroniczna wymiana dokumentów",
    },
    {
      icon: benefit_5,
      title: "Bezpieczeństwo",
    },
    {
      icon: benefit_6,
      title: "Mailowe przypomnienie o ważnych terminach",
    },
    {
      icon: benefit_7,
      title: "Wsparcie merytoryczne",
    },
    {
      icon: benefit_8,
      title: "Księgowość to nasza pasja",
    },
  ];
  return (
    <div className={style["block"]} id="benefit-block">
      <h3 className={style["title"]}>
        {props.t("benefits_block_title")} <span>Expert</span>
      </h3>
      <div className={style["content"]}>
        {content.map((el, index) => (
          <div ref={ref} className={`${style["content__item"]} ${inView ? style["show-element"]: style[""]} `} key={el["title"]}>
            <img src={el["icon"]} alt="" />
            <span>
              {index === 0
                ? props.t("benefits_item_first")
                : index === 1
                ? props.t("benefits_item_second")
                : index === 2
                ? props.t("benefits_item_third")
                : index === 3
                ? props.t("benefits_item_fourth")
                : index === 4
                ? props.t("benefits_item_fifth")
                : index === 5
                ? props.t("benefits_item_sixth")
                : index === 6
                ? props.t("benefits_item_seventh")
                : props.t("benefits_item_eighth")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitBlock;
