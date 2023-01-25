import style from "./FourthBlock.module.css";

const FourthBlock = (props) => {
  const content = [
    {
      title: "Przygotowanie PIT-11",
      description: null,
      price: "50 zł / pracownik",
    },
    {
      title: "Sporządzanie i wysyłka deklaracji",
      description:
        "Sporządzanie i wysyłka deklaracji osób prowadzących JDG oraz wspólników spółek",
      price: "50 zł przedsiębiorca / wspólnik",
    },
    {
      title: "Polityka rachunkowości",
      description: "Klient może sam dostarczyć politykę rachunkowości",
      price: "1000 zł",
    },
    {
      title: "Rejestracja do VAT",
      description: null,
      price: "200 zł",
    },
    {
      title: "Sprawozdanie roczne",
      description: null,
      price:
        "Jedno średniomiesięczne wynagrodzenie za usługi finansowo–księgowe i kadrowo – płacowe z danego roku obrachunkowego jednak nie mniej niż 1.000,00 zł",
    },
    {
      title: "Pozostałe czynności",
      description: "",
      price: "200 zł / h",
    },
  ];
  return (
    <div className={style["block"]}>
      <div className={style["content-block"]}>
        {content.map((el, index) => (
          <div className={style["item"]} key={el["title"]}>
            <div className={style["item-block"]}>
              <div className={style["title-block"]}>
                <span className={style["item__title"]}>
                  {index === 0
                    ? props.t("price_block_fourth_item_first_title")
                    : index === 1
                    ? props.t("price_block_fourth_item_second_title")
                    : index === 2
                    ? props.t("price_block_fourth_item_third_title")
                    : index === 3
                    ? props.t("price_block_fourth_item_fourth_title")
                    : index === 4
                    ? props.t("price_block_fourth_item_fifth_title")
                    : props.t("price_block_fourth_item_sixth_title")}
                </span>
                {el["description"] != null && (
                  <span className={style["item__description"]}>
                    {index === 1
                      ? props.t("price_block_fourth_item_second_description")
                      : props.t("price_block_fourth_item_third_description")}
                  </span>
                )}
              </div>
              <span
                className={style["item__price"]}
                style={{
                  color: index === 4 ? "#282828" : "#34A573",
                }}
              >
                {index === 0
                  ? props.t("price_block_fourth_item_first_price")
                  : index === 1
                  ? props.t("price_block_fourth_item_second_price")
                  : index === 2
                  ? props.t("price_block_fourth_item_third_price")
                  : index === 3
                  ? props.t("price_block_fourth_item_fourth_price")
                  : index === 4
                  ? props.t("price_block_fourth_item_fifth_price")
                  : props.t("price_block_fourth_item_sixth_price")}
              </span>
            </div>
            <button onClick={props.setContactFormState}>
              {props.t("price_block_contact_button")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourthBlock;
