import {
  Avatar,
  Badge,
  Button,
  Flex,
  FormControl,
  Input,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

export const tablesTableData1 = [
  {
    sno: "1",
    name: "Alison Roy X",
    email: "alison.23cs@licet.ac.in",
    reg: "311120103907",
    roll: "19CS045",
  },
  {
    sno: "2",
    name: "Auskin Immanuel J",
    email: "auskinimmanuel.24cs@licet.ac.in",
    reg: "311120104012",
    roll: "20CS046",
  },
  {
    sno: "3",
    name: "Gautham S",
    email: "gautham.24cs@licet.ac.in",
    reg: "311120104017",
    roll: "20CS008",
  },
  {
    sno: "4",
    name: "Ashwin",
    email: "ashwin.23cs@licet.ac.in",
    reg: "311120103904",
    roll: "19CS051",
  },
];
export const tablesTableData2 = [
  {
    sno: "1",
    name: "Ashwin",
    email: "ashwin.23cs@licet.ac.in",
    reg: "311120103904",
    roll: "19CS051",
  },
  {
    sno: "2",
    name: "Auskin Immanuel J",
    email: "auskinimmanuel.24cs@licet.ac.in",
    reg: "311120104012",
    roll: "20CS046",
  },
  {
    sno: "3",
    name: "Gautham S",
    email: "gautham.24cs@licet.ac.in",
    reg: "311120104017",
    roll: "20CS008",
  },

  {
    sno: "4",
    name: "Alison Roy X",
    email: "alison.23cs@licet.ac.in",
    reg: "311120103907",
    roll: "19CS045",
  },
];
export const tablesTableData3 = [
  {
    sno: "1",
    name: "Auskin Immanuel J",
    email: "auskinimmanuel.24cs@licet.ac.in",
    reg: "311120104012",
    roll: "20CS046",
  },
  {
    sno: "2",
    name: "Gautham S",
    email: "gautham.24cs@licet.ac.in",
    reg: "311120104017",
    roll: "20CS008",
  },

  {
    sno: "3",
    name: "Alison Roy X",
    email: "alison.23cs@licet.ac.in",
    reg: "311120103907",
    roll: "19CS045",
  },
  {
    sno: "4",
    name: "Ashwin",
    email: "ashwin.23cs@licet.ac.in",
    reg: "311120103904",
    roll: "19CS051",
  },
];
export const tablesTableData4 = [
  {
    sno: "2",
    name: "Gautham S",
    email: "gautham.24cs@licet.ac.in",
    reg: "311120104017",
    roll: "20CS008",
  },
  {
    sno: "1",
    name: "Auskin Immanuel J",
    email: "auskinimmanuel.24cs@licet.ac.in",
    reg: "311120104012",
    roll: "20CS046",
  },

  {
    sno: "3",
    name: "Ashwin",
    email: "ashwin.23cs@licet.ac.in",
    reg: "311120103904",
    roll: "19CS051",
  },
  {
    sno: "4",
    name: "Alison Roy X",
    email: "alison.23cs@licet.ac.in",
    reg: "311120103907",
    roll: "19CS045",
  },
];
export const GeneralParticulars = [
  {
    field: "Student Name",
    data: (
      <Input
        borderRadius="5px"
        fontSize="sm"
        type="text"
        placeholder="Student Name "
      />
    ),
    show: "Null",
  },
  {
    field: "ID",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder="ID " />
    ),
    show: "Null",
  },
  {
    field: "Register No.",
    data: (
      <Input
        borderRadius="5px"
        fontSize="sm"
        type="text"
        placeholder="Register Number  "
      />
    ),
    show: "Null",
  },
  {
    field: "Sex",
    data: (
      <Input
        borderRadius="5px"
        fontSize="sm"
        type="text"
        placeholder="Male / Female "
      />
    ),
    show: "Null",
  },
  {
    field: "Date Of Birth",
    data: (
      <Input
        borderRadius="5px"
        fontSize="sm"
        type="text"
        placeholder="DD / MM / YYYY "
      />
    ),
    show: "Null",
  },
  {
    field: "Nationality",
    data: (
      <Input
        borderRadius="5px"
        fontSize="sm"
        type="text"
        placeholder="Nationality "
      />
    ),
    show: "Null",
  },
  {
    field: "Religion",
    data: (
      <Input
        borderRadius="5px"
        fontSize="sm"
        type="text"
        placeholder="Religion "
      />
    ),
    show: "Null",
  },
  {
    field: "If Catholic, Parish?",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Dalit Catholic",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Comunity",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Blood Group",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Mother Tounge",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Contact Number",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Aadhar No.",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Official Email ID",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Personal Email ID",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Present Address",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Permanent Address",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
];
export const HigherSecondaryDetails = [
  {
    field: "Name of the School",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Board",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Medium Of Instruction",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Second Language",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Group",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Total Marks",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Overall Percentage",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Cut-Off Marks",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "No. Of Attempts",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
];
export const SecondaryDetails = [
  {
    field: "Name of the School",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Board",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Medium Of Instruction",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Second Language",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Group",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Total Marks",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Overall Percentage",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "Cut-Off Marks",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
  {
    field: "No. Of Attempts",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
    show: "Null",
  },
];
export const Father = [
  {
    field: "Father's Name",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Father's Qualification",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Fathers Occupation",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Father's Office Address",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Father's Annual Income",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Father's Mobile No.",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Father's Email ID",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Guardian Name",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Guardian Qualification",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Guardian Occupation",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Guardian Office Address",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Guardian Annual Income",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Guardian Mobile No.",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Guardian Email ID",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
];
export const Mother = [
  {
    field: "Mother's Name",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Mother's Qualification",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Mother's Occupation",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Mother's Office Address",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Mother's Annual Income",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Mother's Mobile No.",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Mother's Email ID",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "No. Of Siblings",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Qualification Of Siblings",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Occupation",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Alumni Of LICET Or LOYOLA",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
];
export const AdmissionDetails = [
  {
    field: "Application No.",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Date Of Admission",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Quota",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Regular / Lateral Entry",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Day Scholar / Hosteller",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
];
export const ScholarshipDetails = [
  {
    field: "Scholarship Name",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Scholarship Amount",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "First Graduate",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Economically Backward (Annual Income Of Parents Less than 1LPA)",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
];
export const TechnicalSkills = [
  {
    field: "Programming Languages",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Operating Systems",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "DataBase",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Software Profficieny",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Other Skills",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
];
export const NonTechnicalSkills = [
  {
    field: "Aptitude / Analytical Skills",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Communication Skills",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Social Media Exposure",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Leadership Skills",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Other Interpersonal Skills",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
];
export const Goals = [
  {
    field: "Short Term Goals",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Long Term Goals",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
];
export const ProfessionalMembership = [
  {
    field: "Name",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Membership No.",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
  {
    field: "Duration",
    data: (
      <Input borderRadius="5px" fontSize="sm" type="text" placeholder=" " />
    ),
  },
];
export const Academicinfo = [
  {
    row1: "Subject 1",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "Subject 2",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "Subject 3",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "Subject 4",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "Subject 5",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "Subject 6",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "Lab 1",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "Lab 2",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "Lab 3",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "Attendance Percentage",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "Credits Earned",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "Total No. Of Arrears",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "GPA",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
];
export const AcademicSummary = [
  {
    row1: "Overall attendance percentage",
    row2: "NULL",
  },
  {
    row1: "CGPA",
    row2: "NULL",
  },
  {
    row1: "Total Credits Earned",
    row2: "NULL",
  },
  {
    row1: "Eligible for placements",
    row2: "NULL",
  },
];
export const International = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
    row6: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
    row6: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
    row6: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
    row6: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
    row6: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
    row6: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
    row6: "NULL",
  },
];
export const IndustrialVist = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
];
export const InplantTraining = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
];
export const GuestLecture = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
];
export const MotivationalTalks = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
];
export const Internships = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
];
export const ValueAddedCourse = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
];
export const Workshop = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
];
export const Webinar = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
];
export const Competition = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
];
export const PlacementTraining = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
];
export const MiniProject = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
];
export const FinalProject = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
];
export const Publications = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
    row5: "NULL",
  },
];
export const Clubs = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
];
export const OutReachActivity = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
];
export const SportsAchievements = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
    row4: "NULL",
  },
];
export const Culturals = [
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
  {
    row1: "NULL",
    row2: "NULL",
    row3: "NULL",
  },
];
export const Feedback = [
  // {
  //   row1: "NULL",
  // },
];
