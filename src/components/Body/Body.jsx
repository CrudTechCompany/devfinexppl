import style from "./Body.module.css";

const Body = (props)=>{
    return (
        <div className={style["body"]}>
            {props.children}
        </div>
    );
}

export default Body;