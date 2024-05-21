
const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="card relative max-w-96 mx-auto p-0 rounded-none bg-[#F3F3F3] shadow-xl">
            <figure className="p-0 m-0 rounded-none w-full mb-8">
                <img src={image} alt="Shoes" className="rounded-none w-full p-0 m-0" />
            </figure>
            <div className="card-body items-center text-center px-10 py-8">
                <h2 className="card-title text-[#151515] text-xl font-semibold">{name}</h2>
                <p className="text-start text-[#737373]">{recipe}</p>
                <div className="card-actions">
                    <button className="btn text-[#BB8506] border-b-[3px] border-b-[#BB8506] hover:border-b-[#BB8506] uppercase bg-[#E8E8E8] hover:bg-[#111827] duration-200">add to cart</button>
                </div>
            </div>
            <h1 className="absolute top-0 right-0 bg-[#111827] px-4 py-2 m-5 text-white ">${price}</h1>
        </div>
    );
};

export default FoodCard;