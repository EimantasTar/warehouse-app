import React, { FC } from "react";
import { Stack } from "@chakra-ui/react";

interface Props {}

export const ScreenLayout: FC<Props> = ({ children }) => {
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
