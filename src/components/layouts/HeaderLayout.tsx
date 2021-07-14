import React from "react";
import { Flex } from "@chakra-ui/react";

const HeaderLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ "2xl": "1600px" }}
      m="0 auto"
    >
      {children}
    </Flex>
  );
};

export default HeaderLayout;
