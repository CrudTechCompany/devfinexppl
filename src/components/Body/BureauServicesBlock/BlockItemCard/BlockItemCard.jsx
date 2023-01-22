import style from "./BlockItemCard.module.css";

const BlockItemCard = (props) => {
  return (
    <div className={style["card-block"]}>
      <div className={style["card-content"]}>
        <img src={props.icon} alt="" />
        <span className={style["card-block__title"]}>{props.title}</span>
        <span className={style["card-block__description"]}>
          {props.description}
        </span>
      </div>
    </div>
  );
};

export default BlockItemCard;
