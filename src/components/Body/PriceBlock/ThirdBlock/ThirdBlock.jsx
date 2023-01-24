import style from "./ThirdBlock.module.css";
import third_block from "../../../../assets/third_block.svg";

const ThirdBlock = (props) => {
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
          <span className={style["title"]}>Usługi kadrowo-płacowe</span>
          <div className={style["item-block"]}>
            {content.map((el) => (
              <div className={style["item"]} key={el["title"]}>
                <span className={style["item__title"]}>{el["title"]}</span>
                <span className={style["item__price"]}>{el["price"]}</span>
              </div>
            ))}
          </div>
          <button onClick={props.setContactFormState}>Umów się na spotkanie</button>
        </div>
        <img src={third_block} alt="" />
      </div>
    </div>
  );
};

export default ThirdBlock;
