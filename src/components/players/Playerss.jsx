import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Playerss = ({playersPromise}) => {
    const players = use(playersPromise)
   
    return (
        <>
        <div className='max-mx '>
            <div className='flex justify-between items-center mt-10 mb-6'>
                <p className='text-[28px] font-bold'>Available Players</p>
                <div className='flex rounded-sm overflow-hidden'>
                    <button className='btn btn-soft bg-[#E7FE29] border-0 rounded-none'>Available</button>
                    <button className='btn btn-soft border-0 rounded-none'>Selected</button>
                </div>
            </div>
          <AvailablePlayers players={players} ></AvailablePlayers>
        </div>
        </>
    );
};

export default Playerss;