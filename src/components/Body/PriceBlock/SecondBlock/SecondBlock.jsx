import style from "./SecondBlock.module.css";
import second_block from "../../../../assets/second_block.svg";

const SecondBlock = () => {
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
    <div className={style["block"]}>
      <div className={style["content-block"]}>
        <img src={second_block} alt="" />
        <div className={style["content"]}>
          <span className={style["title"]}>
            Obsługa finansowo-księgowa - KPIR
          </span>
          <div className={style["item-block"]}>
            {content.map((el) => (
              <div className={style["item"]} key={el["title"]}>
                <span className={style["item__title"]}>{el["title"]}</span>
                <span className={style["item__price"]}>{el["price"]}</span>
              </div>
            ))}
          </div>
          <span className={style["description"]}>
            Każde kolejne zwiększenie dokumentów - <span>5 zł</span> (netto) za
            każdy dokument
          </span>
          <button>Umów się na spotkanie</button>
        </div>
      </div>
    </div>
  );
};

export default SecondBlock;
