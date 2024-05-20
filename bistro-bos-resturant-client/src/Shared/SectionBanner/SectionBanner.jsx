
const SectionBanner = ({ img, title, message }) => {
    return (
        <div className="relative min-h-screen object-cover object-center" style={{ backgroundImage: `url(${img})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="bg-black w-[65%] text-white bg-opacity-50 text-center space-y-6 py-20">
                    <h1 className="uppercase font-bold text-2xl md:text-6xl">{title}</h1>
                    <p className="md:text-xl font-semibold">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default SectionBanner;