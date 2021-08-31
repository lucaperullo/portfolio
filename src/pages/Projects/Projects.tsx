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
              src="https://media.discordapp.net/attachments/702215602106007573/882340899240177704/unknown.png?width=881&height=443"
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
            </Box>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex direction="column" justifyContent="center" alignItems="center">
            <img
              className="project-image"
              src="https://media.discordapp.net/attachments/702215602106007573/882344016895701002/unknown.png?width=881&height=442"
            />

            <Box
              w={{ base: 56, md: 64 }}
              bg={useColorModeValue("white", "gray.800")}
              mt={-10}
              shadow="lg"
              rounded="lg"
              overflow="hidden"
            >
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
            </Box>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
