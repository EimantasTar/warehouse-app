import React, { FC } from "react";
import { ScreenLayout } from "../layouts";
import { Flex, Heading } from "@chakra-ui/react";

export const ProductCreatePage: FC = (): JSX.Element => {
  return (
    <ScreenLayout>
      <Flex justify="center" width="100%" paddingBlock={3}>
        <Heading size="md" color="main.900">
          Create new product
        </Heading>
      </Flex>
    </ScreenLayout>
  );
};
