import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "./Gallery.css"
import "swiper/css";
import "swiper/css/pagination";

import c1 from "../../assets/gallery1.png";
import c2 from "../../assets/gallery2.png";
import c3 from "../../assets/gallery3.png";
import c4 from "../../assets/gallery4.png";
import c6 from "../../assets/gallery5.png";
import c7 from "../../assets/gallery6.png";
import c8 from "../../assets/gallery7.png";
import c9 from "../../assets/gallery8.png";
import c10 from "../../assets/gallery9.png";
import c11 from "../../assets/gallery10.png";

SwiperCore.use([Autoplay, Pagination]);

const Gallery = () => {
  return (
    <div className="feature-background contact-back">
      <div className="px-4 py-5 mb-2 text-center" id="service">
      <div className='row'>
                    <div className='col-md-12 py-5'>
                        <h5 className='page-title'>Gallery</h5>
                        <h2 className="lh-1 display-5 fw-bold d-flex justify-content-center ">Showcasing Excellence</h2>
                        <p className='d-flex justify-content-center'>Capturing Moments, Creating Memories: Explore Our Gallery of Timeless Beauty.</p>
                    </div>
                </div>
        <div className="py-3">
          <Swiper
            className="sample-slider"
            loop={true}
            autoplay={{
              delay: 1000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: false }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            navigation
          >
            <SwiperSlide>
              <img
                src={c1}
                className="mx-auto"
                
                height={"auto"}
                alt="Image 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={c2}
                className="mx-auto"
                
                height={"auto"}
                alt="Image 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={c3}
                className="mx-auto"
                
                height={"auto"}
                alt="Image 3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={c4}
                className="mx-auto"
                
                height={"auto"}
                alt="Image 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={c6}
                className="mx-auto"
                
                height={"auto"}
                alt="Image 5"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={c7}
                className="mx-auto"
                
                height={"auto"}
                alt="Image 6"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={c8}
                className="mx-auto"
                
                height={"auto"}
                alt="Image 7"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={c9}
                className="mx-auto"
                
                height={"auto"}
                alt="Image 8"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={c10}
                className="mx-auto"
                
                height={"auto"}
                alt="Image 9"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={c11}
                className="mx-auto"
                
                height={"auto"}
                alt="Image 10"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
