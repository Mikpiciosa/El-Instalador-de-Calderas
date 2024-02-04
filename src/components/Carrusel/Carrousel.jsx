import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Carrousel.css";
export const Carrousel = () => {
  return (
    <section className="carrousel-container">
      <article className="carrousel-content-images">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="./portada.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./portada.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./portada.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./portada.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </article>
      <article className="carrousel-content-text">
        <h3 className="carrousel-content-text-h3">Galería</h3>
        <p className="carrousel-content-text-p">
          Conoce un poco de nuestro trabajo
        </p>
      </article>
    </section>
  );
};
