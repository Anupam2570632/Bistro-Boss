import { FaUtensils } from "react-icons/fa6";
import SectionTitle from "../../../../components/SectionTitle";

const AddItem = () => {
    return (
        <div>
            <SectionTitle heading={'ADD AN ITEM'} message={"What's new?"} />
            <div className="p-4 md:px-20">
                <form className="space-y-6">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">What is your name?</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </label>
                    <div className="flex gap-6 items-center">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Pick the best fantasy franchise</span>
                            </div>
                            <select defaultValue={''} className="select select-bordered">
                                <option disabled value={''}>Pick one</option>
                                <option value={'salad'}>Salad</option>
                                <option value={'pizza'}>Pizza</option>
                                <option value={'soup'}>Soup</option>
                                <option value={'dessert'}>Dessert</option>
                                <option value={'drinks'}>Drinks</option>
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">What is your name?</span>
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Your bio</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </label>

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Pick a file</span>
                        </div>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </label>
                    <button style={{ background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)" }} className='flex gap-1 px-6 text-[20px] py-3 text-white items-center font-bold'>
                    Add Item <FaUtensils/>
                </button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;