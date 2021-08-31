import {
  Box,
  chakra,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPhone, FaRss } from "react-icons/fa";

import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";

import React, { useRef, useState } from "react";
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

// install Swiper modules
SwiperCore.use([Mousewheel, EffectCoverflow]);

export default function Navbar() {
  return (
    <Box transition=".3s ease">
      <Box as="main" p="4">
        <div style={{ height: "100vh" }}>
          <Swiper
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
              <Tecnologies />
            </SwiperSlide>
            <SwiperSlide>
              <Projects />
            </SwiperSlide>
            <SwiperSlide>About Me</SwiperSlide>
            <SwiperSlide>Contacts</SwiperSlide>
          </Swiper>
        </div>
      </Box>
    </Box>
  );
}
