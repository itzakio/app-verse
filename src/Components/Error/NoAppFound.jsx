import React from 'react';
import { Link } from 'react-router';

const NoAppFound = ({setSearch}) => {
    return (
        <div className='text-center space-y-10 my-32 col-span-full'>
            <h2 className='text-6xl font-semibold text-gray-500'>No App Found!</h2>
            <button onClick={()=>setSearch("")} className='btn bg-linear-to-r from-violet-600 to-violet-500 text-white'>Show All Apps</button>
        </div>
    );
};

export default NoAppFound;