import { Flex, useColorModeValue, Box, chakra } from "@chakra-ui/react";
import React from "react";
import "swiper/css/effect-cube";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube } from "swiper";
SwiperCore.use([EffectCube]);
export default function Projects() {
  return (
    <>
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="projects">
            {" "}
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
                    fontSize={{ base: "3xl", sm: "4xl" }}
                    letterSpacing={1}
                  >
                    Quiz Game
                  </chakra.h3>
                </a>
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
                      bg: useColorModeValue("gray.700", "gray.600"),
                      outline: "none",
                    }}
                  >
                    Visit game
                  </chakra.button>
                </a>
              </Box>
            </Flex>
          </div>
          <div className="mobile-projects">
            <img
              style={{ height: "90vh" }}
              src="https://media.discordapp.net/attachments/702215602106007573/883424217448722442/unknown.png?width=311&height=670"
              alt=""
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

        <SwiperSlide>
          <div className="projects">
            {" "}
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <img
                className="project-image"
                src="https://media.discordapp.net/attachments/702215602106007573/882380011049467994/unknown.png?width=1333&height=671"
              />

              <Box
                w={{ base: 56, md: 64 }}
                bg={useColorModeValue("gray.200", "gray.800")}
                mt={-10}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
              >
                <a href="https://dut.vercel.app" target="blank">
                  <chakra.h3
                    py={2}
                    textAlign="center"
                    fontWeight="bold"
                    textTransform="uppercase"
                    color={useColorModeValue("gray.800", "white")}
                    fontSize={{ base: "3xl", sm: "4xl" }}
                    letterSpacing={1}
                  >
                    DUT
                  </chakra.h3>
                </a>
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
                      bg: useColorModeValue("gray.700", "gray.600"),
                      outline: "none",
                    }}
                  >
                    Visit page
                  </chakra.button>
                </a>
              </Box>
            </Flex>
          </div>
          <div className="mobile-projects">
            <img
              style={{ height: "90vh" }}
              src="https://media.discordapp.net/attachments/702215602106007573/883423587552354374/unknown.png?width=309&height=670"
              alt=""
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
        <SwiperSlide>
          <div className="projects">
            {" "}
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
                    fontSize={{ base: "3xl", sm: "4xl" }}
                    letterSpacing={1}
                  >
                    Ourmusic
                  </chakra.h3>
                </a>
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
                    Visit app
                  </chakra.button>
                </a>
              </Box>
            </Flex>
          </div>
          <div className="mobile-projects">
            <img
              style={{ height: "90vh" }}
              src="https://media.discordapp.net/attachments/702215602106007573/883422652683927562/unknown.png?width=309&height=671"
              alt=""
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
