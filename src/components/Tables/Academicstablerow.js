import {
  Avatar,
  Badge,
  Button,
  FormControl,
  Input,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function Academicstablerow(props) {
  const { row1 } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "225px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {row1}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "225px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <FormControl>
            <Input
              borderRadius="5px"
              fontSize="sm"
              type="text"
              placeholder={row1}
            />
          </FormControl>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "225px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <FormControl>
            <Input
              borderRadius="5px"
              fontSize="sm"
              type="text"
              placeholder={row1}
            />
          </FormControl>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "225px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <FormControl>
            <Input
              borderRadius="5px"
              fontSize="sm"
              type="text"
              placeholder={row1}
            />
          </FormControl>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "225px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <FormControl>
            <Input
              borderRadius="5px"
              fontSize="sm"
              type="text"
              placeholder={row1}
            />
          </FormControl>
        </Flex>
      </Td>
    </Tr>
  );
}

export default Academicstablerow;
