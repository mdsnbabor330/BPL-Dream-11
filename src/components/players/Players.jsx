import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../selectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  const players = use(playersPromise);
  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <>
      <div className="max-mx transition-shadow min-h-screen">
        <div className="flex justify-between items-center mt-10 mb-6">
          {selectedType == "available" ? (
            <p className="text-[28px] font-bold">Available Players</p>
          ) : (
            <p className="text-[28px] font-bold">
              Selected Players ({selectedPlayers.length}/6)
            </p>
          )}
          <div className="flex rounded-sm overflow-hidden border border-gray-100">
            <button
              onClick={() => setSelectedType("available")}
              className={`btn ${selectedType == "available" ? "bg-[#E7FE29] font-bold" : "btn-ghost"}  border-0 rounded-none`}
            >
              Available
            </button>
            <button
              onClick={() => setSelectedType("selected")}
              className={`btn ${selectedType == "selected" ? "bg-[#E7FE29] font-bold" : "btn-ghost"}  border-0 rounded-none`}
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
          <div className="space-y-6">
            <SelectedPlayers
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
            ></SelectedPlayers>
          </div>
        )}
      </div>
    </>
  );
};

export default Players;
