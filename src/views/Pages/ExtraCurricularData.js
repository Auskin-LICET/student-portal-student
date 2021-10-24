import React, { useState, useEffect } from "react";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stat,
  StatLabel,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Button,
  Grid,
  GridItem,
  SimpleGrid,
  Collapse,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import ExtraCurricualarTableRow from "components/Tables/ProfessionalDevelopmentTablerow";
import { IndustrialVist } from "variables/general";
import { InplantTraining } from "variables/general";
import { GuestLecture } from "variables/general";
import { Clubs } from "variables/general";
import { OutReachActivity } from "variables/general";
import { SportsAchievements } from "variables/general";
import { Culturals } from "variables/general";
import TableRow4 from "components/Tables/TableRow6";

var resul;

function ExtraCurricularData() {
    function substudextraclub() {
        let params = new URLSearchParams();
        params.append("Clubname", document.getElementById("CLUBNID").value);
        params.append("ClubactivityID", document.getElementById("CLUBAID").value);
        params.append("Clubdateyear", document.getElementById("EDYEARID").value);
        params.append("Clubnoutcome", document.getElementById("OUTCOMID").value);
        params.append("StudentDetails", localStorage.getItem("StudentRoll"));
        params.append("status", "Pending");
        axios
        .post("http://localhost:5000/insertstudextraclub", params)
        .then((items) => {
        if (items.data == "Inserted") {
          resul = "Sucessfully Added!!";
          onOpen(resul);
        } else if (items.data == "NotInserted") {
          resul = "Error Occured!!";
          onOpen(resul);
        }
        });
      }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const textColor = useColorModeValue("gray.700", "white");
  const [data, setData] = useState([]);

  let params = new URLSearchParams();
  params.append("StudentDetails", localStorage.getItem("StudentRoll"));
  useEffect(async () => {
    axios
      .post("http://localhost:5000/ExtraClubStudentDisplay", params)
      .then((items) => {
        setData(items.data);
      });
  });

  return (
    <Flex direction="column" pt={{ base: "500px", md: "75px" }}>
      <Grid columns={{ sm: 1, md: 1, xl: 1 }} gap={4}>
        <GridItem>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Clubs
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name Of The Club</Th>
                    <Th color="gray.400">Activity</Th>
                    <Th color="gray.400">Date & Year</Th>
                    <Th color="gray.400">Outcome</Th>
                    <Th color="gray.400">Verify Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((item) => {
                    return (
                      <TableRow4
                        row1={item.club_name}
                        row2={item.activity_name}
                        row3={item.date}
                        row4={item.outcome}
                        row5={item.verified}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Collapse in={show} animateOpacity>
            <Table variant="simple" color={textColor}>
              <Tbody>
                <Tr>
                  <Td minWidth={{ sm: "180px" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Input
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder="Enter Club Name"
                        id="CLUBNID"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "180px" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Input
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder="Enter Club Activity"
                        id="CLUBAID"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "180px" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Input
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder="Enter Date and Year"
                        id="EDYEARID"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth={{ sm: "180px" }}>
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Input
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder="Enter Outcome"
                        id="OUTCOMID"
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Button
                      onClick={substudextraclub}
                      bg="orange.300"
                      alignSelf="flex-end"
                      width="fit-content"
                    >
                      Submit
                    </Button>
                    <Modal isOpen={isOpen} onClose={()=>{onClose();window.location.reload(false)}}>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Result</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{resul}</ModalBody>

                        <ModalFooter>
                          <Button colorScheme="blue" mr={3} onClick={()=>{onClose();window.location.reload(false)}}>
                            Close
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Collapse>
          </Card>
        </GridItem>
          <Button
          bg="orange.300"
          marginLeft="auto"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
        <GridItem>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Outreach Activity
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Activity</Th>
                    <Th color="gray.400">Date & Year</Th>
                    <Th color="gray.400">Outcome</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {OutReachActivity.map((row) => {
                    return (
                      <ExtraCurricualarTableRow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Button bg="orange.300" alignSelf="flex-end" width="fit-content">
              <AddIcon w={4} h={4} me="3" />
              Add
            </Button>
          </Card>
        </GridItem>
        <GridItem>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Sports Achievements
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name Of The Sport</Th>
                    <Th color="gray.400">
                      Representation <br />
                      (ZONES/DISTRICT/NATIONAL/INTER-NATIONAL)
                    </Th>
                    <Th color="gray.400">Position Secured</Th>
                    <Th color="gray.400">Date & Year</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {SportsAchievements.map((row) => {
                    return (
                      <ExtraCurricualarTableRow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                        row4={row.row4}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Button bg="orange.300" alignSelf="flex-end" width="fit-content">
              <AddIcon w={4} h={4} me="3" />
              Add
            </Button>
          </Card>
        </GridItem>
        <GridItem>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Culturals
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>
                  <Tr my=".8rem" pl="0px" color="gray.400">
                    <Th color="gray.400">Name Of The Event Participated</Th>
                    <Th color="gray.400">Date and Year</Th>
                    <Th color="gray.400">Position Secured</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Culturals.map((row) => {
                    return (
                      <ExtraCurricualarTableRow
                        row1={row.row1}
                        row2={row.row2}
                        row3={row.row3}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Button bg="orange.300" alignSelf="flex-end" width="fit-content">
              <AddIcon w={4} h={4} me="3" />
              Add
            </Button>
          </Card>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default ExtraCurricularData;
