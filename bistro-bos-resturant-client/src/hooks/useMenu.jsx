import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        // fetch('/menu.json')
        //     .then(res => res.json())
        //     .then(data => setMenu(data))
        axios.get('http://localhost:5000/menu')
            .then(res => setMenu(res.data))
    }, [])

    return [menu];
};

export default useMenu;