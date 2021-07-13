import React, { FC } from "react";
import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { PRODUCT_CREATE_PATH } from "../../utils/constants/paths";
import { SmallAddIcon } from "@chakra-ui/icons";
import { MenuItem } from "../atoms";
import { ScreenLayout } from "../layouts";

export const ProductsListPage: FC = (): JSX.Element => {
  return (
    <ScreenLayout>
      <Flex justify="flex-end" width="100%" paddingBlock={3}>
        <MenuItem to={PRODUCT_CREATE_PATH} outsideHeader={true}>
          <IconButton
            aria-label="Add product"
            variant="solid"
            bgColor="white"
            color="green.500"
            borderColor="green.500"
            borderWidth="1px"
            icon={<SmallAddIcon />}
            isRound={false}
            size="lg"
            _hover={{
              bg: "green.500",
              borderColor: "green.500",
              color: "white",
            }}
            _active={{
              bg: "green.800",
              borderColor: "green.800",
            }}
          />
        </MenuItem>
      </Flex>
      <Flex justify="center" width="100%" paddingBlock={3}>
        <Heading size="md" color="main.900">
          Products list
        </Heading>
      </Flex>
    </ScreenLayout>
  );
};
