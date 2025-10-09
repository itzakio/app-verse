import React from 'react';
import errorImg from '../../assets/error-404.png';
import { Link } from 'react-router';

const PageNotFount = () => {
    return (
        <div className='h-screen px-4 flex flex-col justify-center items-center text-center gap-5'>
            <img className='w-1/3' src={errorImg} alt="" />

            <div className='space-y-2'>
                <h2 className='text-4xl font-semibold'>Oops, page not found!</h2>
                <p className='text-gray-500'>The page you are looking for is not available.</p>
                <Link to="/" className='btn bg-linear-to-r from-violet-600 to-violet-400  text-white '>Go Back</Link>
            </div>
        </div>
    );
};

export default PageNotFount;