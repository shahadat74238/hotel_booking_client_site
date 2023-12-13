import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="my-20 mx-5">
      <div className="grid lg:grid-cols-4  grid-cols-1">
        <div className="lg:col-span-1 p-10">
          <div data-aos="fade-up" data-aos-duration="2000">
            <h1 className="uppercase font-semibold text-3xl  ">Our Gallery</h1>
            <hr className="my-5 w-24 border border-f-color" />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <p className="mb-5">
              Experience the pinnacle of luxury, where every detail is carefully
              curated to provide you with a memorable stay.
            </p>
            <Link
              to="/gallery"
              className="text-f-color underline font-semibold"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="lg:col-span-3  ">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={3}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-black">
                <img
                  className="hover:opacity-70"
                  src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/04/main-home-gallery-img-1.jpg"
                  alt="Loading Image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-black">
                <img
                  className="hover:opacity-70"
                  src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/04/main-home-gallery-img-2.jpg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-black">
                <img
                  className="hover:opacity-70"
                  src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/04/main-home-gallery-img-3.jpg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-black">
                <img
                  className="hover:opacity-70"
                  src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/04/main-home-gallery-img-1.jpg"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-black">
                <img
                  className="hover:opacity-70"
                  src="https://fivestar.qodeinteractive.com/wp-content/uploads/2017/04/main-home-gallery-img-2.jpg"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
