// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     // fetch('/menu.json')
    //     //     .then(res => res.json())
    //     //     .then(data => setMenu(data))
    //     axiosPublic.get('/menu')
    //         .then(res => setMenu(res.data))
    // }, [axiosPublic])
    const axiosPublic = useAxiosPublic()


    const { isPending, data: menu, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu')
            return res.data;
        },
    })

    return [menu, refetch];
};

export default useMenu;