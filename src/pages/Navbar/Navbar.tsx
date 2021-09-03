import { Box } from "@chakra-ui/react";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../style/index.css";

// import Swiper core and required modules
import SwiperCore, { Mousewheel, EffectCoverflow } from "swiper";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import Tecnologies from "../../pages/Tecnologies/Tecnologies";
import Contacts from "../../pages/Contacts/Contacts";

// install Swiper modules
SwiperCore.use([Mousewheel, EffectCoverflow]);

export default function Navbar() {
  return (
    <Box transition=".3s ease">
      <Box>
        <div>
          <Swiper
            style={{ height: "100vh" }}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <Home />
            </SwiperSlide>

            <SwiperSlide>
              <Projects />
            </SwiperSlide>
            <SwiperSlide>
              <Tecnologies />
            </SwiperSlide>
            {/* <SwiperSlide>About Me</SwiperSlide> */}
            <SwiperSlide>
              <Contacts />
            </SwiperSlide>
          </Swiper>
        </div>
      </Box>
    </Box>
  );
}
