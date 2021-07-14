import { Field } from "formik";
import React from "react";
import { FormControlItem } from "../atoms";

interface Props {
  name: string;
  validateText?: (value: string) => string | undefined;
  validateNumber?: (value: number) => string | undefined;
  label: string;
  placeholder: string;
  inputType: "text" | "number" | "select" | "groupNumber";
  addon?: string;
}

const InputField = ({
  name,
  validateText,
  validateNumber,
  label,
  placeholder,
  inputType,
  addon,
}: Props): JSX.Element => {
  return (
    <Field name={name} validate={validateText || validateNumber}>
      {(x: { form: any; field: any }) => (
        <FormControlItem
          form={x.form}
          field={x.field}
          label={label}
          id={name}
          placeholder={placeholder}
          isNumber={!!validateNumber}
          inputType={inputType}
          addon={addon}
        />
      )}
    </Field>
  );
};

export default InputField;
