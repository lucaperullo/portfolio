import { Center, Stack, Button, chakra } from "@chakra-ui/react";
import React from "react";

import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
export default function Contacts() {
  return (
    <>
      <chakra.h1
        style={{
          fontWeight: 200,
          position: "absolute",
          top: "100px",

          height: "100px",
          width: "500px",
          fontSize: "60px",
          color: "white",
          textAlign: "center",
        }}
      >
        Contact me here
      </chakra.h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "200px" }}>
          <a href="https://github.com/lucaperullo" target="blank">
            <Button
              style={{
                marginRight: "10px",
                paddingRight: "10px",
                height: "120px",
                width: "120px",
              }}
              colorScheme={"blackAlpha"}
              leftIcon={<SiGithub style={{ fontSize: "100px" }} />}
            ></Button>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/luca-perullo/" target="blank">
            <Button
              style={{
                marginRight: "10px",
                paddingRight: "10px",
                height: "120px",
                width: "120px",
              }}
              colorScheme={"messenger"}
              leftIcon={<SiLinkedin style={{ fontSize: "100px" }} />}
            ></Button>
          </a>
          {/* Messenger */}
          <a href="" target="blank">
            <Button
              style={{
                marginRight: "10px",
                paddingRight: "10px",
                height: "120px",
                width: "120px",
              }}
              colorScheme={"whatsapp"}
              leftIcon={<SiWhatsapp style={{ fontSize: "100px" }} />}
            ></Button>
          </a>
          <chakra.h3
            style={{
              fontWeight: 100,
              marginTop: "100px",
              marginBottom: "-100px",
              fontSize: "40px",
              color: "white",
              textAlign: "center",
            }}
          >
            or
          </chakra.h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <a className="email-button" href="mailto: lucaperullo@outlook.it">
            lucaperullo@outlook.it
          </a>
          <img
            className="box-holder-luca"
            src="https://media.discordapp.net/attachments/760517500629942282/882586753691680768/AREmoji_20210901_132426_4231.png?width=671&height=671"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
