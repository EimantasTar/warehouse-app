import React, { FC } from "react";
import { useParams } from "react-router-dom";

const ProductEditScreen: FC = (): JSX.Element => {
  const { id }: { id: string | undefined } = useParams();
  return (
    <div>
      <header className="App-header">
        <p>ProductEditScreen {id}</p>
      </header>
    </div>
  );
};

export default ProductEditScreen;
