import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Swiper
        spaceBetween={0}
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[50vh] lg:h-screen w-full bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb7dd331274553.5649ba4fbed03.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="h-full bg-black/60 w-full flex items-center justify-center">
              <div data-aos="fade-down" data-aos-duration="2000">
                <h1 className="lg:text-2xl text-lg text-center text-f-color mb-3">
                  Welcome to FiveStar
                </h1>
                <h1
                  style={{ letterSpacing: "4px" }}
                  className="text-2xl text-center md:text-4xl lg:text-7xl font-bold uppercase text-white"
                >
                  Clean and Modern
                </h1>
                <hr className="my-5 w-60 mx-auto border border-f-color" />
                <p className="text-white uppercase md:text-4xl text-2xl font-semibold mx-auto text-center">
                   <span>special offer</span>
                   <br />
                   <span className="text-f-color">
                    20% off
                   </span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] lg:h-screen w-full bg-[url('https://www.pizunalinens.com/pub/media/mageplaza/blog/post/f/e/featureimage-luxury-hotel-bed.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="h-full bg-black/60 w-full flex items-center justify-center">
              <div data-aos="fade-down" data-aos-duration="2000">
                <h1 className="lg:text-2xl text-lg text-center text-f-color mb-3">
                  Welcome to FiveStar
                </h1>
                <h1
                  style={{ letterSpacing: "5px" }}
                  className="text-2xl text-center md:text-4xl lg:text-7xl font-bold uppercase text-white"
                >
                  Relaxation time
                </h1>
                <hr className="lg:my-10 md:my-4 my-2 w-60 mx-auto border border-f-color" />
                <p className="text-white uppercase md:text-4xl text-2xl font-semibold mx-auto text-center">
                   <span>special offer</span>
                   <br />
                   <span className="text-f-color">
                    20% off
                   </span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] lg:h-screen w-full bg-[url('https://w0.peakpx.com/wallpaper/240/377/HD-wallpaper-bedroom-hotel-room-light-design-modern-apartment-interior-idea-modern-design.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="h-full bg-black/60 w-full flex items-center justify-center">
              <div data-aos="fade-down" data-aos-duration="2000" >
                <h1 className="lg:text-2xl text-lg text-center text-f-color mb-3">
                  Welcome to FiveStar
                </h1>
                <h1
                  style={{ letterSpacing: "5px" }}
                  className="text-2xl text-center md:text-4xl lg:text-7xl font-bold uppercase text-white"
                >
                  Stunning hotel
                </h1>
                <hr className="lg:my-10 md:my-4 my-2 w-60 mx-auto border border-f-color" />
                <p className="text-white uppercase md:text-4xl text-2xl font-semibold mx-auto text-center">
                   <span>special offer</span>
                   <br />
                   <span className="text-f-color">
                    20% off
                   </span>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
