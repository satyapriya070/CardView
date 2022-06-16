import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { CardDataContext } from "../../Context/CardContext";
import Article from "./Article";
import "./styles.css";

const Popup = (props) => {
  const { closePopup ,setClosePopup} = useContext(CardDataContext);


  return (
    <div >
      <ReactModal isOpen={closePopup}>
        <div className="closeBtn" onClick={()=>setClosePopup(false)}>
          X
        </div>
        <div style={{pointerEvents: "none"}}>
        <Article getData={props.getData} data={props.data} />
        </div>
      </ReactModal>
    </div>
  );
};

export default Popup;
