import style from "./ThirdBlock.module.css";
import third_block from "../../../../assets/third_block.svg";
import { useInView } from 'react-intersection-observer';

const ThirdBlock = (props) => {

  const{ ref,inView } = useInView({
    threshold:0,
  });

  const content = [
    {
      title:
        "Obsługa płacowa (sporządzanie listy płac, przygotowywanie zaświadczeń o zarobkach, deklaracje rozliczeniowe ZUS)",
      price: "50 zł pracownik / zleceniobiorca / inna umowa / miesiąc",
    },
    {
      title:
        "Obsługa kadrowo-płacowa (obsługa płacowa + ewidencja urlopowa, prowadzenie teczek osobowych, ewidencja zwolnień lekarskich)",
      price: "75 zł pracownik / zleceniobiorca / inna umowa / miesiąc",
    },
    {
      title:
        "Zatrudnienie pracownik/zleceniobiorca/inna umowa (przygotowanie dokumentacji związanej z zatrudnieniem)",
      price: "50 zł / pracownik",
    },
    {
      title:
        "Zwolnienie pracownika (przygotowanie dokumentacji związanej ze zwolnieniem)",
      price: "50 zł / pracownik ",
    },
  ];
  return (
    <div className={style["block"]}>
      <div className={style["content-block"]}>
        <div className={style["content"]}>
          <span className={style["title"]}>{props.t("price_third_title")}</span>
          <div className={style["item-block"]}>
            {content.map((el, index) => (
              <div ref = {ref} className={`${style["item"]} ${inView ? style["show-element"]: style[""]} `} key={el["title"]}>
                <span className={style["item__title"]}>
                  {index === 0
                    ? props.t("price_first_item_title")
                    : index === 1
                    ? props.t("price_second_item_title")
                    : index === 2
                    ? props.t("price_third_item_title")
                    : props.t("price_fourth_item_title")}
                </span>
                <span className={style["item__price"]}>
                  {index === 0
                    ? props.t("price_first_item_price")
                    : index === 1
                    ? props.t("price_second_item_price")
                    : index === 2
                    ? props.t("price_third_item_price")
                    : props.t("price_fourth_item_price")}
                </span>
              </div>
            ))}
          </div>
          <button onClick={props.setContactFormState}>
            {props.t("price_block_contact_button")}
          </button>
        </div>
        <img src={third_block} alt="" />
      </div>
    </div>
  );
};

export default ThirdBlock;
