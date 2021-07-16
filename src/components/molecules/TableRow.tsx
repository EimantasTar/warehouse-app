import { Checkbox, Td, Tr } from "@chakra-ui/react";
import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { updateProduct } from "../../store/slices/productSlice";
import { Product } from "../../store/types/productState";

const TableRow = ({ product }: { product: Product }): JSX.Element => {
  const dispatch: Dispatch<
    AsyncThunkAction<Product, Product, { rejectValue: string }>
  > = useDispatch();
  const handleChange = () => {
    dispatch(
      updateProduct({
        ...product,
        isActive: !product.isActive,
      })
    );
  };

  return (
    <Tr>
      <Td>{product.name}</Td>
      <Td>{product.EAN}</Td>
      <Td>{product.type}</Td>
      <Td>{product.weight}</Td>
      <Td>{product.color}</Td>
      <Td>{product.quantity}</Td>
      <Td>{product.price}</Td>
      <Td>
        <Checkbox
          size="lg"
          colorScheme="green"
          isChecked={product.isActive}
          onChange={handleChange}
        />
      </Td>
    </Tr>
  );
};

export default TableRow;
