import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "./pages/Navbar/Navbar";

const WrappedApp = (
  <ChakraProvider>
    <React.StrictMode>
      <Navbar />
    </React.StrictMode>
  </ChakraProvider>
);

export { WrappedApp };
