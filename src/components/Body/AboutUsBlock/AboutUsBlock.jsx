import style from "./AboutUsBlock.module.css";
import about_us_block from "../../../assets/about_us_block.svg";

const AboutUsBlock = () => {
  return (
    <div className={style["block"]} id="about-block">
      <div className={style["block-margin"]}/>
      <div className={style["about-us-block"]}>
        <div className={style["about-us-block__content"]}>
          <img src={about_us_block} alt="" />
          <div className={style["content-block"]}>
            <span className={style["content-block__title"]}>
              O Finance <span>Expert</span>
            </span>
            <span className={style["content-block__description"]}>
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
            <div className={style["count-block"]}>
              <div className={style["count-block__documents"]}>
                <span className={style["count-block-item__title"]}>
                  lat doświadczenia
                </span>
                <div className={style["separator"]} />
                <span className={style["counter"]}>5 +</span>
              </div>
              <div className={style["count-block__documents"]}>
                <span className={style["count-block-item__title"]}>
                  klientów
                </span>
                <div className={style["separator"]} />
                <span className={style["counter"]}>130 +</span>
              </div>
              <div className={style["count-block__documents"]}>
                <span className={style["count-block-item__title"]}>
                  dokumentów miesięcznie
                </span>
                <div className={style["separator"]} />
                <span className={style["counter"]}>2300 +</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBlock;
