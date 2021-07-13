import React from "react";

export const ProductDetails = ({ id }: { id: string }): JSX.Element => {
  return (
    <div>
      <p>ProductDetails ID: {id}</p>
    </div>
  );
};
