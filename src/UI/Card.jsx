import React, { useState } from "react";
import { Flag, User } from "lucide-react";
const Card = ({
  player,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handelChoosePlayer = () => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(newCoin);
    } else {
      alert("Not enough coin to purchase this player");
      return;
    }
    alert(`${player.playerName} is selected`);
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers, player]);
  };

  return (
    <>
      <div
        key={player.id}
        className="card bg-base-100 w-full shadow-sm border border-gray-200"
      >
        <figure className="p-4">
          <img
            src={player.playerImage}
            alt={player.playerName}
            className="rounded-xl h-70 w-full object-cover"
          />
        </figure>
        <div className="card-body p-4 space-y-2">
          <h2 className="card-title flex items-center gap-2">
            <User size={20} />
            {player.playerName}
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-gray-500">
              <Flag size={18} />
              <p>{player.palyerCountry}</p>
            </div>
            <button className="btn btn-sm btn-ghost bg-gray-100">
              {player.bowlingStyle}
            </button>
          </div>
          <hr className="border-gray-100" />
          <div className="font-bold">Rating</div>
          <div className="flex justify-between items-center text-sm">
            <span className="font-semibold">Batting Style</span>
            <span className="text-gray-500">{player.battingStyle}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="font-semibold">Bowling Style</span>
            <span className="text-gray-500">{player.bowlingStyle}</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="font-bold">Price: ${player.price}</p>
            <button
              onClick={handelChoosePlayer}
              disabled={isSelected}
              className={`btn btn-sm ${isSelected == true ? "bg-[#E7FE29]" : "btn-outline"} hover:bg-[#E7FE29] hover:text-black`}
            >
              {isSelected == true ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
