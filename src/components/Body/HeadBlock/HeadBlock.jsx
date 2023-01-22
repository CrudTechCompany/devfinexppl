import style from "./HeadBlock.module.css";
import head_block_image from "../../../assets/head_block.svg";

const HeadBlock = () => {
  return (
    <div className={style["head-block"]}>
      <div className={style["head-block__content"]}>
        <h1>
          Biuro rachunkowe
          <br />
          <span className={style["head-block__content_br"]}>dla przedsiębiorców</span>
        </h1>
        <span className={style["head-block__description"]}>
          Profesjonalna obsługa księgowa. Pracujemy na terenie całej Polski
        </span>
        <button className={style["head-block__btn"]}>Zapytaj o ofertę</button>
      </div>
      <img src={head_block_image} alt="" />
    </div>
  );
};

export default HeadBlock;
