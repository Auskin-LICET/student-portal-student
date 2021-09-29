import React from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import { tablesTableData3 } from "variables/general";

function ProfessionalDevelopment() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card mb="1rem">
        <CardBody>
          <Flex flexDirection="column" align="center" justify="center" w="100%">
            <Text fontSize="xl" color={textColor} fontWeight="bold" mr="auto">
              Academic Results
            </Text>
            <FormControl id="dept" display="inline" w="50%">
              <FormLabel>Department</FormLabel>
              <Select placeholder="Select Department">
                <option>Computer Science Engineering (CSE)</option>
                <option>Information technology (IT)</option>
                <option>
                  Electronics and Communications Engineering (ECE)
                </option>
                <option>Electrical & Electronics Engineering (EEE)</option>
                <option>Mechanical Engineering A (MECH A)</option>
                <option>Mechanical Engineering B (MECH B)</option>
              </Select>
            </FormControl>
            <br />
            <FormControl id="batch" display="inline" w="50%">
              <FormLabel>Batch</FormLabel>
              <Select placeholder="Select Batch">
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </Select>
            </FormControl>
            <br />
          </Flex>
        </CardBody>
      </Card>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Students List
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th color="gray.400">S.No.</Th>
                <Th pl="0px" color="gray.400">
                  Name
                </Th>
                <Th color="gray.400">Resitration Number</Th>
                <Th color="gray.400">Roll Number</Th>
                <Th color="gray.400">Email</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData3.map((row) => {
                return (
                  <TablesTableRow
                    sno={row.sno}
                    name={row.name}
                    reg={row.reg}
                    email={row.email}
                    roll={row.roll}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default ProfessionalDevelopment;
