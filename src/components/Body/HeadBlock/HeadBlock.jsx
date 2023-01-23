import style from "./HeadBlock.module.css";
import head_block from "../../../assets/head_block.svg";

const HeadBlock = (props) => {
  return (
    <div className={style["block"]}>
      <div className={style["content"]}>
        <h1 className={style["title"]}>
          Biuro rachunkowe
          <br />
          <span>dla przedsiębiorców</span>
        </h1>
        <span className={style["description"]}>
          Profesjonalna obsługa księgowa. Pracujemy na terenie całej Polski
        </span>
        <button onClick={props.setContactFormState}>Zapytaj o ofertę</button>
      </div>
      <img src={head_block} alt="" />
    </div>
  );
};

export default HeadBlock;
