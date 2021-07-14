import React, { FC } from "react";
import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { ScreenLayout } from "../layouts";
import { TopSection } from "../organisms";
import { SmallAddIcon } from "@chakra-ui/icons";
import { PRODUCT_CREATE_PATH } from "../../utils/constants/paths";
import { LinkItem } from "../atoms";

export const ProductsListPage: FC = (): JSX.Element => {
  return (
    <ScreenLayout>
      <TopSection justify="flex-end">
        <LinkItem to={PRODUCT_CREATE_PATH} outsideHeader={true}>
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
        </LinkItem>
      </TopSection>
      <Flex justify="center" width="100%" paddingBlock={3}>
        <Heading size="md" color="main.900">
          Products list
        </Heading>
      </Flex>
    </ScreenLayout>
  );
};
