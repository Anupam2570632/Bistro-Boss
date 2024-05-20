import Banner from "../Banner/Banner";
import BistroHero from "../BistroHero/BistroHero";
import MenuSection from "../MenuSection/MenuSection";
import OrderSection from "../OrderSection/OrderSection";

const Home = () => {
    return (
        <div>
            <Banner/>
            <OrderSection/>
            <BistroHero/>
            <MenuSection/>
        </div>
    );
};

export default Home;