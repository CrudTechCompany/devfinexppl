import style from "./FirstInfoBlock.module.css";
import first_info_block_image from "../../../../assets/first_info_block_image.svg";

const FirstInfoBlock = () => {
  const content = [
    {
      title: "do 30 dokumentów",
      price: "500 zł",
    },
    {
      title: "do 50 dokumentów",
      price: "700 zł",
    },
    {
      title: "do 75 dokumentów",
      price: "900 zł",
    },
    {
      title: "do 100 dokumentów",
      price: "1200 zł",
    },
    {
      title: "do 150 dokumentów",
      price: "1500 zł",
    },
    {
      title: "do 200 dokumentów",
      price: "1900 zł",
    },
  ];
  return (
    <div className={style["info-block"]}>
      <div className={style["content-block"]}>
        <div className={style["content-block__content"]}>
          <span className={style["content-title"]}>
            Obsługa finansowo-księgowa -<br />
            Pełna księgowość
          </span>
          <div className={style["price-block"]}>
            {content.map((el) => (
              <div className={style["price-block__item"]}>
                <span className={style["item-title"]}>{el["title"]}</span>
                <span className={style["item-price"]}>{el["price"]}</span>
              </div>
            ))}
          </div>
          <span className={style["content-description"]}>
            Każde kolejne zwiększenie dokumentów - 10 zł (netto) za każdy
            dokument
          </span>
          <button className={style["content-btn"]}>
            Umów się na spotkanie
          </button>
        </div>
        <img src={first_info_block_image} alt="" />
      </div>
    </div>
  );
};

export default FirstInfoBlock;
