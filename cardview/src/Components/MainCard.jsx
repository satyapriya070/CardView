import React, { useContext, useEffect, useState } from "react";
import { CardDataContext } from "../Context/CardContext";
import { CardApi } from "../dataLayer/CardApi";
import Card from "./Card/Card";
import "./Card/styles.css";
const MainCard = () => {
  const { setCardData } = useContext(CardDataContext);
  const getData = async () => {
    const data = await CardApi();
    setCardData(data)
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="MainCardSection">
      <Card />
    </div>
  );
};

export default MainCard;
