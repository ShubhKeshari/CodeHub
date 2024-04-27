"use client";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutAction } from "../redux/authReducer/action";

const Links = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "DashBoard", link: "/dashboard" },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  //For logout
  const { token, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={8}>
            <Box>Logo</Box>
            {Links.map((el) => {
              return (
                <NavLink to={el.link} key={el.id}>
                  {el.name}
                </NavLink>
              );
            })}
          </Flex>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {isAuth ? (
                <Button
                  size={"sm"}
                  bg={"crimson"}
                  color={"white"}
                  as={"a"}
                  onClick={()=>dispatch(LogoutAction())}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  size={"sm"}
                  bg={"crimson"}
                  color={"white"}
                  as={"a"}
                  href="/login"
                >
                  Login
                </Button>
              )}

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
