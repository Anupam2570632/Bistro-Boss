import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const [menu, setMenu] = useState([])
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        // fetch('/menu.json')
        //     .then(res => res.json())
        //     .then(data => setMenu(data))
        axiosPublic.get('/menu')
            .then(res => setMenu(res.data))
    }, [axiosPublic])

    return [menu];
};

export default useMenu;