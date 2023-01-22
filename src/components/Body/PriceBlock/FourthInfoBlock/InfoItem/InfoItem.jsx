import style from "./InfoItem.module.css";

const InfoItem = (props) => {
  return (
    <div className={style["info-item"]}>
      <div className={style["title-block"]}>
        <div className={style["item-title-block"]}>
          <span className={style["title-block__title"]}>{props.title}</span>
          {props.description.trim() === "" || (
            <span className={style["title-block__description"]}>
              {props.description}
            </span>
          )}
        </div>
        <span
          className={style["title-block__price"]}
          style={props.index === 4 ? { fontSize: 16, color: "#282828" } : {}}
        >
          {props.price}
        </span>
      </div>
      <button className={style["info-item__btn"]}>Umów się na spotkanie</button>
    </div>
  );
};

export default InfoItem;
