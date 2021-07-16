import { Box, Checkbox, Flex, Td, Tr } from "@chakra-ui/react";
import React, { Dispatch, useState } from "react";
import { useDispatch } from "react-redux";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { updateProduct } from "../../store/slices/productSlice";
import { Product } from "../../store/types/productState";
import { ListItemButton, ListItemInput } from "../atoms";
import {
  maxPriceValue,
  maxQuantityValue,
  minPriceValue,
  minQuantityValue,
  priceStepValue,
  quantityStepValue,
} from "../../utils/constants/inputValues";

const TableRow = ({ product }: { product: Product }): JSX.Element => {
  const { name, EAN, type, weight, color, quantity, price, isActive }: Product =
    product;
  const dispatch: Dispatch<
    AsyncThunkAction<Product, Product, { rejectValue: string }>
  > = useDispatch();
  const [newQuantity, setNewQuantity] = useState<number>(quantity);
  const [newPrice, setNewPrice] = useState<number>(price);
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
  const handleSavePrice = () => {
    dispatch(
      updateProduct({
        ...product,
        price: newPrice,
      })
    );
  };
  const handleChangeQuantity = (valueAsNumber: number) => {
    setNewQuantity(valueAsNumber);
  };
  const handleChangePrice = (valueAsNumber: number) => {
    setNewPrice(valueAsNumber);
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
          <Box minW="35px">{quantity}</Box>
          <ListItemInput
            value={quantity}
            handleChange={handleChangeQuantity}
            precision={0}
            min={minQuantityValue}
            max={maxQuantityValue}
            width="76px"
            step={quantityStepValue}
          />
          <ListItemButton handleClick={handleSaveQuantity} />
        </Flex>
      </Td>
      <Td>
        <Flex alignItems="center" direction="row">
          <Box minW="55px">{price.toFixed(2)}</Box>
          <ListItemInput
            value={price}
            handleChange={handleChangePrice}
            precision={2}
            min={minPriceValue}
            max={maxPriceValue}
            width="95px"
            step={priceStepValue}
          />
          <ListItemButton handleClick={handleSavePrice} />
        </Flex>
      </Td>
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
