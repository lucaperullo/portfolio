import { Center, Stack, Button } from "@chakra-ui/react";
import React from "react";

import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
export default function Contacts() {
  return (
    <>
      <img
        className="contacts-swosh"
        src="https://media.discordapp.net/attachments/702215602106007573/882408179156279326/swoosh-removebg.png?width=671&height=671"
        alt=""
      />

      <Center>
        {/* Facebook */}
        <Button
          style={{ marginRight: "10px" }}
          colorScheme={"blackAlpha"}
          leftIcon={<SiGithub />}
        ></Button>

        {/* LinkedIn */}
        <Button
          style={{ marginRight: "10px" }}
          colorScheme={"messenger"}
          leftIcon={<SiLinkedin />}
        ></Button>

        {/* Messenger */}
        <Button
          style={{ marginRight: "10px" }}
          colorScheme={"whatsapp"}
          leftIcon={<SiWhatsapp />}
        ></Button>
      </Center>
    </>
  );
}
