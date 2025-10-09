import React from 'react';
import { Link } from 'react-router';

const NoAppInstalled = ({setSearch}) => {
    return (
        <div className='text-center space-y-10 my-32 col-span-full'>
            <h2 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-500'>No Apps Installed!</h2>
            <Link to="/apps"  className='btn bg-linear-to-r from-violet-600 to-violet-500 text-white'>Get Apps</Link>
        </div>
    );
};

export default NoAppInstalled;