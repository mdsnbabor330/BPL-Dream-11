
import React from "react";
import { toast } from 'react-toastify';
import SelectedCard from "../../UI/selectedCard";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers }) => {
  const handleDeleteSelecctedPlayer = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectplayer) => selectplayer.id !== player.id,
    );
    setSelectedPlayers(filteredPlayers);
    toast.warning(`${player.playerName} is deleted`);
  };

  return (
    <div className="space-y-5">
      {selectedPlayers.length === 0 ? (
        <div className="py-20 text-center space-y-2 rounded-xl border-2 border-base-200 shadow-xl">
          <h2 className="text-[20px] text-gray-900 font-bold">
            No Player selected yet
          </h2>
          <p className=" text-gray-600">Go to Available tab to select players</p>
        </div>
      ) : (
        selectedPlayers.map((player) => {
          return (
            <SelectedCard player={player} handleDeleteSelecctedPlayer={handleDeleteSelecctedPlayer} 
            key={player.id}></SelectedCard>
          );
        })
      )}
    </div>
  );
};

export default SelectedPlayers;
