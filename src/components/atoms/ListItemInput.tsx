import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ListItemInput = ({
  quantity,
  handleChange,
}: {
  quantity: number;
  handleChange: (value: number) => void;
}): JSX.Element => {
  return (
    <NumberInput
      width="76px"
      ml={3}
      size="sm"
      defaultValue={quantity}
      min={0}
      onChange={(valueAsString, valueAsNumber) => handleChange(valueAsNumber)}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper bg="green.200" _active={{ bg: "green.300" }}>
          <Text>+</Text>
        </NumberIncrementStepper>
        <NumberDecrementStepper bg="pink.200" _active={{ bg: "pink.300" }}>
          <Text>-</Text>
        </NumberDecrementStepper>
      </NumberInputStepper>
    </NumberInput>
  );
};

export default ListItemInput;
