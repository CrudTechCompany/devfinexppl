import style from "./HeadBlock.module.css";
import head_block from "../../../assets/head_block.svg";

const HeadBlock = (props) => {
  return (
    <div className={style["block"]}>
      <div className={style["content"]}>
        <h1 className={style["title"]}>
          {props.t("head_block_title_1")}
          <br />
          <span>{props.t("head_block_title_2")}</span>
        </h1>
        <span className={style["description"]}>
          {props.t("head_block_description")}
        </span>
        <button onClick={props.setContactFormState}>{props.t("head_block_button")}</button>
      </div>
      <img src={head_block} alt="" />
    </div>
  );
};

export default HeadBlock;
