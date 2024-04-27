import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  Collapse,
  useDisclosure,
  useMediaQuery,
  useColorModeValue,
  useColorMode,
  Button,
  Image,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  chakra,
  VisuallyHidden,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import FusionLogo from "../assets/FashionFusionLogo.png";
import DarkFusionLogo from "../assets/FashionFusionDarkLogo.png";
import { CiUser, CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
type DrawerPlacement = "top" | "right" | "bottom" | "left";
const Navbar: React.FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [placement] = useState<DrawerPlacement>("left");
  const [isNormalScreen] = useMediaQuery("(min-width: 768px)"); // Check if screen width is greater than or equal to 768px
  const { colorMode, toggleColorMode } = useColorMode();
  const [cartLength, setCartLength] = useState(0);
  interface SocialButtonProps {
    label: string;
    href: string;
    children: React.ReactNode;
  }

  const listOfLinks = [
    {
      to: "/",
      displayText: "Home",
    },
    {
      to: "/men",
      displayText: "Men",
    },
    {
      to: "/women",
      displayText: "Women",
    },
    {
      to: "/kids",
      displayText: "Kids",
    },
    {
      to: "/cart",
      displayText: "Cart",
    },
    {
      to: "/wishlist",
      displayText: "wishlist",
    },
  ];

  const SocialButton = ({ children, label, href }: SocialButtonProps) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "white")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  useEffect(() => {
    // Fetch cart data from API
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const response = await fetch("https://mock-server-app-1.onrender.com/cart");
      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }
      const data = await response.json();
      // Assuming your API returns cart data in the form of an array
      setCartLength(data.length);
    } catch (error) {
      console.error("Error fetching cart data:", error);
      // Optionally, you can set a default cart length or handle the error in another way
      setCartLength(0); // Set cart length to 0 or handle the error
    }
  };
  
  return (
    <Box
      bg={useColorModeValue("white", "black")}
      px={4}
      position={"sticky"}
      top={0}
      zIndex={1}
    >
      <Flex minWidth="max-content" alignItems="center" gap="8" h={28}>
        {isNormalScreen ? (
          <Button bg="whiteAlpha.200" onClick={onToggle}>
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </Button>
        ) : (
          <Button bg="white" onClick={onToggle}>
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </Button>
        )}
        <Spacer />
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <Link to="/loginPage">
                <Flex alignItems="center" gap={3}>
                  Log in <CiUser />
                </Flex>
              </Link>
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing={5} fontSize={20} fontWeight={"semibold"}>
                <p>New Arrivals</p>
                {listOfLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    style={({ isActive }) =>
                      isActive ? { color: "black" } : { color: "gray" }
                    }
                  >
                    {link.displayText}
                  </NavLink>
                ))}
              </Stack>

              <Stack direction={"row"} spacing={6} marginTop={"200px"}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
              <Stack direction={"row"} spacing={6} marginTop={5} >
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaGoogle />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaFacebook />
                </SocialButton>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Flex marginLeft={{ base: "auto", md: "auto", lg: "200px" }}>
          <Link to="/">
            {" "}
            <Image
              src={colorMode === "light" ? FusionLogo : DarkFusionLogo}
              alt="Fusion Logo"
              h={16}
            />
          </Link>
        </Flex>
        <Spacer />
        <Box
          display={!isOpen && isNormalScreen ? "flex" : "none"} // Show menu items only when sidebar is closed and screen is normal
          alignItems="center"
          justifyContent="space-between"
          gap={3}
          w={{ base: "full", md: "auto" }}
        >
          <Link to="/LoginPage">
            <Box fontSize="xx-large">
              <CiUser />
            </Box>
          </Link>
          <Link to="">
            <Box fontSize="xx-large">
              <CiSearch />
            </Box>
          </Link>
          <Link to="/wishlist">
            <Box fontSize="xx-large">
              <CiHeart />
            </Box>
          </Link>
          <Link to="/cart">
          <Box fontSize="xx-large" position="relative">
  <CiShoppingCart />
  {cartLength > 0 && ( // Only show cart length if it's greater than 0
    <Box
      position="absolute"
      top="-8px"
      right="-8px"
      bg="red.400"
      color="white"
      borderRadius="full"
      width="20px"
      height="20px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="sm"
    >
      {cartLength}
    </Box>
  )}
</Box>

  </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
        <Collapse in={isOpen} animateOpacity>
          <Box
            display={isNormalScreen ? "none" : "flex"} // Show menu items only for small screens when sidebar is open
            alignItems="center"
            justifyContent="space-between"
            w={{ base: "full", md: "auto" }}
            flexDirection="column"
            transition="height 0.3s ease"
            height={isOpen ? "auto" : "0"}
            overflowY={isOpen ? "auto" : "hidden"}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="">Contact</Link>
          </Box>
        </Collapse>
      </Flex>
    </Box>
  );
};

export default Navbar;
