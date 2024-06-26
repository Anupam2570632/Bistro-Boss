import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import axios from 'axios'
import loginBg from '../../../assets/reservation/wood-grain-pattern-gray1x.png'
import authenticationImg from '../../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
const image_hosting_key = import.meta.env.VITE_imgbb_hosting_key;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
    const axiosPublic = useAxiosPublic()
    const { createUser, logOut, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        console.log(data.photoURL[0])
        const email = data.email;
        const password = data.password;
        const displayName = data.name;
        const imgFile = { image: data.photoURL[0] };

        const res = await axios.post(image_hosting_url, imgFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const photoURL = res.data.data.display_url
            createUser(email, password)
                .then((result) => {
                    console.log(result)
                    updateUserProfile(displayName, photoURL)
                        .then(() => {
                            const userInfo = {
                                name: data.name,
                                email: data.email
                            }
                            axiosPublic.post('/users', userInfo)
                                .then(res => {

                                    if (res.data.insertedId) {
                                        logOut()

                                        Swal.fire({
                                            position: "top-end",
                                            icon: "success",
                                            title: "Account created successfully!",
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                        navigate('/login')
                                    }
                                })
                        })
                })
                .catch(err => {
                    console.error(err)
                })

        }
    };



    return (
        <div className='min-h-screen min-w-screen m-0 flex items-center justify-center' style={{ backgroundImage: `url(${loginBg})` }}>
            <div className='w-11/12 md:w-4/5 mx-auto shadow-2xl flex flex-col-reverse md:flex-row items-center justify-center' style={{ backgroundImage: `url(${loginBg})` }}>
                <div>
                    <img src={authenticationImg} alt="" />
                </div>
                <div>
                    <div className="w-[350px] md:min-w-[530px]">
                        <div className="hero-content flex-col">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Sign Up</h1>
                            </div>
                            <div className="card shrink-0 w-full max-w-sm">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" {...register('name', { required: true })} placeholder="Name" className="input input-bordered" required />
                                    </div>
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
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text">Pick a file</span>
                                        </div>
                                        <input {...register('photoURL')} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                    </label>

                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn text-white btn-block bg-[#D1A054B2] hover:bg-[#D1A054a8]">Sign Up</button>
                                    </div>
                                </form>
                                <div className='text-[#D1A054] text-center'>
                                    Already registered? <Link className='font-bold' to={'/login'}>Go to log in</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;