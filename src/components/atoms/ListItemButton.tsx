import { IconButton } from "@chakra-ui/react";
import React from "react";
import { GrUpdate } from "react-icons/gr";

interface Props {
  handleClick: () => void;
}

const ListItemButton = ({ handleClick }: Props): JSX.Element => {
  return (
    <IconButton
      size="xs"
      variant="outline"
      colorScheme="green"
      aria-label="Save"
      fontSize="10px"
      icon={<GrUpdate />}
      ml={1}
      onClick={handleClick}
    />
  );
};

export default ListItemButton;
