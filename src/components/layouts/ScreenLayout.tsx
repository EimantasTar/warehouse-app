import React from "react";
import { Stack } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ScreenLayout = ({ children }: Props): JSX.Element => {
  return (
    <Stack
      direction="column"
      align="center"
      maxW={{ "2xl": "1600px" }}
      m="0 auto"
      border="1px solid"
      borderColor="main.100"
      mt={3}
    >
      {children}
    </Stack>
  );
};

export default ScreenLayout;
