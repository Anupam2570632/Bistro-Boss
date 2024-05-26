import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import useMenu from "../../../../hooks/useMenu";

const ManageItems = () => {
    const [menu, refetch, isPending] = useMenu()
    const axiosSecure = useAxiosSecure()

    if(isPending){
        return <>LOadin.....</>
    }

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
                const res = await axiosSecure.delete(`/menu/${id}`)
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
            <div className="sticky top-0 z-10 bg-white bg-opacity-85">
                <SectionTitle heading={'MANAGE ALL ITEMS'} message={'Hurry up!'} />
            </div>
            <div className="overflow-x-auto md:px-20 p-4 mx-auto">
                <h2 className="text-3xl py-4 font-bold text-[#131313]">Total Order : {menu?.length}</h2>
                <table className="table table-pin-rows">
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
                            <th className="uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menu?.map((cart, idx) => <tr key={cart._id}>
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
                                <button className="bg-[#D1A054] p-3 rounded-md text-white font-bold text-xl hover:bg-red-900 duration-200"><FaEdit /></button>
                            </th>
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

export default ManageItems;