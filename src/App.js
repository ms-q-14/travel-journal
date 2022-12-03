import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import cardData from "./cardData";

export default function App() {
  const locations = cardData.map((location) => {
    return <Cards key={location.id} location={location} />;
  });

  return (
    <div className="App">
      <Header />
      {locations}
    </div>
  );
}
