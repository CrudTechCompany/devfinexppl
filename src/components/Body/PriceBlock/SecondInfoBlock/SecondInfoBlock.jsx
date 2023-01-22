import style from "./SecondInfoBlock.module.css";
import second_info_block_image from "../../../../assets/second_info_block_image.svg";

const SecondInfoBlock = () => {
  const content = [
    {
      title: "do 10 dokumentów",
      price: "300 zł",
    },
    {
      title: "do 30 dokumentów",
      price: "400 zł",
    },
    {
      title: "do 70 dokumentów",
      price: "500 zł",
    },
    {
      title: "do 100 dokumentów",
      price: "600 zł",
    },
    {
      title: "do 150 dokumentów",
      price: "800 zł",
    },
    {
      title: "do 200 dokumentów",
      price: "1000 zł",
    },
    {
      title: "do 300 dokumentów",
      price: "1250 zł",
    },
    {
      title: "do 400 dokumentów",
      price: "1500 zł",
    },
  ];
  return (
    <div className={style["info-block"]}>
      <div className={style["content-block"]}>
        <img src={second_info_block_image} alt="" />
        <div className={style["content-block__content"]}>
          <span className={style["content-title"]}>
            Obsługa finansowo-księgowa - KPIR
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
            Każde kolejne zwiększenie dokumentów - <span>5 zł</span> (netto) za każdy
            dokument
          </span>
          <button className={style["content-btn"]}>
            Umów się na spotkanie
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondInfoBlock;
