import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import './section.css';

import slide1 from '../../../../assets/menu/banner3.jpg';
import slide2 from '../../../../assets/menu/dessert-bg.jpeg';
import slide4 from '../../../../assets/menu/pizza-bg.jpg';
import slide5 from '../../../../assets/menu/salad-bg.jpg';
import slide6 from '../../../../assets/menu/soup-bg.jpg';
import SectionTitle from "../../../../components/SectionTitle";

const OrderSection = () => {
    return (
        <section className="w-11/12 md:w-4/5 mx-auto max-w-[1500px]">
            <SectionTitle
                message={"From 11.00am to 10.00pm"}
                heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide>
                    <img className="h-[400px] object-cover object-center max-w-[272px]" src={slide1} alt="Salads" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[400px] object-cover object-center max-w-[272px]" src={slide2} alt="Pizzas" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[400px] object-cover object-center max-w-[272px]" src={slide4} alt="Desserts" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[400px] object-cover object-center max-w-[272px]" src={slide5} alt="Salads" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[400px] object-cover object-center max-w-[272px]" src={slide6} alt="Salads" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default OrderSection;
