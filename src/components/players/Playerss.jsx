import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../selectedPlayers/SelectedPlayers";

const Playerss = ({ playersPromise, setCoin, coin }) => {
  const players = use(playersPromise);
  const [selectedType, setselectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <>
      <div className="max-mx transition-shadow">
        <div className="flex justify-between items-center mt-10 mb-6">
          {selectedType == "available" ? (
            <p className="text-[28px] font-bold">Available Players</p>
          ) : (
            <p className="text-[28px] font-bold">
              Selected Players ({selectedPlayers.length}/{players.length})
            </p>
          )}
          <div className="flex rounded-sm overflow-hidden">
            <button
              onClick={() => setselectedType("available")}
              className={`btn ${selectedType == "available" ? "bg-[#E7FE29]" : "btn-soft"}  border-0 rounded-none`}
            >
              Available
            </button>
            <button
              onClick={() => setselectedType("selected")}
              className={`btn ${selectedType == "selected" ? "bg-[#E7FE29]" : "btn-soft"}  border-0 rounded-none`}
            >
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>
        {selectedType == "available" ? (
          <AvailablePlayers
            players={players}
            setCoin={setCoin}
            coin={coin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></AvailablePlayers>
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></SelectedPlayers>
        )}
      </div>
    </>
  );
};

export default Playerss;
