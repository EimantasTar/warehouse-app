import React, { FC } from "react";
import { ScreenLayout } from "../layouts";
import { Heading, Stack } from "@chakra-ui/react";
import { ProductInputForm, TopSection } from "../organisms";

export const ProductCreatePage: FC = (): JSX.Element => {
  return (
    <ScreenLayout>
      <TopSection justify="center">
        <Heading size="md" color="main.800">
          Create new product
        </Heading>
      </TopSection>
      <Stack
        direction="column"
        align="center"
        maxW="800px"
        minW={{ base: "400px", md: "700px" }}
        border="1px solid"
        borderColor="main.100"
        paddingY={5}
        paddingX={{ base: 50, md: 100 }}
      >
        <ProductInputForm />
      </Stack>
      <TopSection justify="center" />
    </ScreenLayout>
  );
};
