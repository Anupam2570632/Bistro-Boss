import { FaTrashCan } from "react-icons/fa6";
import SectionTitle from "../../../../components/SectionTitle";
import useCart from "../../../../hooks/useCart";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [carts, refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = carts?.reduce((total, item) => total + item.price, 0);

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/carts/${id}`)
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                        timer: 1500
                    });
                }
            }
        });

    }


    return (
        <div>
            <SectionTitle heading={'wanna add more'} message={'My Cart'} />
            <div className="flex flex-col md:flex-row gap-3 items-center justify-evenly">
                <h2 className="text-3xl font-bold text-[#131313]">Total Order : {carts?.length}</h2>
                <h2 className="text-3xl font-bold text-[#131313]">Total Price : ${totalPrice}</h2>
                <Link to={'/dashboard/payment'}>
                    <button className="px-4 py-2 rounded-md bg-[#D1A054] text-white font-bold">PAY</button>
                </Link>
            </div>
            <div className="overflow-x-auto md:px-20 my-6 p-4 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#D1A054] text-white">
                            <th>
                                #
                            </th>
                            <th className="uppercase">Item Image</th>
                            <th className="uppercase">Item name</th>
                            <th className="uppercase">Price</th>
                            <th className="uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts?.map((cart, idx) => <tr key={cart._id}>
                            <th>
                                {idx + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-nowrap">
                                {cart.name}
                            </td>
                            <td className="text-nowrap">
                                ${cart.price}
                            </td>
                            <th>
                                <button onClick={() => handleDelete(cart._id)} className="bg-[#B91C1C] p-3 rounded-md text-white font-bold text-xl hover:bg-red-900 duration-200"><FaTrashCan /></button>
                            </th>
                        </tr>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;