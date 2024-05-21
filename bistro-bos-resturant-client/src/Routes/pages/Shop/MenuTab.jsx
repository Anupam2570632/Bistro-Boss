import FoodCard from "../../../components/FoodCard";

const MenuTab = ({ items }) => {
    return (
        <div className="w-11/12 md:w-4/5 py-8 mx-auto max-w-[1500px] gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                items.map((item, idx) => <FoodCard className='mx-auto' key={idx} item={item}>

                </FoodCard>)
            }
        </div>
    );
};

export default MenuTab;