// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {

    const axiosPublic = useAxiosPublic()

    const { isPending, data: menu=[], refetch } = useQuery({
        queryKey: ['menuItem'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu')
            return res.data;
        },
    })

    return [menu, refetch, isPending];
};

export default useMenu;