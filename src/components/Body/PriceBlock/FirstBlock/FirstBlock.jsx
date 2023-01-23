import style from "./FirstBlock.module.css";
import first_block from "../../../../assets/first_block.svg";

const FirstBlock = () => {
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
    <div className={style["block"]}>
      <div className={style["content-block"]}>
        <div className={style["content"]}>
          <span className={style["title"]}>
            Obsługa finansowo-księgowa - Pełna księgowość
          </span>
          <div className={style["item-block"]}>
            {content.map((el) => (
              <div className={style["item"]} key={el["title"]}>
                <span className={style["item__title"]}>{el["title"]}</span>
                <span className={style["item__description"]}>
                  {el["price"]}
                </span>
              </div>
            ))}
          </div>
          <span className={style["description"]}>
            Każde kolejne zwiększenie dokumentów - <span>10 zł</span> (netto) za
            każdy dokument
          </span>
          <button>Umów się na spotkanie</button>
        </div>
        <img src={first_block} alt="" />
      </div>
    </div>
  );
};

export default FirstBlock;
