import {
  Center,
  Stack,
  Button,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
export default function Contacts() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "220px",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100%",
        }}
      >
        <chakra.h1
          style={{
            fontWeight: 200,
            height: "40px",
            marginBottom: "100px",
            textAlign: "center",
          }}
          color={useColorModeValue("#fff", "#000")}
          fontSize={{ base: "5xl", lg: "7xl" }}
        >
          Contact me here
        </chakra.h1>
        <div className="buttons">
          <a href="https://github.com/lucaperullo" target="blank">
            <Button
              className="contact-button"
              colorScheme={"blackAlpha"}
              leftIcon={
                <SiGithub
                  style={{ fontSize: "100px" }}
                  className="contact-icon"
                />
              }
            ></Button>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/luca-perullo/" target="blank">
            <Button
              className="contact-button"
              colorScheme={"messenger"}
              leftIcon={
                <SiLinkedin
                  style={{ fontSize: "100px" }}
                  className="contact-icon"
                />
              }
            ></Button>
          </a>
          {/* Messenger */}
          <a href="" target="blank">
            <Button
              className="contact-button"
              colorScheme={"whatsapp"}
              leftIcon={
                <SiWhatsapp
                  style={{ fontSize: "100px" }}
                  className="contact-icon"
                />
              }
            ></Button>
          </a>
        </div>
        <chakra.h3
          style={{
            fontWeight: 100,

            fontSize: "40px",
            color: useColorModeValue("#fff", "#000"),
            textAlign: "center",
          }}
        >
          or
        </chakra.h3>
        <div>
          <a
            className="email-button"
            style={{ color: useColorModeValue("#fff", "#000") }}
            href="mailto: lucaperullo@outlook.it"
          >
            lucaperullo@outlook.it
          </a>
        </div>
        <img
          className="box-holder-luca"
          src="https://media.discordapp.net/attachments/760517500629942282/882586753691680768/AREmoji_20210901_132426_4231.png?width=671&height=671"
          alt=""
        />
      </div>
    </>
  );
}
