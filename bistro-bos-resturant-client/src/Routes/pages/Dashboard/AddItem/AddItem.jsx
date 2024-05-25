import { FaUtensils } from "react-icons/fa6";
import SectionTitle from "../../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const image_hosting_key = import.meta.env.VITE_imgbb_hosting_key;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItem = () => {
    const [image, setImage] = useState('')
    const axiosSecure = useAxiosSecure()

    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = async (data) => {
        const name = data.name;
        const recipe = data.recipe;
        const category = data.category;
        const price = parseFloat(data.price)

        const imgFile = { image: data.image[0] };
        const res = await axios.post(image_hosting_url, imgFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const image = res.data.data.display_url;
        if (res.data.success) {
            const menu = {
                name,
                recipe,
                category,
                price,
                image
            }

            const res = await axiosSecure.post('/menu', menu)
            if (res.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item added successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <div>
            <SectionTitle heading={'ADD AN ITEM'} message={"What's new?"} />
            <div className="p-4 md:px-20">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name *</span>
                        </div>
                        <input {...register('name', { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                    </label>
                    <div className="flex gap-6 items-center">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category *</span>
                            </div>
                            <select {...register('category', { required: true })} defaultValue={''} className="select select-bordered">
                                <option disabled value={''}>Category</option>
                                <option value={'salad'}>Salad</option>
                                <option value={'pizza'}>Pizza</option>
                                <option value={'soup'}>Soup</option>
                                <option value={'dessert'}>Dessert</option>
                                <option value={'drinks'}>Drinks</option>
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price *</span>
                            </div>
                            <input {...register('price', { required: true })} type="number" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details *</span>
                        </div>
                        <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>
                    <div className="flex items-end gap-4">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">No file chosen</span>
                            </div>
                            <input {...register('image', { required: true })} onChange={handleChangeImage} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </label>
                        <div>
                            {
                                image ?
                                    <img className="h-16 rounded-md" src={URL.createObjectURL(image)} alt="select" />
                                    :
                                    <LuImagePlus className="text-[64px]" />
                            }
                        </div>
                    </div>
                    <button type="submit" style={{ background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)" }} className='flex gap-1 px-6 text-[20px] py-3 text-white items-center font-bold'>
                        Add Item <FaUtensils />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;