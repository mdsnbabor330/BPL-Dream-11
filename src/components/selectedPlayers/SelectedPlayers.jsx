import { Delete, User } from "lucide-react";
import React from "react";
import { toast } from 'react-toastify';

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
            <div
              key={player.id}
              className=" p-5 rounded-2xl border-2 shadow-xl flex items-center justify-between"
            >
            <div className="flex items-center justify-center gap-4 ">
              <div className=" h-30 w-30 overflow-hidden flex items-center rounded-2xl">
                <img
                  src={player.playerImage}
                  alt=""
                  className="scale-180 bg-center"
                />
              </div>
              <div className="space-y-4">
                <div className="flex gap-2 items-center">
                  <User />
                  <p className="font-bold text-[18px]">{player.playerName}</p>
                </div>
                <p>{player.playerType}</p>
              </div>
            </div>
            <button
              className="btn h-15 shadow-sm border border-gray-200"
              onClick={() => handleDeleteSelecctedPlayer(player)}
            >
              <Delete />
            </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SelectedPlayers;
