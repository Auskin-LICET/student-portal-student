import React from "react";
import axios from "axios";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  Input,
  useColorModeValue,
  Stat,
  StatLabel,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import InternationalTableRow from "components/Tables/InternationalTableRow";
import { International } from "variables/general";

function InternationalData() {
  function substudinter(){
    console.log("HELLO");
    let params = new URLSearchParams();
    params.append("Campus", document.getElementById("CampusID").value);
    params.append("DateYear", document.getElementById("DYID").value);
    params.append("Project", document.getElementById("ProjectID").value);
    params.append("Outcome", document.getElementById("OutcomeID").value);
    params.append("PersD", document.getElementById("PDID").value);
    params.append("ForLCC", document.getElementById("FLCCID").value);
    params.append("StudentDetails",localStorage.getItem("StudentRoll"));
    axios.post("http://localhost:5000/insertstudinter", params);
  }
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "500px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Summer Program
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Campus</Th>
                  <Th color="gray.400">Date and Year</Th>
                  <Th color="gray.400">Project</Th>
                  <Th color="gray.400">Outcome</Th>
                  <Th color="gray.400">Personal Development</Th>
                  <Th color="gray.400">
                    Foreign Language Courses Completed or Pursuing
                  </Th>
                  <Th color="gray.400">Submit Details</Th>
                </Tr>
              </Thead>

              <Tbody>
              <Tr>
      <Td minWidth={{ sm: "180px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Input
              borderRadius="5px"
              fontSize="sm"
              type="text"
              placeholder="Enter Campus"
              id = "CampusID"
            />
          </Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "180px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Input
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder="Enter Date and Year"
            id = "DYID"
          />
        </Flex>
      </Td>
      <Td minWidth={{ sm: "180px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Input
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder="Project"
            id = "ProjectID"
          />
        </Flex>
      </Td>
      <Td minWidth={{ sm: "180px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Input
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder="Outcome"
            id = "OutcomeID"
          />
        </Flex>
      </Td>
      <Td minWidth={{ sm: "180px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Input
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder="Personal Development"
            id = "PDID"
          />
        </Flex>
      </Td>
      <Td minWidth={{ sm: "180px" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Input
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder="Foreign Language Courses Completed or Pursuing"
            id = "FLCCID"
          />
        </Flex>
      </Td>
      <Td>
      <Button onClick={substudinter} bg="orange.300" alignSelf="flex-end" width="fit-content">
            Submit
          </Button>
    </Td>
    </Tr>
       </Tbody>
        </Table>
          </CardBody>

          <Button bg="orange.300" alignSelf="flex" width="fit-content">
            <AddIcon w={4} h={4} me="3" />
            Add
          </Button>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}

export default InternationalData;
