import React, { FC } from "react";
import { Flex } from "@chakra-ui/react";

interface Props {
  justify: string;
}

export const TopSection: FC<Props> = ({ children, justify }): JSX.Element => {
  return (
    <Flex justify={justify} width="100%" paddingBlock={3}>
      {children}
    </Flex>
  );
};
