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
      <div>
        <chakra.h2 fontSize={{ base: "6xl", md: "4xl" }}>Hi, I am</chakra.h2>
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
      <Flex py={36}>
        <Box w="full" h="full" mx="auto">
          <div>
            <img
              className="welcome-image"
              src="https://media.discordapp.net/attachments/702215602106007573/882369153363742800/AREmoji_20210831_204843_447.gif?width=703&height=703"
            ></img>
          </div>

          <chakra.p mb={5} color="gray.100" fontSize={{ md: "lg" }}></chakra.p>
        </Box>
      </Flex>
    </Flex>
  );
}
