import { Link } from "react-router-dom";
import MenuItem from "../../../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../../components/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import dessertBanner from '../../../../assets/menu/dessert-bg.jpeg'
import MenuBanner from "../MenuBanner/MenuBanner";
import pizzaBanner from '../../../../assets/menu/pizza-bg.jpg'
import saladsBanner from '../../../../assets/menu/salad-bg.jpg'
import soupBanner from '../../../../assets/menu/soup-bg.jpg'
import MenuCategory from "./MenuCategory/MenuCategory";


const TodayOffer = () => {
    const [menu,refetch, isLoading] = useMenu()

    if (isLoading) {
        return <>loading...</>
    }

    const todaysOffer = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')


    return (
        <div className="max-w-[1500px] mx-auto py-10">
            <MenuCategory title={'salad'} items={todaysOffer} />

            <MenuBanner img={dessertBanner} title={'Dessert'} message={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <MenuCategory title={'dessert'} items={dessert} />

            <MenuBanner img={pizzaBanner} title={'pizza'} message={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <MenuCategory title={'pizza'} items={pizza} />

            <MenuBanner img={saladsBanner} title={'salads'} message={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <MenuCategory title={'salad'} items={salad} />

            <MenuBanner img={soupBanner} title={'soups'} message={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
            <MenuCategory title={'soup'} items={soup} />

        </div>
    );
};

export default TodayOffer;