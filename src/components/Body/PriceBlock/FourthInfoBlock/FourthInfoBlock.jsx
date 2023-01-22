import style from "./FourthInfoBlock.module.css";
import InfoItem from "./InfoItem/InfoItem";

const FourthInfoBlock = () => {
  const content = [
    {
      title: "Przygotowanie PIT-11",
      description: "",
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
      description: "",
      price: "200 zł",
    },
    {
      title: "Sprawozdanie roczne",
      description: "",
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
    <div className={style["info-block"]}>
      <div className={style["content-block"]}>
        {content.map((el, index) => (
          <InfoItem
            index = {index}
            title={el["title"]}
            description={el["description"]}
            price={el["price"]}
          />
        ))}
      </div>
    </div>
  );
};

export default FourthInfoBlock;
