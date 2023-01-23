import style from "./AboutUsBlock.module.css";
import about_block from "../../../assets/about_block.svg";

const AboutUsBlock = () => {
  const content = [
    {
      title: "lat doświadczenia",
      count: "5 +",
    },
    {
      title: "klientów",
      count: "130 +",
    },
    {
      title: "dokumentów miesięcznie",
      count: "2300 +",
    },
  ];
  return (
    <div className={style["block"]} id="about-block">
      <div className={style["content-block"]}>
        <div className={style["content"]}>
          <img src={about_block} alt="" />
          <div className={style["content__content"]}>
            <h3 className={style["title"]}>
              O Finance <span>Expert</span>
            </h3>
            <span className={style["description"]}>
              Finance Expert oferuje kompleksowe usługi księgowe oraz usługi
              kadrowe i doradcze dla firm. Nasi pracownicy posiadają należyte
              doświadczenie i szkolenia w obrębie swoich kwalifikacji tak, by
              nie bali się Państwo im zaufać i bez obaw zlecili prowadzenie
              księgowości. Obserwujemy na bieżąco zmieniający się rynek oraz
              prawo, dlatego proponowane przez nas rozwiązania oraz prowadzona
              księgowość są zawsze zgodne z obowiązującymi normami i
              najkorzystniejsze dla klienta. Swoje usługi świadczymy również
              zdalnie – współpraca z klientami z całej Polski.
            </span>
            <div className={style["statistics-block"]}>
              {content.map((el) => (
                <div className={style["statistics__item"]} key={el["title"]}>
                  <span className={style["statistics__title"]}>
                    {el["title"]}
                  </span>
                  <div className={style["separator"]} />
                  <span className={style["count"]}>{el["count"]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBlock;
