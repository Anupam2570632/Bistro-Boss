import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../components/SectionTitle";

const PaymentHIstory = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user?.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <SectionTitle heading={'payment history'} message={'At a Glance!'} />
            <div className="md:px-20 p-4">
                <h2 className="text-4xl font-bold mb-6 text-start">Total Payment:{payments.length}</h2>
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="uppercase">
                                <th>#</th>
                                <th>Email</th>
                                <th>Transaction ID</th>
                                <th>Total Price</th>
                                <th>Payment Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment, idx) => <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{payment.email}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>${payment.price}</td>
                                    <td>{payment.date}</td>
                                    <td>{payment.status}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHIstory;