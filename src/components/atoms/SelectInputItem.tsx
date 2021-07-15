import { Select } from "@chakra-ui/react";
import React from "react";

interface Props {
  field: any;
  placeholder: string;
  id: string;
  selectItems: string[];
}

const SelectInputItem = ({
  field,
  placeholder,
  id,
  selectItems,
}: Props): JSX.Element => {
  return (
    <Select {...field} id={id} placeholder={placeholder}>
      {selectItems.map((name: string) => (
        <option key={name}>{name}</option>
      ))}
    </Select>
  );
};

export default SelectInputItem;
