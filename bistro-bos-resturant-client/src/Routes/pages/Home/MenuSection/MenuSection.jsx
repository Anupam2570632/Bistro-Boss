import { useEffect, useState } from "react";
import MenuItem from "../../../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../../components/SectionTitle";
import { Link } from "react-router-dom";

const MenuSection = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                // const popularItems = data.filter(item => item.category === 'popular');
                setMenu(data)
            })
    }, [])
    return (
        <section className="w-11/12 md:w-4/5 mx-auto max-w-[1500px] py-14">
            <SectionTitle
                message="Check it out"
                heading="FROM OUR MENU"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.slice(0,6).map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex items-center justify-center py-12">
                <Link className="">
                    <button className="px-6 mx-auto py-3 rounded-lg hover:bg-base-200 duration-150 text-[20px] font-medium border-0 border-b-[#1F2937] border-b-4">View Full Menu</button>
                </Link>
            </div>
        </section>
    );
};

export default MenuSection;