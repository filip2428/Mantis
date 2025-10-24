"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Don't forget to install swiper if you haven't: npm install swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProgrameSlider() {
  return (
    // We wrap the Swiper in a div to easily control the margin/padding
    // for the component as a whole, for better placement on the page.
    <div className="p-4 mx-auto max-w-7xl">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // Applying Tailwind classes here:
        className="w-full h-96 md:h-[500px] rounded-lg shadow-xl mySwiper swiper-nav-white"
      >
        <SwiperSlide>
          <img
            src={"poze-mantis/22.JPG"}
            alt="Program Image 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          {/* Apply Tailwind classes to the image */}
          <img
            src={"poze-mantis/2.JPG"}
            alt="Program Image 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"poze-mantis/30.JPG"}
            alt="Program Image 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"poze-mantis/31.JPG"}
            alt="Program Image 4"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"poze-mantis/4.JPG"}
            alt="Program Image 5"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"poze-mantis/11.JPG"}
            alt="Program Image 6"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"poze-mantis/14.JPG"}
            alt="Program Image 7"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"poze-mantis/20.JPG"}
            alt="Program Image 8"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
