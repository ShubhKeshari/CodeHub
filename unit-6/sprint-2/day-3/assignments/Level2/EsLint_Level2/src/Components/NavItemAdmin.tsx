"use client";

import { Box, Flex, Icon, FlexProps } from "@chakra-ui/react";

import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

export const NavItemAdmin = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
         
          bg: "gray.300",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};
