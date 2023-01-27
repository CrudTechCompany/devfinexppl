import style from "./OfferBlock.module.css";
import offer_1 from "../../../assets/offer_1.svg";
import offer_2 from "../../../assets/offer_2.svg";
import offer_3 from "../../../assets/offer_3.svg";
import offer_4 from "../../../assets/offer_4.svg";
import offer_5 from "../../../assets/offer_5.svg";
import offer_6 from "../../../assets/offer_6.svg";
import OfferCard from "./OfferCard/OfferCard";
import { useEffect, useState } from "react";

const OfferBlock = (props) => {
  const [nextButtonState, setNextButtonState] = useState(true);
  const [prevButtonState, setPrevButtonState] = useState(false);
  const onClickNextButton = (event) => {
    event.preventDefault();
    if (window.innerWidth > 820) {
      document.getElementById("scroll-block").scrollBy({
        left: 630,
        behavior: "smooth",
      });
    }
    if (window.innerWidth <= 820 && window.innerWidth > 480) {
      document.getElementById("scroll-block").scrollBy({
        left: 610,
        behavior: "smooth",
      });
    }
    if (window.innerWidth <= 480) {
      document
        .getElementById("scroll-block")
        .scrollBy({ left: 340, behavior: "smooth" });
    }
  };
  const onClickPrevButton = (event) => {
    event.preventDefault();
    if (window.innerWidth > 820) {
      document.getElementById("scroll-block").scrollBy({
        left: -630,
        behavior: "smooth",
      });
    }
    if (window.innerWidth <= 820 && window.innerWidth > 480) {
      document.getElementById("scroll-block").scrollBy({
        left: -610,
        behavior: "smooth",
      });
    }
    if (window.innerWidth <= 480) {
      document
        .getElementById("scroll-block")
        .scrollBy({ left: -340, behavior: "smooth" });
    }
  };
  const content = [
    {
      key: "offer_1",
      icon: offer_1,
      title: "Obsługa księgowa",
      description:
        "Zapewniamy kompleksową obsługę dla firm i spółek z każdej branży, niezależnie od skali i charakteru Państwa działalności. Outsourcing usług księgowych oferowanych przez nasze biuro rachunkowe to mierzalne korzyści dla Państwa biznesu.",
    },
    {
      key: "offer_2",
      icon: offer_2,
      title: "Kadry i płace",
      description:
        "Oferujemy Państwu pełen zakres outsourcingu usług płacowych i kadrowych, począwszy od wsparcia w zatrudnieniu pracownika, przygotowywanie dokumentów i bieżącą obsługę kadrową, poprzez naliczanie wynagrodzeń, aż do końcowego rozliczenia listy płac i raportowania.",
    },
    {
      key: "offer_3",
      icon: offer_3,
      title: "Sprawozdania finansowe",
      description:
        "Przygotowanie sprawozdań finansowych spółek, uwzględniające również obecne regulacje dyktowane przez zmiany w przepisach, jak e-sprawozdania i pliki JPK_SF. Usprawniamy także obszar raportowania i informacji zarządczej Państwa firmy.",
    },
    {
      key: "offer_4",
      icon: offer_4,
      title: "Rejestracja spółek",
      description:
        "Do zakresu naszych usług należy pomoc w założeniu firmy od porad prawno-podatkowych po rejestracje. Nasze wsparcie nie ogranicza się tylko do samego sporządzenia dokumentów, a jest przede wszystkim merytoryczną rozmową na temat Twoich potrzeb i przedstawieniem możliwości jaka dana forma prawna prowadzenia działalności oferuje.",
    },
    {
      key: "offer_5",
      icon: offer_5,
      title: "Aktualizacja KRS",
      description:
        "Decydując się na naszą pomoc w aktualizacji danych spółki w KRS mogą Państwo liczyć na pełne wsparcie oraz dopełnienie niezbędnych formalności aktualizacyjnych (np. zmiana siedziby spółki, zmiana adresu spółki, zmiana danych wspólników, zmiana nazwy spółki itp.).",
    },
    {
      key: "offer_6",
      icon: offer_6,
      title: "Wsparcie w czasie kontroli",
      description:
        "Bierzemy udział w postępowaniu kontrolnym, prowadzonym przez organy skarbowe, dotyczącym okresu prowadzenia przez Finance Expert ksiąg podatnika i odnoszącym się do tych czynności.",
    },
  ];
  useEffect(() => {
    document.getElementById("scroll-block").addEventListener("scroll", () => {
      console.log(document.getElementById("scroll-block").scrollLeft);
      console.log(document.getElementById("scroll-block").scrollWidth);
      if (window.innerWidth > 820) {
        if (document.getElementById("scroll-block").scrollLeft >= 2350) {
          setNextButtonState(false);
        } else {
          setNextButtonState(true);
        }
        if (document.getElementById("scroll-block").scrollLeft > 0) {
          setPrevButtonState(true);
        } else {
          setPrevButtonState(false);
        }
      }
      if (window.innerWidth > 480 && window.innerWidth <= 820) {
        if (document.getElementById("scroll-block").scrollLeft >= 2850) {
          setNextButtonState(false);
        } else {
          setNextButtonState(true);
        }
        if (document.getElementById("scroll-block").scrollLeft > 0) {
          setPrevButtonState(true);
        } else {
          setPrevButtonState(false);
        }
      }
      if (window.innerWidth <= 480) {
        if (document.getElementById("scroll-block").scrollLeft >= 1650) {
          setNextButtonState(false);
        } else {
          setNextButtonState(true);
        }
        if (document.getElementById("scroll-block").scrollLeft > 0) {
          setPrevButtonState(true);
        } else {
          setPrevButtonState(false);
        }
      }
    });
  });
  return (
    <div className={style["block"]} id="offer-block">
      <h3 className={style["title"]}>{props.t("offer_block_title")}</h3>
      <div className={style["content-block"]} id="scroll-block">
        <div className={style["content"]}>
          {content.map((el, index) => (
            <OfferCard
              key={el["key"]}
              icon={el["icon"]}
              title={
                index === 0
                  ? props.t("offer_card_first_title")
                  : index === 1
                  ? props.t("offer_card_second_title")
                  : index === 2
                  ? props.t("offer_card_third_title")
                  : index === 3
                  ? props.t("offer_card_fourth_title")
                  : index === 4
                  ? props.t("offer_card_fifth_title")
                  : index === 5
                  ? props.t("offer_card_sixth_title")
                  : el["title"]
              }
              description={
                index === 0
                  ? props.t("offer_card_first_description")
                  : index === 1
                  ? props.t("offer_card_second_description")
                  : index === 2
                  ? props.t("offer_card_third_description")
                  : index === 3
                  ? props.t("offer_card_fourth_description")
                  : index === 4
                  ? props.t("offer_card_fifth_description")
                  : index === 5
                  ? props.t("offer_card_sixth_description")
                  : el["description"]
              }
            />
          ))}
        </div>
      </div>
      <div className={style["nav-block"]}>
        <div className={style["nav-content"]} id="nav-content">
          <button onClick={prevButtonState ? onClickPrevButton : null}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.19531 14.5078L12.6328 6.0703C12.6974 6.00566 12.7742 5.95439 12.8586 5.91941C12.9431 5.88443 13.0336 5.86643 13.125 5.86643C13.2164 5.86643 13.3069 5.88443 13.3914 5.91941C13.4758 5.95439 13.5526 6.00566 13.6172 6.0703C13.6818 6.13494 13.7331 6.21167 13.7681 6.29612C13.8031 6.38057 13.8211 6.47108 13.8211 6.56249C13.8211 6.65389 13.8031 6.74441 13.7681 6.82886C13.7331 6.91331 13.6818 6.99004 13.6172 7.05467L6.38672 14.2969L25.3125 14.2969C25.499 14.2969 25.6778 14.3709 25.8097 14.5028C25.9415 14.6347 26.0156 14.8135 26.0156 15C26.0156 15.1865 25.9415 15.3653 25.8097 15.4972C25.6778 15.629 25.499 15.7031 25.3125 15.7031L6.38672 15.7031L13.6172 22.9453C13.7477 23.0758 13.8211 23.2529 13.8211 23.4375C13.8211 23.6221 13.7477 23.7991 13.6172 23.9297C13.4867 24.0602 13.3096 24.1335 13.125 24.1335C12.9404 24.1335 12.7633 24.0602 12.6328 23.9297L4.19531 15.4922C4.12866 15.4287 4.07559 15.3523 4.03933 15.2677C4.00307 15.1831 3.98438 15.092 3.98438 15C3.98438 14.9079 4.00307 14.8169 4.03933 14.7322C4.07559 14.6476 4.12866 14.5713 4.19531 14.5078Z"
                fill={prevButtonState ? "#282828" : "#D1D1D1"}
              />
            </svg>
          </button>
          <button onClick={nextButtonState ? onClickNextButton : null}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.8047 15.4922L17.3672 23.9297C17.3026 23.9943 17.2258 24.0456 17.1414 24.0806C17.0569 24.1156 16.9664 24.1336 16.875 24.1336C16.7836 24.1336 16.6931 24.1156 16.6086 24.0806C16.5242 24.0456 16.4474 23.9943 16.3828 23.9297C16.3182 23.8651 16.2669 23.7883 16.2319 23.7039C16.1969 23.6194 16.1789 23.5289 16.1789 23.4375C16.1789 23.3461 16.1969 23.2556 16.2319 23.1711C16.2669 23.0867 16.3182 23.01 16.3828 22.9453L23.6133 15.7031H4.6875C4.50102 15.7031 4.32218 15.6291 4.19032 15.4972C4.05845 15.3653 3.98438 15.1865 3.98438 15C3.98438 14.8135 4.05845 14.6347 4.19032 14.5028C4.32218 14.371 4.50102 14.2969 4.6875 14.2969H23.6133L16.3828 7.0547C16.2523 6.92416 16.1789 6.74712 16.1789 6.56251C16.1789 6.37791 16.2523 6.20086 16.3828 6.07033C16.5133 5.93979 16.6904 5.86646 16.875 5.86646C17.0596 5.86646 17.2367 5.93979 17.3672 6.07033L25.8047 14.5078C25.8713 14.5713 25.9244 14.6477 25.9607 14.7323C25.9969 14.8169 26.0156 14.908 26.0156 15C26.0156 15.0921 25.9969 15.1831 25.9607 15.2678C25.9244 15.3524 25.8713 15.4287 25.8047 15.4922Z"
                fill={nextButtonState ? "#282828" : "#D1D1D1"}
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferBlock;
