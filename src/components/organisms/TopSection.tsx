import React from "react";
import { Flex } from "@chakra-ui/react";

interface Props {
  children?: JSX.Element;
  justify: string;
}

const TopSection = ({ children, justify }: Props): JSX.Element => {
  return (
    <Flex justify={justify} width="100%" paddingBlock={3}>
      {children || null}
    </Flex>
  );
};

export default TopSection;
