// import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  CheckboxGroup,
  VStack,
  Checkbox,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function FilterSection() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("white", "gray.800")}
    >
      <Container>
        <Accordion
          allowMultiple
          width="100%"
          maxW="lg"
          rounded="lg"
          defaultIndex={[0, 1, 2]}
        >
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Collections</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <CheckboxGroup defaultValue={[""]}>
                <VStack align="start">
                  <Checkbox value="T-Shirts">T-SHIRT</Checkbox>
                  <Checkbox value="Shirt">SHIRT</Checkbox>
                  <Checkbox value="OverShirt">OVERSHIRT</Checkbox>
                  <Checkbox value="Shorts">SHORTS</Checkbox>
                  <Checkbox value="Trousers">CHINOS</Checkbox>
                  <Checkbox value="Bags">BAGS</Checkbox>
                  <Checkbox value="Hoodie">HOODIES</Checkbox>
                </VStack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Size</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <CheckboxGroup defaultValue={[""]}>
                <VStack align="start">
                  <Checkbox value="M">M</Checkbox>
                  <Checkbox value="L">L</Checkbox>
                  <Checkbox value="XL">XL</Checkbox>
                  <Checkbox value="XXL">XXL</Checkbox>
                </VStack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="md">Color</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <CheckboxGroup defaultValue={[""]}>
                <VStack align="start">
                  <Checkbox value="Black">BLACK</Checkbox>
                  <Checkbox value="White">WHITE</Checkbox>
                  <Checkbox value="Light Blue">LIGHT BLUE</Checkbox>
                  <Checkbox value="Dark Blue">DARK BLUE</Checkbox>
                  <Checkbox value="Olive">OLIVE</Checkbox>
                  <Checkbox value="Navy">NAVY</Checkbox>
                </VStack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>

        </Accordion>
      </Container>
    </Flex>
  );
}
