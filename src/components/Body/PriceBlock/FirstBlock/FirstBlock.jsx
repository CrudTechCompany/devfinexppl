import style from "./FirstBlock.module.css";
import first_block from "../../../../assets/first_block.svg";

const FirstBlock = (props) => {
  const content = [
    {
      title: "30",
      price: "500 zł",
    },
    {
      title: "50",
      price: "700 zł",
    },
    {
      title: "75",
      price: "900 zł",
    },
    {
      title: "100",
      price: "1200 zł",
    },
    {
      title: "150",
      price: "1500 zł",
    },
    {
      title: "200",
      price: "1900 zł",
    },
  ];
  return (
    <div className={style["block"]}>
      <div className={style["content-block"]}>
        <div className={style["content"]}>
          <span className={style["title"]}>{props.t("price_first_title")}</span>
          <div className={style["item-block"]}>
            {content.map((el) => (
              <div className={style["item"]} key={el["title"]}>
                <span className={style["item__title"]}>
                  {props.t("price_item_first") +
                    el["title"] +
                    props.t("price_item_second")}
                </span>
                <span className={style["item__description"]}>
                  {el["price"]}
                </span>
              </div>
            ))}
          </div>
          <span className={style["description"]}>
            {props.t("price_description_first")}
            <span>10 zł</span>
            {props.t("price_description_second")}
          </span>
          <button onClick={props.setContactFormState}>
            {props.t("price_block_contact_button")}
          </button>
        </div>
        <img src={first_block} alt="" />
      </div>
    </div>
  );
};

export default FirstBlock;
