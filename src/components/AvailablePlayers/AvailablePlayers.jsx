import { Flag, User } from "lucide-react";
import React from "react";

const AvailablePlayers = ({players}) => {
  return (
    <>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
      {
        players?.map((player)=>{
          return(
            <div key={player.id} className="card bg-base-100 w-full shadow-sm border border-gray-200">
             <figure className="p-4">
               <img src={player.playerImage} alt={player.playerName} className="rounded-xl h-70 w-full object-cover" />
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
                 <button className="btn btn-sm btn-ghost bg-gray-100">{player.bowlingStyle}</button>
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
                 <button className="btn btn-outline btn-sm hover:bg-[#E7FE29] hover:text-black">Choose Player</button>
               </div>
             </div>
           </div>
          )
        })
      }
    </div>
    </>
  )
}

      

export default AvailablePlayers;
