import { Field } from "formik";
import React from "react";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import {
  GroupInputItem,
  NumberInputItem,
  SelectInputItem,
  TextInputItem,
} from "../atoms";

interface Props {
  name: string;
  validateText?: (value: string) => string | undefined;
  validateNumber?: (value: number) => string | undefined;
  label: string;
  placeholder: string;
  inputType: "text" | "number" | "select" | "groupNumber";
  addon?: string;
  selectItems?: string[];
}

const InputField = ({
  name,
  validateText,
  validateNumber,
  label,
  placeholder,
  inputType,
  addon,
  selectItems,
}: Props): JSX.Element => {
  return (
    <Field name={name} validate={validateText || validateNumber}>
      {(x: { form: any; field: any }) => (
        <FormControl
          pb={5}
          isRequired
          isInvalid={x.form.errors[name] && x.form.touched[name]}
        >
          <FormLabel>{label}</FormLabel>
          {inputType === "number" && (
            <NumberInputItem
              form={x.form}
              fieldName={x.field.name}
              placeholder={placeholder}
              id={name}
            />
          )}
          {inputType === "select" && selectItems && (
            <SelectInputItem
              field={x.field}
              placeholder={placeholder}
              id={name}
              selectItems={selectItems}
            />
          )}
          {inputType === "text" && (
            <TextInputItem
              field={x.field}
              placeholder={placeholder}
              id={name}
            />
          )}
          {inputType === "groupNumber" && addon && (
            <GroupInputItem
              fieldName={x.field.name}
              form={x.form}
              placeholder={placeholder}
              id={name}
              addon={addon}
            />
          )}
          <FormErrorMessage>{x.form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default InputField;
