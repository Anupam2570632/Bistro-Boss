import { Link } from "react-router-dom";
import SectionTitle from "../../../../../components/SectionTitle";
import MenuItem from "../../../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title}) => {
    return (
        <div>
            <div className="w-11/12 md:w-4/5 mx-auto">
                <SectionTitle heading={"today's offer"} message={"Don't miss"} />
                <div className="grid gap-6 gris-cols-1 py-10 md:grid-cols-2">
                    {
                        items.map(item => <MenuItem item={item} key={item._id}>

                        </MenuItem>)
                    }
                </div>
                <Link to={`/shop/${title}`} className="flex items-center justify-center">
                    <button className="px-8 py-3 mx-auto border-b-4 hover:bg-slate-300 font-semibold duration-200 border-b-black rounded-lg">ORDER YOUR FAVORITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;