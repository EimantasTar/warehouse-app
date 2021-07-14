import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { ScreenLayout } from "../layouts";

const ProductEditPage: FC = (): JSX.Element => {
  const { id }: { id: string | undefined } = useParams();
  return (
    <ScreenLayout>
      <p>ProductEditScreen {id}</p>
    </ScreenLayout>
  );
};

export default ProductEditPage;
