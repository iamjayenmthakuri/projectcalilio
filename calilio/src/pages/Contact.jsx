import {
  Container,
  Flex,
  Text,
  Image,
  Button,
  Heading,
  Grid,
} from "@chakra-ui/react";
import styled from "styled-components";
import contact from "../Images/contact.svg";
import userPlus from "../Images/userplus.svg";
import contactIcon from "../Images/contactIcon.svg";

const StyledText = styled(Text)`
  /* width: 80px;
  height: 28px; */
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
  background-color: white;
`;
const StyledImage = styled(Image)`
  size-adjust: 10px;
`;
const StyledButton = styled(Button)`
  &:hover ${StyledImage} {
    background-color: var(--chakra-colors-gray-200);
  }
`;

function Contact() {
  return (
    <>
      <Flex margin={15} bg={"white"} gap={1} alignItems={"center"}>
        <StyledText>Contacts</StyledText>
        <Image src={contact} bg={"white"} />
      </Flex>
      <Flex
        backgroundColor={"white"}
        alignItems="center"
        justifyContent="center"
      >
        <Container
          display={"grid"}
          maxW="container.md"
          backgroundColor={"white"}
          placeItems={"center"}
          gap={4}
        >
          <Grid
            placeItems={"center"}
            marginTop={"170px"}
            backgroundColor={"white"}
            gap={2}
          >
            <Image src={contactIcon} boxSize={134} background={"White"} />
            <Heading as={"Heading"} background={"White"} fontSize={18}>
              No Contacts
            </Heading>
            <Flex
              gap={-2}
              flexDirection={"column"}
              alignItems={"center"}
              backgroundColor={"white"}
            >
              <Text bg={"white"} fontSize={14}>
                No existing contacts. Add contacts to start conversation
              </Text>
              <Text bg={"whiteAlpha.900"}>
                or
                <Text fontSize={14} as={"span"} bg={"white"} color={"#5964FF"}>
                  upload
                </Text>
                a CSV file.
              </Text>
            </Flex>
            <StyledButton color={"white"} gap={2} bg={"#5964FF"} fontSize={14}>
              <StyledImage src={userPlus} />
              Add new Contact
            </StyledButton>
          </Grid>
        </Container>
      </Flex>
    </>
  );
}

export default Contact;
