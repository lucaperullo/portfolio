import { Box, Button, useColorModeValue, useColorMode } from "@chakra-ui/react";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../style/index.css";

// import Swiper core and required modules
import SwiperCore, { Mousewheel, EffectCoverflow, Keyboard } from "swiper";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import Tecnologies from "../../pages/Tecnologies/Tecnologies";
import Contacts from "../../pages/Contacts/Contacts";

// install Swiper modules
SwiperCore.use([Mousewheel, EffectCoverflow, Keyboard]);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  React.useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <Box bg={useColorModeValue("#410166", "#85B4FF")} transition=".3s ease">
      <Box>
        <div>
          {/* <header
            style={{ backgroundColor: useColorModeValue("#27003D", "#A1A2E2") }}
            className="bottomheader"
          ></header> */}
          <header
            style={{ backgroundColor: useColorModeValue("#27003D", "#0A68FF") }}
            className="settings"
          >
            <div
              style={{
                backgroundColor: useColorModeValue("#27003D", "#0A68FF"),
              }}
              className="switch"
            >
              <input
                onClick={toggleColorMode}
                type="checkbox"
                name="toggle"
                value={colorMode}
              />
              <label>
                <i className="bulb">
                  <span className="bulb-center"></span>
                  <span className="filament-1"></span>
                  <span className="filament-2"></span>
                  <span className="reflections">
                    <span></span>
                  </span>
                  <span className="sparks">
                    <i className="spark1"></i>
                    <i className="spark2"></i>
                    <i className="spark3"></i>
                    <i className="spark4"></i>
                  </span>
                </i>
              </label>
            </div>
          </header>

          <Swiper
            style={{
              height: "100vh",
              backgroundColor: useColorModeValue("#410166", "#85B4FF"),
            }}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 120,
              stretch: 0,
              depth: 100,
              modifier: 0,
              slideShadows: true,
            }}
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            keyboard={{ enabled: true }}
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
