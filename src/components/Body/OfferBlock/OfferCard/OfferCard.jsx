import style from "./OfferCard.module.css";

const OfferCard = (props) => {
  return (
    <div className={style["card"]} id={props.id}>
      <div className={style["card-content"]}>
        <img src={props.icon} alt="" />
        <span className={style["card-content__title"]}>{props.title}</span>
        <span className={style["card-content__description"]}>{props.description}</span>
      </div>
    </div>
  );
};

export default OfferCard;
