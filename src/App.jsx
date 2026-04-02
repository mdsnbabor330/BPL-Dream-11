import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Players from "./components/players/Playerss";
import { Suspense } from "react";

const fetchPlayers = async()=>{
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Suspense fallback={<span className="loading loading-spinner text-secondary"></span>}>
      <Players playersPromise={playersPromise}></Players>
     </Suspense>
     
    
     
    </>
  );
}

export default App;
