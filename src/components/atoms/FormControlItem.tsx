import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import productTypes from "../../utils/data/products";

interface Props {
  form: any;
  field: any;
  label: string;
  id: string;
  placeholder: string;
  isNumber: boolean;
  inputType: "text" | "number" | "select" | "groupNumber";
  addon?: string;
}

const FormControlItem = ({
  form,
  field,
  label,
  id,
  placeholder,
  inputType,
  addon,
}: Props): JSX.Element => {
  return (
    <FormControl
      pb={5}
      isRequired
      isInvalid={form.errors[id] && form.touched[id]}
    >
      <FormLabel>{label}</FormLabel>
      {inputType === "number" && (
        <NumberInput
          onChange={(valueAsString, valueAsNumber) =>
            form.setFieldValue(field.name, valueAsNumber)
          }
          onBlur={() => form.setFieldTouched(field.name)}
          id="EAN"
        >
          <NumberInputField placeholder={placeholder} />
        </NumberInput>
      )}
      {inputType === "select" && (
        <Select {...field} id={id} placeholder={placeholder}>
          {productTypes.map((name: string) => (
            <option key={name}>{name}</option>
          ))}
        </Select>
      )}
      {inputType === "text" && (
        <Input {...field} id={id} placeholder={placeholder} />
      )}
      {inputType === "groupNumber" && (
        <InputGroup>
          <NumberInput
            onChange={(valueAsString, valueAsNumber) =>
              form.setFieldValue(field.name, valueAsNumber)
            }
            onBlur={() => form.setFieldTouched(field.name)}
            id={id}
          >
            <NumberInputField placeholder={placeholder} />
          </NumberInput>
          <InputRightAddon>
            <Text>{addon}</Text>
          </InputRightAddon>
        </InputGroup>
      )}
      <FormErrorMessage>{form.errors[id]}</FormErrorMessage>
    </FormControl>
  );
};

export default FormControlItem;
