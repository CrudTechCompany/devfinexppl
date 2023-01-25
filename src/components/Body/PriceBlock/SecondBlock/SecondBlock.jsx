import style from "./SecondBlock.module.css";
import second_block from "../../../../assets/second_block.svg";

const SecondBlock = (props) => {
  const content = [
    {
      title: "10",
      price: "300 zł",
    },
    {
      title: "30",
      price: "400 zł",
    },
    {
      title: "70",
      price: "500 zł",
    },
    {
      title: "100",
      price: "600 zł",
    },
    {
      title: "150",
      price: "800 zł",
    },
    {
      title: "200",
      price: "1000 zł",
    },
    {
      title: "300",
      price: "1250 zł",
    },
    {
      title: "400",
      price: "1500 zł",
    },
  ];
  return (
    <div className={style["block"]}>
      <div className={style["content-block"]}>
        <img src={second_block} alt="" />
        <div className={style["content"]}>
          <span className={style["title"]}>
            {props.t("price_second_title")}
          </span>
          <div className={style["item-block"]}>
            {content.map((el) => (
              <div className={style["item"]} key={el["title"]}>
                <span className={style["item__title"]}>
                  {props.t("price_item_first") +
                    el["title"] +
                    props.t("price_item_second")}
                </span>
                <span className={style["item__price"]}>{el["price"]}</span>
              </div>
            ))}
          </div>
          <span className={style["description"]}>
            {props.t("price_description_first")}
            <span>5 zł</span>
            {props.t("price_description_second")}
          </span>
          <button onClick={props.setContactFormState}>
            {props.t("price_block_contact_button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondBlock;
