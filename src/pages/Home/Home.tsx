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
      bg={useColorModeValue("rgb(31, 27, 58)", "gray.600")}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <div>
        <chakra.h2
          color={useColorModeValue("gray.100", "white")}
          fontSize={{ base: "6xl", md: "4xl" }}
        >
          HI, I AM
        </chakra.h2>
        <chakra.h1
          mb={3}
          fontSize={{ base: "6xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          color={useColorModeValue("gray.100", "white")}
        >
          LUCA PERULLO
        </chakra.h1>
        <chakra.p
          mb={2}
          fontSize="md"
          fontWeight="semibold"
          letterSpacing="wide"
          color="gray.400"
          textTransform="uppercase"
        >
          MERN FULL STACK DEVELOPER
        </chakra.p>
      </div>
      <Flex py={36}>
        <Box w="full" h="full" mx="auto">
          <div>
            <img
              className="welcome-image"
              src="https://media.discordapp.net/attachments/702215602106007573/882377063909191740/lookhere-removebg-preview.png"
            ></img>
          </div>

          <chakra.p mb={5} color="gray.100" fontSize={{ md: "lg" }}></chakra.p>
        </Box>
      </Flex>
      <img
        className="arrowDown"
        src="https://www.sanimedicalcenter.it/wp-content/uploads/2020/02/1ad9d5b8fa1f63c26a71bda135c5a4ef_homearrow.png"
        alt=""
      />
    </Flex>
  );
}
