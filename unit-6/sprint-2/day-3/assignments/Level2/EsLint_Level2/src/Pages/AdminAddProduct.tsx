import {
  Box,
  Drawer,
  DrawerContent,
  Select,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SidebarContentAdmin } from "../Components/SidebarContentAdmin";
import { MobileNavAdmin } from "../Components/MobileNavAdmin";
import AdminAddWomenForm from "../Components/AdminAddWomenForm";
import AdminAddMenForm from "../Components/AdminAddMenForm";
import AdminAddKidForm from "../Components/AdminAddKidForm";

const AddProducts: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const [currGender, setGender] = useState<string>("Men");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue == "Women") {
      setGender("Women");
    } else if (selectedValue == "Kid") {
      setGender("Kid");
    } else {
      setGender("Men");
    }
  };
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContentAdmin
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContentAdmin onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}

      <MobileNavAdmin onOpen={onOpen} pos="sticky" top="0px" />

      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}

        <Select
          defaultValue="Men"
          placeholder="Add Men's Product"
          width="25%"
          onChange={handleChange}
          mt="24px"
          ml="24px"
          backgroundColor={useColorModeValue("white", "gray.900")}
          focusBorderColor={colorMode === "light" ? "gray.700" : "white"}
        >
          <option value="Women">Add Women's Product</option>
          <option value="Kid">Add Kid's Product</option>
        </Select>
        <Box width="50%">
          {currGender == "Men" ? (
            <AdminAddMenForm />
          ) : currGender == "Women" ? (
            <AdminAddWomenForm />
          ) : (
            <AdminAddKidForm />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AddProducts;
