import "./App.css";
import CardContextProvider from "./Context/CardContext";
import MainCard from "./Components/MainCard";

function App() {
  return (
    <div className="App">
      <CardContextProvider>
        <MainCard />
      </CardContextProvider>
    </div>
  );
}

export default App;
