

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { AddToCard } from "./AddToCard";
import axios from "axios";
import useProducts from "../hooks/useProducts";
import loadingImg from "../assets/loading/loading.gif";
import { SekeletonCart } from "./SekeletonCart";

export function CardListSlider2() {
  const { products, error, isLoading } = useProducts("limit=8&skip=180");

  return (
    <>
      <div className=" my-3  ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          breakpoints={{
            1920: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            350: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            300: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
          }}
          // navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          <div className="flex justify-center items-center ">
            {isLoading ? (
              <div className="font-extrabold flex-wrap justify-center items-center flex gap-10 text-4xl">
                                           <SekeletonCart/>
                                           <SekeletonCart/>
                                           <SekeletonCart/>
                                           <SekeletonCart/>
                                           
             
                           </div>
            ) : null}
            {error}
            {products?.map((value, index) => {
              let discountPrice = Math.ceil(
                value.price - value.discountPercentage * (value.price / 100)
              ).toFixed(2);

              return (
                <SwiperSlide key={value.id}>
                  <AddToCard
                    id={value.id}
                    className="bg-myTheme"
                    discount={`${Math.round(value.discountPercentage)}%`}
                    productName={value.title}
                    delPrice={`$${value.price.toFixed(2)}`}
                    newPrice={`$${discountPrice}`}
                    image={value.thumbnail}
                    rating={value.rating}
                  />{" "}
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
}
