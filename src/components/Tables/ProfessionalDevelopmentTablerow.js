import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

function ProfessionalDevelopmenttablerow(props) {
  const { row1, row2, row3 } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "5rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Input
              borderRadius="5px"
              fontSize="sm"
              type="text"
              placeholder={row1}
            />
          </Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "5rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Input
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder={row2}
          />
        </Flex>
      </Td>
      <Td minWidth={{ sm: "5rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Input
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder={row3}
          />
        </Flex>
      </Td>
      {/* <Td minWidth={{ sm: "5rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Input
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder={row4}
          />
        </Flex>
      </Td> */}
      {/* <Td minWidth={{ sm: "5rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Input
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder={row5}
          />
        </Flex>
      </Td> */}
    </Tr>
  );
}
function ProfessionalDevelopmenttablerow3(props) {
  const { row1, row2, row3 } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "5rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Input
              borderRadius="5px"
              fontSize="sm"
              type="text"
              placeholder={row1}
            />
          </Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "5rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Input
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder={row2}
          />
        </Flex>
      </Td>
      <Td minWidth={{ sm: "5rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Input
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder={row3}
          />
        </Flex>
      </Td>
      {/* <Td minWidth={{ sm: "5rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Input
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder={row4}
          />
        </Flex>
      </Td> */}
      {/* <Td minWidth={{ sm: "5rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Input
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder={row5}
          />
        </Flex>
      </Td> */}
    </Tr>
  );
}

export default ProfessionalDevelopmenttablerow;
