import { Box, Checkbox, Flex, Td, Tr } from "@chakra-ui/react";
import React, { Dispatch, useState } from "react";
import { useDispatch } from "react-redux";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { updateProduct } from "../../store/slices/productSlice";
import { Product } from "../../store/types/productState";
import { ListItemButton, ListItemInput } from "../atoms";

const TableRow = ({ product }: { product: Product }): JSX.Element => {
  const {
    name,
    EAN,
    type,
    weight,
    color,
    quantity,
    price,
    isActive,
  }: {
    name: string;
    EAN: number;
    type: string;
    weight: number;
    color: string;
    quantity: number;
    price: number;
    isActive: boolean;
  } = product;
  const dispatch: Dispatch<
    AsyncThunkAction<Product, Product, { rejectValue: string }>
  > = useDispatch();
  const [newQuantity, setNewQuantity] = useState<number>(quantity);
  const handleChangeActive = () => {
    dispatch(
      updateProduct({
        ...product,
        isActive: !isActive,
      })
    );
  };
  const handleSaveQuantity = () => {
    dispatch(
      updateProduct({
        ...product,
        quantity: newQuantity,
      })
    );
  };
  const handleChangeQuantity = (valueAsNumber: number) => {
    setNewQuantity(valueAsNumber);
  };

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{EAN}</Td>
      <Td>{type}</Td>
      <Td>{weight}</Td>
      <Td>{color}</Td>
      <Td>
        <Flex alignItems="center" direction="row">
          <Box width="30px">{quantity}</Box>
          <ListItemInput
            quantity={quantity}
            handleChange={handleChangeQuantity}
          />
          <ListItemButton handleClick={handleSaveQuantity} />
        </Flex>
      </Td>
      <Td>{price}</Td>
      <Td>
        <Checkbox
          size="lg"
          colorScheme="green"
          isChecked={isActive}
          onChange={handleChangeActive}
        />
      </Td>
    </Tr>
  );
};

export default TableRow;
