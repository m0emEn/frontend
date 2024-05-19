import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import Product from "./ProductCard";

import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
const ProductsSlider = ({ products }) => {
  return (
    <>
      <h2 className="products-container-title" id="sliderTitle">
        Promotion Jogging femmes
      </h2>

      <div className="productSlider">
        <Swiper
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
          }}
          pagination={{ clickable: true }}
        >
          {products.map((item, i) => (
            <SwiperSlide className="swiper-slide" key={i}>
              <Product item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductsSlider;
