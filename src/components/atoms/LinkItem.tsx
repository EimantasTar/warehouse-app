import { Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import React, { FC } from "react";

interface Props {
  to: string;
  outsideHeader: boolean;
}

export const LinkItem: FC<Props> = (props) => {
  const { children, to = "/", outsideHeader } = props;
  const { pathname } = useLocation();
  return (
    <Text
      display="block"
      paddingY={outsideHeader ? { base: 0, md: 0 } : { base: 0, md: 6 }}
      paddingX={outsideHeader ? { base: 3, md: 3 } : { base: 0, md: 3 }}
      bgColor={{
        base: "inherit",
        md: pathname === to ? "main.900" : "inherit",
      }}
      textDecor={{
        base: pathname === to ? "underline" : "inherit",
        md: "inherit",
      }}
      _hover={
        outsideHeader
          ? undefined
          : {
              textDecor: "underline",
            }
      }
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};
