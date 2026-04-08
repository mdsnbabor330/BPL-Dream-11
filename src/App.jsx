import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Players from "./components/players/Players";
import Footer from "./components/Footer/Footer";
import { Suspense, useState } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();
  const [coin, setCoin] = useState(1000000);
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner setCoin={setCoin}></Banner>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-secondary"></span>
        }
      >
        <Players
          playersPromise={playersPromise}
          setCoin={setCoin}
          coin={coin}
        ></Players>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
