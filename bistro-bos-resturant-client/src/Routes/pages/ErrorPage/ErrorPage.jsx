import { Link } from 'react-router-dom';
import errorLogo from '../../../assets/404.gif'
import { IoMdHome } from "react-icons/io";

const ErrorPage = () => {
    return (
        <div>
            <img className='mx-auto' src={errorLogo} alt="" />
            <Link to={'/'}>
                <button style={{ background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)" }} className='flex gap-1 px-6 mx-auto text-[20px] py-3 text-white items-center font-bold'>
                    Back To Home <IoMdHome />
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;