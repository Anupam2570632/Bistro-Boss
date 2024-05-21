
const MenuBanner = ({ title, message, img }) => {
    return (
        <div>
            <div className="hero my-10 py-24" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-content text-center bg-none ">
                    <div className="max-w-[850px] px-20 py-10 mx-auto bg-black text-white bg-opacity-65">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">
                            {message}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBanner;