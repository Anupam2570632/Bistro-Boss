import hero from '../../../../assets/home/chef-service.jpg'

const BistroHero = () => {
    return (
        <div className="hero w-11/12 md:w-4/5 my-10 mx-auto max-w-[1500px] py-24" style={{ backgroundImage: `url(${hero})` }}>
            <div className="hero-content text-center bg-none ">
                <div className="max-w-[700px] px-20 py-10 mx-auto bg-white">
                    <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                    <p className="mb-5">.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse quae quibusdam explicabo vitae, nisi laborum aspernatur illo adipisci, ex quis repellendus dolore, porro aut!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BistroHero;