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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Flex
        style={{ padding: "200px", paddingTop: "350px" }}
        bg={useColorModeValue("#5A008F", "#EBF2FF")}
        w="full"
        justifyContent="center"
        alignItems="center"
      >
        <div>
          <chakra.h2
            color={useColorModeValue("#fff", "#000")}
            fontSize={{ base: "6xl", md: "4xl" }}
          >
            HI, I AM
          </chakra.h2>
          <chakra.h1
            mb={3}
            fontSize={{ base: "6xl", md: "6xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            color={useColorModeValue("#fff", "#000")}
            style={{ fontFamily: "Mali" }}
          >
            LUCA PERULLO
          </chakra.h1>
          <chakra.p
            mb={2}
            fontSize="md"
            fontWeight="thin"
            letterSpacing="wide"
            color={useColorModeValue("#fff", "#fff")}
            bgGradient={useColorModeValue(
              "linear(to-r, green.400,purple.500)",
              "linear(to-r, purple.500,blue.400)"
            )}
            textTransform="uppercase"
          >
            MERN FULL STACK DEVELOPER
          </chakra.p>
        </div>

        <img
          className="arrowDown"
          src="https://www.sanimedicalcenter.it/wp-content/uploads/2020/02/1ad9d5b8fa1f63c26a71bda135c5a4ef_homearrow.png"
          alt=""
        />
      </Flex>

      <img
        className="welcome-image"
        src="https://media.discordapp.net/attachments/702215602106007573/882377063909191740/lookhere-removebg-preview.png"
      ></img>
    </div>
  );
}
