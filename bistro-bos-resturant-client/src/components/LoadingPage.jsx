import loadingImg from '../assets/others/loader3.gif'

const LoadingPage = () => {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div>
                <img src={loadingImg} alt="" />
            </div>
        </div>
    );
};

export default LoadingPage;