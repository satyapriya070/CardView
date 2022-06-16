import { createContext, useState } from "react";
export const CardDataContext = createContext();
const CardContextProvider = ({ children }) => {
  const [cardData, setCardData] = useState(null);
  const [closePopup,setClosePopup]=useState(null);
  const values = {
    setCardData, 
    cardData,
    closePopup,
    setClosePopup
  };

  return (
    <CardDataContext.Provider value={values}>
      {children}
    </CardDataContext.Provider>
  );
};

export default CardContextProvider;
