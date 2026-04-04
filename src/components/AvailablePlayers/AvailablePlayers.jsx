import React from "react";
import Card from "../../UI/Card";

const AvailablePlayers = ({
  players,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-40">
        {players?.map((player) => {
          return (
            <Card
              key={player.id}
              player={player}
              setCoin={setCoin}
              coin={coin}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
            ></Card>
          );
        })}
      </div>
    </>
  );
};

export default AvailablePlayers;
