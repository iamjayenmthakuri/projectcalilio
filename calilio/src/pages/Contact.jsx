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
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
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
      <Flex margin={15} gap={1} alignItems={"center"}>
        <StyledText>Contacts</StyledText>
        <Image src={contact} />
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <Container
          display={"grid"}
          maxW="container.md"
          placeItems={"center"}
          gap={4}
        >
          <Grid placeItems={"center"} marginTop={"170px"} gap={2}>
            <Image src={contactIcon} boxSize={134} />
            <Heading as={"Heading"} fontSize={18}>
              No Contacts
            </Heading>
            <Flex gap={-2} flexDirection={"column"} alignItems={"center"}>
              <Text fontSize={14}>
                No existing contacts. Add contacts to start conversation
              </Text>
              <Text>
                or
                <Text fontSize={14} as={"span"} color={"#5964FF"}>
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
