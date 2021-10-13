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
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GeneralParticularstablerow from "components/Tables/GeneralParticularstablerow";
import { GeneralParticulars } from "variables/general";
import { HigherSecondaryDetails } from "variables/general";
import { SecondaryDetails } from "variables/general";
import { Father, Mother } from "variables/general";
import { AdmissionDetails } from "variables/general";
import { ScholarshipDetails } from "variables/general";
import { TechnicalSkills } from "variables/general";
import { NonTechnicalSkills } from "variables/general";
import { Goals } from "variables/general";
import { ProfessionalMembership } from "variables/general";

function GeneralInformationdata() {

  function funinsert(){
    let params = new URLSearchParams();
    params.append("name", document.getElementById("NID").value);
    params.append("rollno", document.getElementById("RID").value);
    params.append("registerno", document.getElementById("REID").value);
    params.append("sex", document.getElementById("SID").value);
    params.append("dateofbirth", document.getElementById("DOBID").value);
    params.append("nationality", document.getElementById("NATIONID").value);
    params.append("religion", document.getElementById("RELIGIONID").value);
    params.append("parish", document.getElementById("PARISHID").value);
    params.append("dalit", document.getElementById("DALITID").value);
    params.append("community", document.getElementById("COMMUNITYID").value);
    params.append("bloodgroup", document.getElementById("BLOODID").value);
    params.append("mothertounge", document.getElementById("MOTHERID").value);
    params.append("contact", document.getElementById("CONTACTID").value);
    params.append("aadhar", document.getElementById("AADHARID").value);
    params.append("offemail", document.getElementById("OFFEMID").value);
    params.append("peremail", document.getElementById("PEREMID").value);
    params.append("preaddr", document.getElementById("PREADDRID").value);
    params.append("peraddr", document.getElementById("PERADDRID").value);

    console.log("Inserted");
    //axios.post("http://localhost:5000/studentinsert", params);
    window.location.href=("http://localhost:3000/purity-ui-dashboard#/admin/dashboard");
  }
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "500px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 1, xl: 1 }} gap={4}>
        <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="6px 0px 22px 0px">
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              General Particulars
            </Text>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Tbody>
              <Tr>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <Text
                        fontSize="md"
                        color={textColor}
                        fontWeight="bold"
                        minWidth="100%"
                      >STUDENT NAME:
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td minWidth={{ sm: "17rem" }}>
                  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                    <Flex direction="column">
                      <FormControl>
                        <Input
                          id="NID"
                          borderRadius="5px"
                          fontSize="sm"
                          type="text"
                          placeholder="Enter your name"
                        />
                      </FormControl>
                    </Flex>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <Text
                      fontSize="md"
                      color={textColor}
                      fontWeight="bold"
                      minWidth="100%"
                    >ROLL NO:
                    </Text>
                  </Flex>
                </Flex>
              </Td>
              <Td minWidth={{ sm: "17rem" }}>
                <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                  <Flex direction="column">
                    <FormControl>
                      <Input
                        id="RID"
                        borderRadius="5px"
                        fontSize="sm"
                        type="text"
                        placeholder="Enter your roll no"
                      />
                    </FormControl>
                  </Flex>
                </Flex>
              </Td>
            </Tr>
            <Tr>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    minWidth="100%"
                  >REGISTER NO:
                  </Text>
                </Flex>
              </Flex>
            </Td>
            <Td minWidth={{ sm: "17rem" }}>
              <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
                <Flex direction="column">
                  <FormControl>
                    <Input
                      id="REID"
                      borderRadius="5px"
                      fontSize="sm"
                      type="text"
                      placeholder="Enter your register no"
                    />
                  </FormControl>
                </Flex>
              </Flex>
            </Td>
          </Tr>
          <Tr>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >SEX:
                </Text>
              </Flex>
            </Flex>
          </Td>
          <Td minWidth={{ sm: "17rem" }}>
            <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Flex direction="column">
                <FormControl>
                  <Input
                    id="SID"
                    borderRadius="5px"
                    fontSize="sm"
                    type="text"
                    placeholder="Enter your gender"
                  />
                </FormControl>
              </Flex>
            </Flex>
          </Td>
        </Tr>
        <Tr>
        <Td minWidth={{ sm: "17rem" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
              >DATE OF BIRTH:
              </Text>
            </Flex>
          </Flex>
        </Td>
        <Td minWidth={{ sm: "17rem" }}>
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Flex direction="column">
              <FormControl>
                <Input
                  id="DOBID"
                  borderRadius="5px"
                  fontSize="sm"
                  type="text"
                  placeholder="Enter your date of birth"
                />
              </FormControl>
            </Flex>
          </Flex>
        </Td>
      </Tr>
      <Tr>
      <Td minWidth={{ sm: "17rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >NATIONALITY:
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td minWidth={{ sm: "17rem" }}>
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <FormControl>
              <Input
                id="NATIONID"
                borderRadius="5px"
                fontSize="sm"
                type="text"
                placeholder="Enter your nationality"
              />
            </FormControl>
          </Flex>
        </Flex>
      </Td>
    </Tr>
  <Tr>
  <Td minWidth={{ sm: "17rem" }}>
    <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
      <Flex direction="column">
        <Text
          fontSize="md"
          color={textColor}
          fontWeight="bold"
          minWidth="100%"
        >RELIGION:
        </Text>
      </Flex>
    </Flex>
  </Td>
  <Td minWidth={{ sm: "17rem" }}>
    <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
      <Flex direction="column">
        <FormControl>
          <Input
            id="RELIGIONID"
            borderRadius="5px"
            fontSize="sm"
            type="text"
            placeholder="Enter your religion"
          />
        </FormControl>
      </Flex>
    </Flex>
  </Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >IF CATHOLIC, PARISH ?:
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="PARISHID"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder="Enter yes/no"
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >DALIT CATHOLIC:
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="DALITID"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder="Enter yes/no"
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >COMMUNITY:
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="COMMUNITYID"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder="Enter your community"
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >BLOOD GROUP:
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="BLOODID"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder="Enter your blood group"
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >MOTHER TOUNGE:
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="MOTHERID"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder="Enter your mother tounge"
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >CONTACT NUMBER:
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="CONTACTID"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder="Enter your contact no."
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >AADHAR NO:
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="AADHARID"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder="Enter your aadhar no."
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >OFFICIAL EMAIL ID:
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="OFFEMID"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder="Enter your official email"
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >PERSONAL EMAIL ID:
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="PEREMID"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder="Enter your personal email"
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >PRESENT ADDRESS:
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="PREADDRID"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder="Enter your present address"
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
<Tr>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        minWidth="100%"
      >PERMANENT ADDRESS:
      </Text>
    </Flex>
  </Flex>
</Td>
<Td minWidth={{ sm: "17rem" }}>
  <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
    <Flex direction="column">
      <FormControl>
        <Input
          id="PERADDRID"
          borderRadius="5px"
          fontSize="sm"
          type="text"
          placeholder="Enter your Permanent address"
        />
      </FormControl>
    </Flex>
  </Flex>
</Td>
</Tr>
</Tbody>
</Table>
</CardBody>
<Flex direction="column" align="flex-end" w="100%">
    <Button onClick={funinsert}
            marginBottom="1rem"
            marginTop="1rem"
            marginRight="22.5rem"
            colorScheme="orange"
            variant="solid"
    >
      Submit
    </Button>
    </Flex>
    </Card>
        <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap={4}>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Higher Secondary Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {HigherSecondaryDetails.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Flex direction="column" align="flex-end" w="100%">
              <Button
                marginBottom="1rem"
                marginTop="1rem"
                marginRight="3.5rem"
                colorScheme="orange"
                variant="solid"
              >
                Submit
              </Button>
            </Flex>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                10th Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {SecondaryDetails.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Flex direction="column" align="flex-end" w="100%">
              <Button
                marginBottom="1rem"
                marginTop="1rem"
                marginRight="3.5rem"
                colorScheme="orange"
                variant="solid"
              >
                Submit
              </Button>
            </Flex>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Father's Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {Father.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Flex direction="column" align="flex-end" w="100%">
              <Button
                marginBottom="1rem"
                marginTop="1rem"
                marginRight="3.5rem"
                colorScheme="orange"
                variant="solid"
              >
                Submit
              </Button>
            </Flex>
          </Card>
          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Mother's and Sibling Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {Mother.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Flex direction="column" align="flex-end" w="100%">
              <Button
                marginBottom="1rem"
                marginTop="1rem"
                marginRight="3.5rem"
                colorScheme="orange"
                variant="solid"
              >
                Submit
              </Button>
            </Flex>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Admission Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {AdmissionDetails.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Flex direction="column" align="flex-end" w="100%">
              <Button
                marginBottom="1rem"
                marginTop="1rem"
                marginRight="3.5rem"
                colorScheme="orange"
                variant="solid"
              >
                Submit
              </Button>
            </Flex>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Scholarship Details
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {ScholarshipDetails.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Flex direction="column" align="flex-end" w="100%">
              <Button
                marginBottom="1rem"
                marginTop="1rem"
                marginRight="3.5rem"
                colorScheme="orange"
                variant="solid"
              >
                Submit
              </Button>
            </Flex>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Technical Skills
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {TechnicalSkills.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Flex direction="column" align="flex-end" w="100%">
              <Button
                marginBottom="1rem"
                marginTop="1rem"
                marginRight="3.5rem"
                colorScheme="orange"
                variant="solid"
              >
                Submit
              </Button>
            </Flex>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Non - Technical Skills
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {NonTechnicalSkills.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Flex direction="column" align="flex-end" w="100%">
              <Button
                marginBottom="1rem"
                marginTop="1rem"
                marginRight="3.5rem"
                colorScheme="orange"
                variant="solid"
              >
                Submit
              </Button>
            </Flex>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Goals / Technical / Non -Technical Profficieny
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {Goals.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Flex direction="column" align="flex-end" w="100%">
              <Button
                marginBottom="1rem"
                marginTop="1rem"
                marginRight="3.5rem"
                colorScheme="orange"
                variant="solid"
              >
                Submit
              </Button>
            </Flex>
          </Card>

          <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
            <CardHeader p="6px 0px 22px 0px">
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Professional Membership
              </Text>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Tbody>
                  {ProfessionalMembership.map((row) => {
                    return (
                      <GeneralParticularstablerow
                        field={row.field}
                        data={row.data}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
            <Flex direction="column" align="flex-end" w="100%">
              <Button
                marginBottom="1rem"
                marginTop="1rem"
                marginRight="3.5rem"
                colorScheme="orange"
                variant="solid"
              >
                Submit
              </Button>
            </Flex>
          </Card>
        </SimpleGrid>
      </SimpleGrid>
    </Flex>
  );
}

export default GeneralInformationdata;
