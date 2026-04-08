import React from 'react';
import { Trash2, User } from "lucide-react";

const SelectedCard = ({ player, handleDeleteSelectedPlayer }) => {
  return (
    <div className="p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between bg-white">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden flex items-center rounded-lg bg-gray-50 border border-gray-100">
          <img
            src={player.playerImage}
            alt={player.playerName}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">{player.playerName}</h3>
          <p className="text-gray-500 text-sm">{player.playerType}</p>
          <p className="text-gray-800 font-medium text-sm mt-1">${player.price}</p>
        </div>
      </div>
      <button
        className="btn btn-ghost text-red-500 hover:bg-red-50 p-2 h-auto min-h-0 rounded-lg"
        onClick={() => handleDeleteSelectedPlayer(player)}
      >
        <Trash2 size={24} />
      </button>
    </div>
  );
};

export default SelectedCard;