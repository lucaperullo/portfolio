import {
  Flex,
  useColorModeValue,
  Box,
  chakra,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import "swiper/css/effect-cube";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube } from "swiper";
SwiperCore.use([EffectCube]);
export default function Projects() {
  return (
    <>
      {/* <video
        className="vibin-video"
        autoPlay
        muted
        loop
        src="./vibin.mp4"
      ></video> */}
      <Swiper
        style={{ minWidth: "375px" }}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Flex direction="column" alignItems="center">
            <img
              className="project-image"
              src="https://media.discordapp.net/attachments/702215602106007573/882379519523192912/unknown.png?width=1329&height=671"
              alt=""
            />

            <Box
              w={{ base: 56, md: 64 }}
              bg={useColorModeValue("white", "gray.800")}
              mt={-10}
              shadow="lg"
              rounded="lg"
              overflow="hidden"
            >
              <a href="https://ourmusic.vercel.app/" target="blank">
                <chakra.h3
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={useColorModeValue("gray.800", "white")}
                  letterSpacing={1}
                >
                  Ourmusic
                </chakra.h3>
              </a>
              <a href="https://ourmusic.vercel.app/" target="blank">
                <chakra.button
                  bg="gray.800"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                  px={2}
                  py={1}
                  rounded="lg"
                  textTransform="uppercase"
                  _hover={{
                    bg: useColorModeValue("gray.700", "gray.600"),
                  }}
                  _focus={{
                    bg: useColorModeValue("gray.700", "gray.600"),
                    outline: "none",
                  }}
                >
                  Visit app
                </chakra.button>
              </a>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex direction="column" alignItems="center">
            <img
              className="project-image"
              src="https://media.discordapp.net/attachments/702215602106007573/882343542209523712/unknown.png?width=1363&height=671"
              alt=""
            />

            <Box
              w={{ base: 56, md: 64 }}
              bg={useColorModeValue("white", "gray.800")}
              mt={-10}
              shadow="lg"
              rounded="lg"
              overflow="hidden"
            >
              <a href="https://quizgame-eight.vercel.app/" target="blank">
                <chakra.h3
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={useColorModeValue("gray.800", "white")}
                  letterSpacing={1}
                >
                  Quiz Game
                </chakra.h3>
              </a>
              <a href="https://quizgame-eight.vercel.app/" target="blank">
                <chakra.button
                  bg="gray.800"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                  px={2}
                  py={1}
                  rounded="lg"
                  textTransform="uppercase"
                  _hover={{
                    bg: useColorModeValue("gray.700", "gray.600"),
                  }}
                  _focus={{
                    bg: useColorModeValue("gray.700", "gray.600"),
                    outline: "none",
                  }}
                >
                  Visit app
                </chakra.button>
              </a>
            </Box>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex direction="column" justifyContent="center" alignItems="center">
            <img
              className="project-image"
              src="https://media.discordapp.net/attachments/702215602106007573/882380011049467994/unknown.png?width=1333&height=671"
            />

            <Box
              w={{ base: 56, md: 64 }}
              bg={useColorModeValue("white", "gray.800")}
              mt={-10}
              shadow="lg"
              rounded="lg"
              overflow="hidden"
            >
              {" "}
              <a href="https://dut.vercel.app" target="blank">
                <chakra.h3
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color={useColorModeValue("gray.800", "white")}
                  letterSpacing={1}
                >
                  DUT Website
                </chakra.h3>
              </a>
              <a href="https://dut.vercel.app" target="blank">
                <chakra.button
                  bg="gray.800"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                  px={2}
                  py={1}
                  rounded="lg"
                  textTransform="uppercase"
                  _hover={{
                    bg: useColorModeValue("gray.700", "gray.600"),
                  }}
                  _focus={{
                    bg: useColorModeValue("gray.700", "gray.600"),
                    outline: "none",
                  }}
                >
                  Visit app
                </chakra.button>
              </a>
            </Box>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
