import React from 'react';
import { Delete, User } from "lucide-react";
const selectedCard = ({player, handleDeleteSelecctedPlayer}) => {
    return (
            <div
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
};

export default selectedCard;