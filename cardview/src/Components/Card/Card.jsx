import React, { useContext, useState } from "react";
import { CardDataContext } from "../../Context/CardContext";
import Popup from "./popup";
import "./styles.css";
import Article from "./Article";
const Card = () => {
  const { cardData ,setClosePopup } = useContext(CardDataContext);
  const [poupData, setPopupData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  console.log(cardData);
  const getData = (e, ele) => {
    setPopupData(ele);
    setClosePopup(true);
    console.log("ele", ele);
  };
  return (
    <>
      <main className="main-area">
        <div>
          <section className="cards">
            {cardData?.map((ele, id) => (
              <Article getData={getData} data={ele} />
            ))}
            <div className="popup">
              <Popup data={poupData} getData={getData} openModal={openModal} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Card;
