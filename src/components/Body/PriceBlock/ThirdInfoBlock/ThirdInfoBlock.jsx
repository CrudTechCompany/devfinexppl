import style from "./ThirdInfoBlock.module.css";
import third_info_block_image from "../../../../assets/third_info_block_image.svg";

const ThirdInfoBlock = () => {
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
      price: "50 zł / pracownik ",
    },
    {
      title:
        "Zwolnienie pracownika (przygotowanie dokumentacji związanej ze zwolnieniem)",
      price: "50 zł / pracownik",
    },
  ];
  return (
    <div className={style["info-block"]}>
      <div className={style["content-block"]}>
        <div className={style["content-block__content"]}>
          <span className={style["content-title"]}>Usługi kadrowo-płacowe</span>
          <div className={style["content__services"]}>
            {content.map((el) => (
              <div className={style["service__item"]}>
                <span className={style["item__title"]}>{el["title"]}</span>
                <span className={style["item__price"]}>{el["price"]}</span>
              </div>
            ))}
          </div>
          <button className={style["content__btn"]}>
            Umów się na spotkanie
          </button>
        </div>
        <img src={third_info_block_image} alt="" />
      </div>
    </div>
  );
};

export default ThirdInfoBlock;
