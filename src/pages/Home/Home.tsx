import {
  Flex,
  useColorModeValue,
  Box,
  SimpleGrid,
  chakra,
  Button,
  HStack,
} from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <Flex
      style={{ padding: "200px" }}
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      w="full"
      justifyContent="center"
      alignItems="center"
      pos="absolute"
    >
      <Flex py={36}>
        <Box w="full" h="full" mx="auto">
          <video
            autoPlay
            muted
            loop
            className="avatar-video"
            src="./hihi.mp4"
          ></video>
          <div
            style={{
              position: "absolute",
              top: "100px",
              right: "25vw",
            }}
          >
            <chakra.h2 fontSize={{ base: "6xl", md: "4xl" }}>
              Hi, I am
            </chakra.h2>
            <chakra.h1
              mb={3}
              fontSize={{ base: "4xl", md: "4xl" }}
              fontWeight="bold"
              lineHeight="shorter"
              color={useColorModeValue("gray.900", "white")}
            >
              LUCA PERULLO
            </chakra.h1>
            <chakra.p
              mb={2}
              fontSize="xs"
              fontWeight="semibold"
              letterSpacing="wide"
              color="gray.400"
              textTransform="uppercase"
            >
              FULL STACK DEVELOPER
            </chakra.p>
          </div>

          <chakra.p mb={5} color="gray.100" fontSize={{ md: "lg" }}></chakra.p>
        </Box>
      </Flex>
    </Flex>
  );
}
