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
          style={{ backgroundColor: useColorModeValue("#410166", "#85B4FF") }}
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
          style={{ backgroundColor: useColorModeValue("#410166", "#85B4FF") }}
        >
          <div className="projects">
            <img
              className="project-img"
              src={useColorModeValue(
                "https://media.discordapp.net/attachments/773301662814699521/905210295033659442/unknown.png?width=1373&height=663",
                "https://media.discordapp.net/attachments/773301662814699521/907644022573641799/unknown.png?width=1365&height=662"
              )}
            />
          </div>
          <div className="mobile-projects">
            <img
              src={useColorModeValue(
                "https://media.discordapp.net/attachments/773301662814699521/907645529322831922/unknown.png?width=347&height=662",
                "https://media.discordapp.net/attachments/773301662814699521/907645208387264563/unknown.png?width=358&height=662"
              )}
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
          style={{ backgroundColor: useColorModeValue("#410166", "#85B4FF") }}
        >
          <div className="projects">
            <Flex direction="column" alignItems="center">
              <img
                className="project-img"
                src={useColorModeValue(
                  "https://media.discordapp.net/attachments/702215602106007573/882379519523192912/unknown.png?width=1329&height=671",
                  "https://media.discordapp.net/attachments/773301662814699521/907647820914368622/unknown.png?width=1375&height=663"
                )}
                alt=""
              />
            </Flex>
          </div>
          <div className="mobile-projects">
            <img
              src={useColorModeValue(
                "https://media.discordapp.net/attachments/773301662814699521/907646521879691284/unknown.png?width=369&height=663",
                "https://media.discordapp.net/attachments/773301662814699521/907646366128439337/unknown.png?width=368&height=663"
              )}
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
