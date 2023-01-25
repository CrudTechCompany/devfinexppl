import AboutUsBlock from "./AboutUsBlock/AboutUsBlock";
import BenefitBlock from "./BenefitBlock/BenefitBlock";
import style from "./Body.module.css";
import ContactBlock from "./ContactBlock/ContactBlock";
import HeadBlock from "./HeadBlock/HeadBlock";
import OfferBlock from "./OfferBlock/OfferBlock";
import PriceBlock from "./PriceBlock/PriceBlock";

const Body = (props) => {
  return (
    <div className={style["body"]}>
      <HeadBlock
        t={props.t}
        setContactFormState={props.setContactFormState}
      />
      <AboutUsBlock t={props.t} />
      <OfferBlock t={props.t} />
      <BenefitBlock t={props.t} />
      <PriceBlock
        t={props.t}
        setContactFormState={props.setContactFormState}
      />
      <ContactBlock t={props.t} changeLanguage={props.changeLanguage} />
    </div>
  );
};

export default Body;
