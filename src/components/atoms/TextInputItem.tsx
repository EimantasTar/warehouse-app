import { Input } from "@chakra-ui/react";
import React from "react";

interface Props {
  field: any;
  placeholder: string;
  id: string;
}

const TextInputItem = ({ field, placeholder, id }: Props): JSX.Element => {
  return <Input {...field} id={id} placeholder={placeholder} />;
};

export default TextInputItem;
