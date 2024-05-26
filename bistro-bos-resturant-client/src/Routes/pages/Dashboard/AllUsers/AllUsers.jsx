import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../components/SectionTitle";
import { FaTrashCan, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin = (id, name) => {
        Swal.fire({
            title: `Are you sure want to make ${name} an Admin?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/user/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: `${name} is now an Admin`,
                                text: "Your file has been deleted.",
                                icon: "success",
                                timer: 1500
                            });
                        }
                    })

            }
        });
    }

    console.log(users)
    return (
        <div>
            <SectionTitle heading={'MANAGE ALL USERS'} message={'How many?'} />
            <div>
                <div className="overflow-x-auto md:px-20 p-4">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white uppercase rounded-t-[14px]">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, idx) => <tr key={user._id} className="bg-base-200">
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role == 'admin' ? 'Admin' :
                                                <button onClick={() => handleMakeAdmin(user._id, user.name)} className="bg-[#D1A054] p-3 rounded-md text-white font-bold text-xl hover:bg-red-900 duration-200"><FaUsers /></button>

                                        }
                                    </td>
                                    <td>
                                        <button className="bg-[#B91C1C] p-3 rounded-md text-white font-bold text-xl hover:bg-red-900 duration-200"><FaTrashCan /></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;