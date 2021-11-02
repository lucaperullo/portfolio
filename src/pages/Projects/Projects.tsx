import { Flex, useColorModeValue, Box, chakra } from "@chakra-ui/react";
import React from "react";
import "swiper/css/effect-cube";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, Keyboard } from "swiper";
SwiperCore.use([EffectCube, Keyboard]);
export default function Projects() {
  return (
    <>
      <Swiper
        style={{ minWidth: "375px" }}
        effect={"cube"}
        grabCursor={true}
        keyboard={{ enabled: true }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        className="mySwiper"
      >
        <SwiperSlide
          style={{ backgroundColor: useColorModeValue("#27003D", "#E0E2F5") }}
        >
          <div className="projects">
            <Flex direction="column" alignItems="center">
              <img
                className="project-img"
                src="https://media.discordapp.net/attachments/702215602106007573/882343542209523712/unknown.png?width=1363&height=671"
                alt=""
              />
            </Flex>
          </div>
          <div className="mobile-projects">
            <img
              src="https://media.discordapp.net/attachments/702215602106007573/883424217448722442/unknown.png?width=311&height=670"
              alt=""
              className="project-img"
            />
            <a href="https://quizgame-eight.vercel.app/" target="blank">
              <chakra.button
                bg="rgb(71, 83, 248)"
                fontSize="md"
                fontWeight="bold"
                color="white"
                px={5}
                py={3}
                rounded="lg"
                textTransform="uppercase"
                _hover={{
                  bg: useColorModeValue("rgb(59, 152, 214)", "gray.600"),
                }}
                _focus={{
                  bg: useColorModeValue("rgb(71, 178, 250)", "gray.600"),
                  outline: "none",
                }}
              >
                Try app
              </chakra.button>
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{ backgroundColor: useColorModeValue("#27003D", "#A1A2E2") }}
        >
          <div className="projects">
            <img
              className="project-img"
              src="https://media.discordapp.net/attachments/773301662814699521/905210295033659442/unknown.png?width=1373&height=663"
            />
          </div>
          <div className="mobile-projects">
            <img
              src="https://media.discordapp.net/attachments/702215602106007573/883423587552354374/unknown.png?width=309&height=670"
              className="project-img"
            />
            <a href="https://dut.vercel.app" target="blank">
              <chakra.button
                bg="rgb(71, 83, 248)"
                fontSize="md"
                fontWeight="bold"
                color="white"
                px={5}
                py={3}
                rounded="lg"
                textTransform="uppercase"
                _hover={{
                  bg: useColorModeValue("rgb(59, 152, 214)", "gray.600"),
                }}
                _focus={{
                  bg: useColorModeValue("rgb(71, 178, 250)", "gray.600"),
                  outline: "none",
                }}
              >
                Visit
              </chakra.button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{ backgroundColor: useColorModeValue("#27003D", "#A1A2E2") }}
        >
          <div className="projects">
            <Flex direction="column" alignItems="center">
              <img
                className="project-img"
                src="https://media.discordapp.net/attachments/702215602106007573/882379519523192912/unknown.png?width=1329&height=671"
                alt=""
              />
            </Flex>
          </div>
          <div className="mobile-projects">
            <img
              src="https://media.discordapp.net/attachments/702215602106007573/883422652683927562/unknown.png?width=309&height=671"
              alt=""
              className="project-img"
            />
            <a href="https://ourmusic.vercel.app/" target="blank">
              <chakra.button
                bg="rgb(71, 83, 248)"
                fontSize="md"
                fontWeight="bold"
                color="white"
                px={5}
                py={3}
                rounded="lg"
                textTransform="uppercase"
                _hover={{
                  bg: useColorModeValue("rgb(59, 152, 214)", "gray.600"),
                }}
                _focus={{
                  bg: useColorModeValue("rgb(71, 178, 250)", "gray.600"),
                  outline: "none",
                }}
              >
                Try app
              </chakra.button>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
