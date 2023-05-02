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
import dashboard from "../Images/dashbord.svg";
import Logomark from "../Images/logomark.svg";

const StyledText = styled(Text)`
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
    color: var(--chakra-colors-gray-200);
  }
`;

function Dashboard() {
  return (
    <>
      <Flex margin={15} gap={2} alignItems={"center"}>
        <StyledText>Dashboard</StyledText>
        <Image src={dashboard} />
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <Container
          display={"grid"}
          maxW="container.md"
          placeItems={"center"}
          gap={4}
        >
          <Grid placeItems={"center"} marginTop={"170px"} gap={2}>
            <Image src={Logomark} boxSize={134} />
            <Heading as={"Heading"} fontSize={18}>
              Hello Calvin!
            </Heading>
            <Flex gap={-2} flexDirection={"column"} alignItems={"center"}>
              <Text fontSize={14}>
                Please confirm you want to sign-in using the
              </Text>
              <Text bg={"whiteAlpha.900"}>current email.</Text>
            </Flex>
            <StyledButton color={"white"} gap={2} bg={"#5964FF"} fontSize={14}>
              Accept Invitation
            </StyledButton>
          </Grid>
        </Container>
      </Flex>
    </>
  );
}
export default Dashboard;
