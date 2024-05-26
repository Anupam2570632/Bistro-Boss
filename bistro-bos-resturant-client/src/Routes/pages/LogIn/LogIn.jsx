import loginBg from '../../../assets/reservation/wood-grain-pattern-gray1x.png'
import authenticationImg from '../../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const LogIn = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation()
    const [disabled, setDisabled] = useState(true)
    const captchaRef = useRef()

    const { googleLogin, logInWithEmailAndPassword } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        logInWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User logged In successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: "Oops...",
                    text: err.message,
                });
            })
    };

    const handleGoogleLogIn = () => {
        googleLogin()
            .then(result => {

                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User logged In successfully!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                        navigate(location?.state ? location.state : '/');
                    })

                console.log(result.user)
            })
            .catch(error => console.error(error))
    }

    const handleValidateCaptcha = e => {
        e.preventDefault()
        const userCaptcha = captchaRef.current.value;
        if (validateCaptcha(userCaptcha)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    useEffect(() => {

        loadCaptchaEnginge(6);
    }, [])


    return (
        <div className='min-h-screen min-w-screen flex items-center justify-center' style={{ backgroundImage: `url(${loginBg})` }}>
            <div className='w-11/12 md:w-4/5 mx-auto shadow-2xl flex flex-col-reverse md:flex-row items-center justify-center' style={{ backgroundImage: `url(${loginBg})` }}>
                <div>
                    <img src={authenticationImg} alt="" />
                </div>
                <div>
                    <button onClick={handleGoogleLogIn} className='btn  btn-circle btn-ghost'>Google</button>
                    <div className="w-[350px] md:min-w-[530px]">
                        <div className="hero-content flex-col">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Login</h1>
                            </div>
                            <div className="card shrink-0 w-full max-w-sm">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" {...register('email', { required: true })} placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" {...register('password', { required: true })} placeholder="password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <LoadCanvasTemplate />
                                        </label>
                                        <input ref={captchaRef} type="text" placeholder="Captcha" className="input input-bordered" required />
                                        <button onClick={handleValidateCaptcha} className='btn btn-outline w-fit my-2 btn-xs'>Validate</button>
                                    </div>

                                    <div className="form-control mt-6">
                                        <button disabled={disabled} type='submit' className="btn text-white btn-block bg-[#D1A054B2] hover:bg-[#D1A054a8]">Sign In</button>
                                    </div>
                                </form>
                                <div className='text-[#D1A054] text-center'>
                                    New here? <Link className='font-bold' to={'/register'}>Create a New Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;