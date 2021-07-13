import React, { FC } from "react";
import { useParams } from "react-router-dom";

export const ProductEditPage: FC = (): JSX.Element => {
  const { id }: { id: string | undefined } = useParams();
  return (
    <div>
      <header className="App-header">
        <p>ProductEditScreen {id}</p>
      </header>
    </div>
  );
};
