import { NumberInput, NumberInputField } from "@chakra-ui/react";
import React from "react";

interface Props {
  form: any;
  fieldName: string;
  placeholder: string;
  id: string;
}

const NumberInputItem = ({
  fieldName,
  form,
  placeholder,
  id,
}: Props): JSX.Element => {
  return (
    <NumberInput
      onChange={(valueAsString, valueAsNumber) =>
        form.setFieldValue(fieldName, valueAsNumber)
      }
      onBlur={() => form.setFieldTouched(fieldName)}
      id={id}
    >
      <NumberInputField placeholder={placeholder} />
    </NumberInput>
  );
};

export default NumberInputItem;
