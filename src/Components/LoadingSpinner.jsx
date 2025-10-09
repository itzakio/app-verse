import logoImg from "/appverse-logo.png"

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex relative'>
                <img className='w-24 mx-auto animate-ping absolute top-0 left-0' src={logoImg} alt="loading" />
            <img className='w-24 mx-auto ' src={logoImg} alt="loading" />
            </div>
        </div>
    );
};

export default LoadingSpinner;