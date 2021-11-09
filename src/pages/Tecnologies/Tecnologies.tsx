import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Icon,
  Stack,
} from "@chakra-ui/react";

export default function Tecnologies() {
  const Feature = (props: any) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            bg={useColorModeValue("#4a426b", "#d1b82b")}
            color="white"
          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color={useColorModeValue("#fff", "#410166")}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={useColorModeValue("#fff", "#410166")}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Box py={12} bg={useColorModeValue("#27003D", "#fff")} rounded="xl">
      <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
        <Box textAlign={{ lg: "center" }}>
          <chakra.h2
            color={useColorModeValue("#fff", "#410166")}
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            TECNOLOGIES I USE
          </chakra.h2>
          <chakra.p
            mt={2}
            fontSize={{ base: "2xl", sm: "4xl" }}
            lineHeight="10"
            fontWeight="extrabold"
            letterSpacing="tight"
            color={useColorModeValue("#fff", "#410166")}
          >
            Mongo DB, Express, React JS, Node JS,
            <br /> Chakra UI, TypeScript, Ionic and much more.
          </chakra.p>
          <chakra.p
            className="tecnologies-text-top"
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: "auto" }}
            color={useColorModeValue("#fff", "#410166")}
          >
            My applications are built with the latest technologies to offer the
            best possible.
          </chakra.p>
        </Box>

        <Box mt={10}>
          <Stack
            spacing={{ base: 10, md: 0 }}
            display={{ md: "grid" }}
            gridTemplateColumns={{ md: "repeat(2,1fr)" }}
            gridColumnGap={{ md: 8 }}
            gridRowGap={{ md: 10 }}
          >
            <Feature
              title="Agile working"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              }
            >
              <chakra.p className="tecnologies-text-top">
                Maximum flexibility and minimum constraints for the best use of
                your time!
              </chakra.p>
            </Feature>

            <Feature
              title="Continuous Integration Deployment"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              }
            >
              <chakra.p className="tecnologies-text-top">
                Continuous integration and deployment of your software or
                application.
              </chakra.p>
            </Feature>

            <Feature
              title="Trasparency"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              }
            >
              <chakra.p className="tecnologies-text-top">
                Communicating openly and honestly with the team members and
                cultivating a culture where information can flow freely between
                people.
              </chakra.p>
            </Feature>

            <Feature
              title="Open to relocation"
              icon={
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              }
            >
              <chakra.p className="tecnologies-text-top">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </chakra.p>
            </Feature>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
