import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  value: number;
  handleChange: (value: number) => void;
  precision: number;
  min: number;
  max: number;
  step: number;
  width: string;
}

const ListItemInput = ({
  value,
  handleChange,
  precision,
  min,
  max,
  step,
  width,
}: Props): JSX.Element => {
  return (
    <NumberInput
      width={width}
      ml={2}
      size="sm"
      defaultValue={value}
      precision={precision}
      min={min}
      max={max}
      step={step}
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
