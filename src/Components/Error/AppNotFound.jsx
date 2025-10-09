import noAppFoundImg from '../../assets/App-Error.png';
import { Link } from 'react-router';

const AppNotFound = () => {
    return (
        <div className='h-screen px-4 flex flex-col justify-center items-center text-center gap-5'>
            <img className='w-1/3' src={noAppFoundImg} alt="" />

            <div className='space-y-2'>
                <h2 className='text-4xl font-semibold'>OPPS!! APP NOT FOUND</h2>
                <p className='text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to="/apps" className='btn bg-linear-to-r from-violet-600 to-violet-400  text-white '>Go Back</Link>
            </div>
        </div>
    );
};

export default AppNotFound;