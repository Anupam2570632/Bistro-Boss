import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { isPending, data: carts, refetch } = useQuery({
        queryKey: ['myaCart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data;
        },
    })

    return [carts, refetch, isPending]
};

export default useCart;