import React, { FC } from "react";
import { useParams } from "react-router-dom";

const ProductPreviewScreen: FC = (): JSX.Element => {
  let { id }: { id: string | undefined } = useParams();
  return (
    <div>
      <header className="App-header">
        <p>ProductPreviewScreen {id}</p>
      </header>
    </div>
  );
};

export default ProductPreviewScreen;
