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
  Button,
  SimpleGrid,
  Collapse,
  SlideFade,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import ProfessionalDevelopmenttablerow from "components/Tables/ProfessionalDevelopmentTablerow";
// import { IndustrialVist } from "variables/general";
import { InplantTraining } from "variables/general";
import { GuestLecture } from "variables/general";
import { MotivationalTalks } from "variables/general";
import { Internships } from "variables/general";
import { ValueAddedCourse } from "variables/general";
import { Workshop } from "variables/general";
import { Webinar } from "variables/general";
import { Competition } from "variables/general";
import { PlacementTraining } from "variables/general";
import { MiniProject } from "variables/general";
import { FinalProject } from "variables/general";
import { Publications } from "variables/general";
import TableRow3 from "components/Tables/TableRow3";
import TableRow4 from "components/Tables/TableRow4";
import TableRow5 from "components/Tables/TableRow5";


var resul;

function ProfessionalDevelopmentData(){

 

  function substudinter() {
    let params = new URLSearchParams();
    params.append("Industry", document.getElementById("IndustryID").value);
    params.append("DateYear", document.getElementById("Date_and_year").value);
    params.append("Outcome", document.getElementById("OutcomeID").value);
    params.append("status", "Pending");


    params.append("Industry", document.getElementById("IndustryID2").value);
    params.append("DateYear", document.getElementById("Date_and_year2").value);
    params.append("Outcome", document.getElementById("OutcomeID2").value);
    params.append("status", "Pending");


    params.append("Topic", document.getElementById("Topic").value);
    params.append("DateYear", document.getElementById("Date_and_year3").value);
    params.append("Resource Person", document.getElementById("Resource_perason").value);
    params.append("Outcome", document.getElementById("OutcomeID3").value);
    params.append("status", "Pending");


    params.append("Topic", document.getElementById("Topic2").value);
    params.append("DateYear", document.getElementById("Date_and_year4").value);
    params.append("Resource Person", document.getElementById("Resource_perason2").value);
    params.append("Outcome", document.getElementById("OutcomeID4").value);
    params.append("status", "Pending");

    params.append("Company", document.getElementById("Company").value);
    params.append("Duration", document.getElementById("Duration").value);
    params.append("Date", document.getElementById("Date").value);
    params.append("Reference", document.getElementById("Reference").value);
    params.append("status", "Pending");

    params.append("Course Name", document.getElementById("Course_name").value);
    params.append("Platform", document.getElementById("Platform").value);
    params.append("Date and Year", document.getElementById("Date_and_year5").value);
    params.append("Outcome", document.getElementById("OutcomeID5").value);
    params.append("status", "Pending");

    params.append("Topic", document.getElementById("Topic3").value);
    params.append("DateYear", document.getElementById("Date_and_year6").value);
    params.append("Resource Person", document.getElementById("Resource_perason3").value);
    params.append("Outcome", document.getElementById("OutcomeID6").value);
    params.append("status", "Pending");

    params.append("Topic", document.getElementById("Topic4").value);
    params.append("DateYear", document.getElementById("Date_and_year7").value);
    params.append("Resource Person", document.getElementById("Resource_perason4").value);
    params.append("Outcome", document.getElementById("OutcomeID7").value);
    params.append("status", "Pending");

    params.append("Name", document.getElementById("Name").value);
    params.append("Type of Event", document.getElementById("Type").value);
    params.append("Date and Year", document.getElementById("Date_and_year8").value);
    params.append("Position Secured", document.getElementById("Position").value);
    params.append("status", "Pending");

    params.append("Aptitude", document.getElementById("Aptitude").value);
    params.append("Soft Skills", document.getElementById("Soft_skill").value);
    params.append("Reasoning", document.getElementById("Reasoning").value);
    params.append("Technical skill", document.getElementById("Tech_skill").value);
    params.append("status", "Pending");

    params.append("Title", document.getElementById("Title").value);
    params.append("Objective", document.getElementById("Objective").value);
    params.append("Duration", document.getElementById("Duration2").value);
    params.append("Outcome", document.getElementById("OutcomeID8").value);
    params.append("status", "Pending");

    params.append("Topic", document.getElementById("Topic4").value);
    params.append("DateYear", document.getElementById("Date_and_year9").value);
    params.append("Resource Person", document.getElementById("Resource_perason5").value);
    params.append("Outcome", document.getElementById("OutcomeID9").value);
    params.append("status", "Pending");

    params.append("Conference", document.getElementById("Conference").value);
    params.append("Name", document.getElementById("Name2").value);
    params.append("Title", document.getElementById("Title2").value);
    params.append("Impact factor", document.getElementById("Impact").value);
    params.append("Indexed in", document.getElementById("Indexed").value);
    params.append("status", "Pending");



    axios
      .post("http://localhost:5000/insertstudinter", params)
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

  const textColor = useColorModeValue("gray.700", "white");
  const [data, setData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();


  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  
  const FirstRow = {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  };
  

  const [IndustrialVist, SetIndustrialVist] = useState([FirstRow]);

  const adddata = () => {
    SetIndustrialVist([...IndustrialVist, data]);
  };


  return (
<Flex direction="column" pt={{ base: "500px", md: "75px" }}>
  
<Flex direction="column" pt={{ base: "500px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Industrial Visit
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Industry</Th>
                  <Th color="gray.400">Date and Year</Th>
                  <Th color="gray.400">Outcome</Th>
                </Tr>
              </Thead>
              <Tbody>
                {IndustrialVist.map((row) => {
                  return (
                    <TableRow3
                      row1={row.IndustryID}
                      row2={row.Date_and_year}
                      row3={row.OutcomeID}
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
                  <Td minWidth="14em">
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
                          placeholder="Enter Industry"
                          id="IndustryID"
                        />
                      
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        id="Date_and_year"
                      />
                    </Flex>
                  </Td>
                 
                  <Td minWidth="14em">
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
                        placeholder="Outcome"
                        id="OutcomeID"
                      />
                    </Flex>
                  </Td>
                  

                  <Td>
                    <Modal
                      isOpen={isOpen}
                      onClose={() => {
                        onClose();
                        window.location.reload(false);
                      }}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Result</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{resul}</ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                              onClose();
                              window.location.reload(false);
                            }}
                          >
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
        </SimpleGrid>
        <SimpleGrid
        alignSelf="flex-end"
        mt="1rem"
        width="10em"
        me="2.5rem"
        columns={{ sm: 2, md: 2, xl: 2 }}
        gap={5}
      >
        <div>
          <SlideFade in={show}>
            <Button onClick={substudinter} bg="orange.300" width="fit-content">
              Submit
            </Button>
          </SlideFade>
        </div>
        <Button
          ms="5"
          bg="orange.300"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
      </SimpleGrid>
    </Flex>

<Flex direction="column" pt={{ base: "500px", md: "75px" }}>
        <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Inplant Training
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Industry</Th>
                  <Th color="gray.400">Date and Year</Th>
                  <Th color="gray.400">Outcome</Th>
                </Tr>
              </Thead>
              <Tbody>
                {InplantTraining.map((row) => {
                  return (
                    <TableRow3
                      row1={row.IndustryID2}
                      row2={row.Date_and_year2}
                      row3={row.OutcomeID2}
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
                  <Td minWidth="14em">
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
                          placeholder="Enter Industry"
                          id="IndustryID2"
                        />
                      
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        id="Date_and_year2"
                      />
                    </Flex>
                  </Td>
                 
                  <Td minWidth="14em">
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
                        placeholder="Outcome"
                        id="OutcomeID2"
                      />
                    </Flex>
                  </Td>
                  

                  <Td>
                    <Modal
                      isOpen={isOpen}
                      onClose={() => {
                        onClose();
                        window.location.reload(false);
                      }}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Result</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{resul}</ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                              onClose();
                              window.location.reload(false);
                            }}
                          >
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
        </SimpleGrid>
        <SimpleGrid
        alignSelf="flex-end"
        mt="1rem"
        width="10em"
        me="2.5rem"
        columns={{ sm: 2, md: 2, xl: 2 }}
        gap={5}
      >
        <div>
          <SlideFade in={show}>
            <Button onClick={substudinter} bg="orange.300" width="fit-content">
              Submit
            </Button>
          </SlideFade>
        </div>
        <Button
          ms="5"
          bg="orange.300"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
      </SimpleGrid>
      </Flex>

<Flex direction="column" pt={{ base: "500px", md: "75px" }}>
        <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Guest Lecture
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Topic</Th>
                  <Th color="gray.400">Date and Year</Th>
                  <Th color="gray.400">Resource Person</Th>
                  <Th color="gray.400">Outcome</Th>
                </Tr>
              </Thead>
              <Tbody>
                {GuestLecture.map((row) => {
                  return (
                    <TableRow4
                      row1={row.Topic}
                      row2={row.Date_and_year3}
                      row3={row.Resorce_person}
                      row4={row.OutcomeID3}
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
                  <Td minWidth="14em">
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Enter Topic"
                          id="Topic"
                        />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        id="Date_and_year3"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Resource person"
                        id="Resource_person"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Outcome"
                        id="OutcomeID3"
                      />
                    </Flex>
                  </Td>
                 
                  <Td>
                    <Modal
                      isOpen={isOpen}
                      onClose={() => {
                        onClose();
                        window.location.reload(false);
                      }}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Result</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{resul}</ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                              onClose();
                              window.location.reload(false);
                            }}
                          >
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
        </SimpleGrid>
        <SimpleGrid
        alignSelf="flex-end"
        mt="1rem"
        width="10em"
        me="2.5rem"
        columns={{ sm: 2, md: 2, xl: 2 }}
        gap={5}
      >
        <div>
          <SlideFade in={show}>
            <Button onClick={substudinter} bg="orange.300" width="fit-content">
              Submit
            </Button>
          </SlideFade>
        </div>
        <Button
          ms="5"
          bg="orange.300"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
      </SimpleGrid>
      </Flex>

  <Flex direction="column" pt={{ base: "500px", md: "75px" }}> 
        <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Motivational Talks
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Topic</Th>
                  <Th color="gray.400">Date and Year</Th>
                  <Th color="gray.400">Resource Person</Th>
                  <Th color="gray.400">Outcome</Th>
                </Tr>
              </Thead>
              <Tbody>
                {MotivationalTalks.map((row) => {
                  return (
                    <TableRow4
                      row1={row.Topic2}
                      row2={row.Date_and_year4}
                      row3={row.Resource_person2}
                      row4={row.OutcomeID4}
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
                  <Td minWidth="14em">
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Enter Topic"
                          id="Topic2"
                        />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        id="Date_and_year4"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Resource Person"
                        id="Resource_person2"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Outcome"
                        id="OutcomeID4"
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Modal
                      isOpen={isOpen}
                      onClose={() => {
                        onClose();
                        window.location.reload(false);
                      }}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Result</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{resul}</ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                              onClose();
                              window.location.reload(false);
                            }}
                          >
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
        </SimpleGrid>
        <SimpleGrid
        alignSelf="flex-end"
        mt="1rem"
        width="10em"
        me="2.5rem"
        columns={{ sm: 2, md: 2, xl: 2 }}
        gap={5}
      >
        <div>
          <SlideFade in={show}>
            <Button onClick={substudinter} bg="orange.300" width="fit-content">
              Submit
            </Button>
          </SlideFade>
        </div>
        <Button
          ms="5"
          bg="orange.300"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
      </SimpleGrid>
      </Flex>

  <Flex direction="column" pt={{ base: "500px", md: "75px" }}>
        <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Internships
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Company</Th>
                  <Th color="gray.400">Duration In Months</Th>
                  <Th color="gray.400">Date</Th>
                  <Th color="gray.400">Reference</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Internships.map((row) => {
                  return (
                    <TableRow4
                      row1={row.Company}
                      row2={row.Duration}
                      row3={row.Date}
                      row4={row.Reference}
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
                  <Td minWidth="14em">
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Enter Company"
                          id="Company"
                        />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Enter Duration in months"
                        id="Duration"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Date"
                        id="Date"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Reference"
                        id="Reference"
                      />
                    </Flex>
                  </Td>
                  

                  <Td>
                    <Modal
                      isOpen={isOpen}
                      onClose={() => {
                        onClose();
                        window.location.reload(false);
                      }}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Result</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{resul}</ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                              onClose();
                              window.location.reload(false);
                            }}
                          >
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
        </SimpleGrid>
        <SimpleGrid
        alignSelf="flex-end"
        mt="1rem"
        width="10em"
        me="2.5rem"
        columns={{ sm: 2, md: 2, xl: 2 }}
        gap={5}
      >
        <div>
          <SlideFade in={show}>
            <Button onClick={substudinter} bg="orange.300" width="fit-content">
              Submit
            </Button>
          </SlideFade>
        </div>
        <Button
          ms="5"
          bg="orange.300"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
      </SimpleGrid>
      </Flex>
        
      <Flex direction="column" pt={{ base: "500px", md: "75px" }}>
        <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Value Added Course
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Course Name</Th>
                  <Th color="gray.400">Platform</Th>
                  <Th color="gray.400">Date and Year</Th>
                  <Th color="gray.400">Outcome</Th>
                </Tr>
              </Thead>
              <Tbody>
                {ValueAddedCourse.map((row) => {
                  return (
                    <TableRow4
                      row1={row.Course_name}
                      row2={row.Platform}
                      row3={row.Date_and_year5}
                      row4={row.Outcome5}
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
                <Td minWidth="14em">
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Enter Course Name"
                          id="Course_name"
                        />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Enter platform"
                          id="Platform"
                        />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        id="Date_and_year5"
                      />
                    </Flex>
                  </Td>
                 
                  <Td minWidth="14em">
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
                        placeholder="Outcome"
                        id="OutcomeID5"
                      />
                    </Flex>
                  </Td>

                  <Td>
                    <Modal
                      isOpen={isOpen}
                      onClose={() => {
                        onClose();
                        window.location.reload(false);
                      }}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Result</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{resul}</ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                              onClose();
                              window.location.reload(false);
                            }}
                          >
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
        </SimpleGrid>
        <SimpleGrid
        alignSelf="flex-end"
        mt="1rem"
        width="10em"
        me="2.5rem"
        columns={{ sm: 2, md: 2, xl: 2 }}
        gap={5}
      >
        <div>
          <SlideFade in={show}>
            <Button onClick={substudinter} bg="orange.300" width="fit-content">
              Submit
            </Button>
          </SlideFade>
        </div>
        <Button
          ms="5"
          bg="orange.300"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
      </SimpleGrid>
      </Flex>

<Flex direction="column" pt={{ base: "500px", md: "75px" }}>
        <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Workshop
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Topic</Th>
                  <Th color="gray.400">Date and Year</Th>
                  <Th color="gray.400">Resource Person</Th>
                  <Th color="gray.400">Outcome</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Workshop.map((row) => {
                  return (
                    <TableRow4
                      row1={row.Topic3}
                      row2={row.Date_and_year6}
                      row3={row.Resource_person3}
                      row4={row.Outcome6}
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
                  <Td minWidth="14em">
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Enter Topic"
                          id="Topic3"
                        />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        id="Date_and_year6"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Resource Person"
                        id="Resource_person3"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Outcome"
                        id="OutcomeID6"
                      />
                    </Flex>
                  </Td>

                  <Td>
                    <Modal
                      isOpen={isOpen}
                      onClose={() => {
                        onClose();
                        window.location.reload(false);
                      }}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Result</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{resul}</ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                              onClose();
                              window.location.reload(false);
                            }}
                          >
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
        </SimpleGrid>
        <SimpleGrid
        alignSelf="flex-end"
        mt="1rem"
        width="10em"
        me="2.5rem"
        columns={{ sm: 2, md: 2, xl: 2 }}
        gap={5}
      >
        <div>
          <SlideFade in={show}>
            <Button onClick={substudinter} bg="orange.300" width="fit-content">
              Submit
            </Button>
          </SlideFade>
        </div>
        <Button
          ms="5"
          bg="orange.300"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
      </SimpleGrid>
      </Flex>

<Flex direction="column" pt={{ base: "500px", md: "75px" }}>
        <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Webinar
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Topic</Th>
                  <Th color="gray.400">Date and Year</Th>
                  <Th color="gray.400">Resource Person</Th>
                  <Th color="gray.400">Outcome</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Webinar.map((row) => {
                  return (
                    <TableRow4
                      row1={row.Topic4}
                      row2={row.Date_and_year7}
                      row3={row.Resource_person4}
                      row4={row.Outcome7}
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
                  <Td minWidth="14em">
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Enter Topic"
                          id="Topic4"
                        />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        id="Date_and_year7"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Resource Person"
                        id="Resource_person4"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Outcome"
                        id="OutcomeID7"
                      />
                    </Flex>
                  </Td>
                 
                  <Td>
                    <Modal
                      isOpen={isOpen}
                      onClose={() => {
                        onClose();
                        window.location.reload(false);
                      }}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Result</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{resul}</ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                              onClose();
                              window.location.reload(false);
                            }}
                          >
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
        </SimpleGrid>
        <SimpleGrid
        alignSelf="flex-end"
        mt="1rem"
        width="10em"
        me="2.5rem"
        columns={{ sm: 2, md: 2, xl: 2 }}
        gap={5}
      >
        <div>
          <SlideFade in={show}>
            <Button onClick={substudinter} bg="orange.300" width="fit-content">
              Submit
            </Button>
          </SlideFade>
        </div>
        <Button
          ms="5"
          bg="orange.300"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
      </SimpleGrid>
      </Flex>

<Flex direction="column" pt={{ base: "500px", md: "75px" }}>
        <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Competition
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Name</Th>
                  <Th color="gray.400">
                    Type Of Competition (Coding / Project)
                  </Th>
                  <Th color="gray.400">Date & Year</Th>
                  <Th color="gray.400">Position Secured</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Competition.map((row) => {
                  return (
                    <TableRow4
                      row1={row.Name}
                      row2={row.Type}
                      row3={row.Date_and_year8}
                      row4={row.Position}
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
                  <Td minWidth="14em">
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Enter Name"
                          id="Name"
                        />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Enter Type of Competition"
                        id="Type"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        id="Date_and_year8"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Position Secured"
                        id="Position"
                      />
                    </Flex>
                  </Td>
                  
                  <Td>
                    <Modal
                      isOpen={isOpen}
                      onClose={() => {
                        onClose();
                        window.location.reload(false);
                      }}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Result</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{resul}</ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                              onClose();
                              window.location.reload(false);
                            }}
                          >
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
        </SimpleGrid>
        <SimpleGrid
        alignSelf="flex-end"
        mt="1rem"
        width="10em"
        me="2.5rem"
        columns={{ sm: 2, md: 2, xl: 2 }}
        gap={5}
      >
        <div>
          <SlideFade in={show}>
            <Button onClick={substudinter} bg="orange.300" width="fit-content">
              Submit
            </Button>
          </SlideFade>
        </div>
        <Button
          ms="5"
          bg="orange.300"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
      </SimpleGrid>
      </Flex>

<Flex direction="column" pt={{ base: "500px", md: "75px" }}>
        <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Placement Training
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Aptitude</Th>
                  <Th color="gray.400">Soft Skill</Th>
                  <Th color="gray.400">Reasoning</Th>
                  <Th color="gray.400">Technical Skill</Th>
                </Tr>
              </Thead>
              <Tbody>
                {PlacementTraining.map((row) => {
                  return (
                    <TableRow4
                      row1={row.Aptitude}
                      row2={row.Soft_skill}
                      row3={row.Reasoning}
                      row4={row.Tech_skill}
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
                  <Td minWidth="14em">
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Aptitude"
                          id="Aptitude"
                        />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Soft skills"
                        id="Soft_skill"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Reasoning"
                        id="Reasoning"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Technical skill"
                        id="Tech_skill"
                      />
                    </Flex>
                  </Td>
                 
                  <Td>
                    <Modal
                      isOpen={isOpen}
                      onClose={() => {
                        onClose();
                        window.location.reload(false);
                      }}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Result</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{resul}</ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                              onClose();
                              window.location.reload(false);
                            }}
                          >
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
        </SimpleGrid>
        <SimpleGrid
        alignSelf="flex-end"
        mt="1rem"
        width="10em"
        me="2.5rem"
        columns={{ sm: 2, md: 2, xl: 2 }}
        gap={5}
      >
        <div>
          <SlideFade in={show}>
            <Button onClick={substudinter} bg="orange.300" width="fit-content">
              Submit
            </Button>
          </SlideFade>
        </div>
        <Button
          ms="5"
          bg="orange.300"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
      </SimpleGrid>
      </Flex>

<Flex direction="column" pt={{ base: "500px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Mini Project
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Title</Th>
                  <Th color="gray.400">Objective</Th>
                  <Th color="gray.400">Duration</Th>
                  <Th color="gray.400">Outcome</Th>
                </Tr>
              </Thead>
              <Tbody>
                {MiniProject.map((row) => {
                  return (
                    <TableRow4
                      row1={row.Title}
                      row2={row.Objective}
                      row3={row.Duration2}
                      row4={row.OutcomeID8}
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
                  <Td minWidth="14em">
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Enter Title"
                          id="Title"
                        />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Enter objective"
                        id="Objective"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Duration"
                        id="Duration2"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Outcome"
                        id="OutcomeID8"
                      />
                    </Flex>
                  </Td>
                  
                  <Td>
                    <Modal
                      isOpen={isOpen}
                      onClose={() => {
                        onClose();
                        window.location.reload(false);
                      }}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Result</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{resul}</ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                              onClose();
                              window.location.reload(false);
                            }}
                          >
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
        </SimpleGrid>
        <SimpleGrid
        alignSelf="flex-end"
        mt="1rem"
        width="10em"
        me="2.5rem"
        columns={{ sm: 2, md: 2, xl: 2 }}
        gap={5}
      >
        <div>
          <SlideFade in={show}>
            <Button onClick={substudinter} bg="orange.300" width="fit-content">
              Submit
            </Button>
          </SlideFade>
        </div>
        <Button
          ms="5"
          bg="orange.300"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
      </SimpleGrid>
      </Flex>

<Flex direction="column" pt={{ base: "500px", md: "75px" }}>
        <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Final Project
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Topic</Th>
                  <Th color="gray.400">Date and Year</Th>
                  <Th color="gray.400">Resource Person</Th>
                  <Th color="gray.400">Outcome</Th>
                </Tr>
              </Thead>
              <Tbody>
                {FinalProject.map((row) => {
                  return (
                    <TableRow4
                      row1={row.Topic4}
                      row2={row.Date_and_year9}
                      row3={row.Resource_person5}
                      row4={row.OutcomeID9}
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
                  <Td minWidth="14em">
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Enter Topic"
                          id="Topic4"
                        />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        id="Date_and_year9"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Resource Person"
                        id="Resource_person5"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Outcome"
                        id="OutcomeID9"
                      />
                    </Flex>
                  </Td>
                 
                  <Td>
                    <Modal
                      isOpen={isOpen}
                      onClose={() => {
                        onClose();
                        window.location.reload(false);
                      }}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Result</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{resul}</ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                              onClose();
                              window.location.reload(false);
                            }}
                          >
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
        </SimpleGrid>
        <SimpleGrid
        alignSelf="flex-end"
        mt="1rem"
        width="10em"
        me="2.5rem"
        columns={{ sm: 2, md: 2, xl: 2 }}
        gap={5}
      >
        <div>
          <SlideFade in={show}>
            <Button onClick={substudinter} bg="orange.300" width="fit-content">
              Submit
            </Button>
          </SlideFade>
        </div>
        <Button
          ms="5"
          bg="orange.300"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
      </SimpleGrid>
      </Flex>

<Flex direction="column" pt={{ base: "500px", md: "75px" }}>
        <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={5}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Publications
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th color="gray.400">Conference / Journal</Th>
                  <Th color="gray.400">Name of Conference / Journal</Th>
                  <Th color="gray.400">Title Of the Article</Th>
                  <Th color="gray.400">Impact Factor</Th>
                  <Th color="gray.400">Indexed In</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Publications.map((row) => {
                  return (
                    <TableRow5
                      row1={row.Conference}
                      row2={row.Name2}
                      row3={row.Title2}
                      row4={row.Impact}
                      row5={row.Indexed}
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
                  <Td minWidth="14em">
                    <Flex
                      align="center"
                      py=".8rem"
                      minWidth="100%"
                      flexWrap="nowrap"
                    >
                      <Flex direction="column">
                        <Input
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Enter Conference/Journal"
                          id="Conference"
                        />
                      </Flex>
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Name of Conference/Journal"
                        id="Name2"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Title of the article"
                        id="Title2"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Impact factor"
                        id="Impact"
                      />
                    </Flex>
                  </Td>
                  <Td minWidth="14em">
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
                        placeholder="Indexed in"
                        id="Indexed"
                      />
                    </Flex>
                  </Td>
                  

                  <Td>
                    <Modal
                      isOpen={isOpen}
                      onClose={() => {
                        onClose();
                        window.location.reload(false);
                      }}
                    >
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>Result</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>{resul}</ModalBody>

                        <ModalFooter>
                          <Button
                            colorScheme="blue"
                            mr={3}
                            onClick={() => {
                              onClose();
                              window.location.reload(false);
                            }}
                          >
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
      </SimpleGrid>
      <SimpleGrid
        alignSelf="flex-end"
        mt="1rem"
        width="10em"
        me="2.5rem"
        columns={{ sm: 2, md: 2, xl: 2 }}
        gap={5}
      >
        <div>
          <SlideFade in={show}>
            <Button onClick={substudinter} bg="orange.300" width="fit-content">
              Submit
            </Button>
          </SlideFade>
        </div>
        <Button
          ms="5"
          bg="orange.300"
          width="fit-content"
          onClick={handleToggle}
        >
          <AddIcon w={4} h={4} me="3" />
          Add
        </Button>
      </SimpleGrid>
    </Flex>
</Flex>
  );
}

export default ProfessionalDevelopmentData;
