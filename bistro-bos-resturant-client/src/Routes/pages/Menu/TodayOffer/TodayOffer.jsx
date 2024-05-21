import { Link } from "react-router-dom";
import MenuItem from "../../../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../../components/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import dessertBanner from '../../../../assets/menu/dessert-bg.jpeg'
import MenuBanner from "../MenuBanner/MenuBanner";
import pizzaBanner from '../../../../assets/menu/pizza-bg.jpg'
import saladsBanner from '../../../../assets/menu/salad-bg.jpg'
import soupBanner from '../../../../assets/menu/soup-bg.jpg'


const TodayOffer = () => {
    const [menu] = useMenu()

    const todaysOffer = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')


    return (
        <div className="max-w-[1500px] mx-auto py-10">
            <div className="w-11/12 md:w-4/5 mx-auto">
                <SectionTitle heading={"today's offer"} message={"Don't miss"} />
                <div className="grid gap-6 gris-cols-1 py-10 md:grid-cols-2">
                    {
                        todaysOffer.map(item => <MenuItem item={item} key={item._id}>

                        </MenuItem>)
                    }
                </div>
                <Link to={'/'} className="flex items-center justify-center">
                    <button className="px-8 py-3 mx-auto border-b-4 hover:bg-slate-300 font-semibold duration-200 border-b-black rounded-lg">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
            <MenuBanner img={dessertBanner} title={'Dessert'} message={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div className="grid gap-6 gris-cols-1 py-10 md:grid-cols-2">
                    {
                        dessert.map(item => <MenuItem item={item} key={item._id}>

                        </MenuItem>)
                    }
                </div>
                <Link to={'/'} className="flex items-center justify-center">
                    <button className="px-8 py-3 mx-auto border-b-4 hover:bg-slate-300 font-semibold duration-200 border-b-black rounded-lg">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
            <MenuBanner img={pizzaBanner} title={'pizza'} message={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div className="grid gap-6 gris-cols-1 py-10 md:grid-cols-2">
                    {
                        pizza.map(item => <MenuItem item={item} key={item._id}>

                        </MenuItem>)
                    }
                </div>
                <Link to={'/'} className="flex items-center justify-center">
                    <button className="px-8 py-3 mx-auto border-b-4 hover:bg-slate-300 font-semibold duration-200 border-b-black rounded-lg">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
            <MenuBanner img={saladsBanner} title={'salads'} message={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div className="grid gap-6 gris-cols-1 py-10 md:grid-cols-2">
                    {
                        salad.map(item => <MenuItem item={item} key={item._id}>

                        </MenuItem>)
                    }
                </div>
                <Link to={'/'} className="flex items-center justify-center">
                    <button className="px-8 py-3 mx-auto border-b-4 hover:bg-slate-300 font-semibold duration-200 border-b-black rounded-lg">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
            <MenuBanner img={soupBanner} title={'soups'} message={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <div className="w-11/12 md:w-4/5 mx-auto">
                <div className="grid gap-6 gris-cols-1 py-10 md:grid-cols-2">
                    {
                        soup.map(item => <MenuItem item={item} key={item._id}>

                        </MenuItem>)
                    }
                </div>
                <Link to={'/'} className="flex items-center justify-center">
                    <button className="px-8 py-3 mx-auto border-b-4 hover:bg-slate-300 font-semibold duration-200 border-b-black rounded-lg">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default TodayOffer;