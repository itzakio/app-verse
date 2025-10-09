import millify from 'millify';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';


const InstalledAppCard = ({app, uninstallHandler}) => {
    const {id,image, title, ratingAvg, downloads, size} = app
    return (
        <div className='bg-white p-4 rounded-lg flex justify-between items-center'>
            <div className=' flex items-center gap-4'>
                <img className='w-20 rounded-lg border' src={image} alt="" />
                <div className='flex flex-col gap-4 '>
                    <h1 className='text-xl font-medium'>{title}</h1>
                    <div className='flex flex-col md:flex-row gap-1 xl:gap-6'>
                        <p className="  rounded font-medium text-green-500 flex gap-2 items-center"><FiDownload /> {millify(downloads, { precision: 1 })}</p>
                         <p className=" rounded font-medium text-yellow-500 flex gap-2 items-center"><FaStar /> {ratingAvg}</p>
                         <p className='text-gray-500'>{size} MB</p>
                    </div>
                </div>
            </div>
            <button onClick={()=>uninstallHandler(id, title)} className="btn w-fit bg-green-500 text-white">
                        Uninstall
            </button>
        </div>
    );
};

export default InstalledAppCard;