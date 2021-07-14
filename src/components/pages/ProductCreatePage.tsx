import React, { FC } from "react";
import { ScreenLayout } from "../layouts";
import { Heading } from "@chakra-ui/react";
import { TopSection } from "../organisms";

export const ProductCreatePage: FC = (): JSX.Element => {
  return (
    <ScreenLayout>
      <TopSection justify="center">
        <Heading size="md" color="main.800">
          Create new product
        </Heading>
      </TopSection>
    </ScreenLayout>
  );
};
