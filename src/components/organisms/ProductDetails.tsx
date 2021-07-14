import React from "react";

const ProductDetails = ({ id }: { id: string }): JSX.Element => {
  return (
    <div>
      <p>ProductDetails ID: {id}</p>
    </div>
  );
};

export default ProductDetails;
