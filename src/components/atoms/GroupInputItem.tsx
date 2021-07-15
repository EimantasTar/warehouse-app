import {
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  fieldName: string;
  form: any;
  placeholder: string;
  id: string;
  addon: string;
}

const GroupInputItem = ({
  fieldName,
  form,
  placeholder,
  id,
  addon,
}: Props): JSX.Element => {
  return (
    <InputGroup>
      <NumberInput
        onChange={(valueAsString, valueAsNumber) =>
          form.setFieldValue(fieldName, valueAsNumber)
        }
        onBlur={() => form.setFieldTouched(fieldName)}
        id={id}
      >
        <NumberInputField placeholder={placeholder} />
      </NumberInput>
      <InputRightAddon>
        <Text>{addon}</Text>
      </InputRightAddon>
    </InputGroup>
  );
};

export default GroupInputItem;
