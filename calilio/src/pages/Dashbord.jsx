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

function Dashboard() {
  return (
    <>
      <Flex margin={15} bg={"white"} gap={2} alignItems={"center"}>
        <StyledText>Dashboard</StyledText>
        <Image src={dashboard} bg={"white"} />
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
            <Image src={Logomark} boxSize={134} background={"White"} />
            <Heading as={"Heading"} background={"White"} fontSize={18}>
              Hello Calvin!
            </Heading>
            <Flex
              gap={-2}
              flexDirection={"column"}
              alignItems={"center"}
              backgroundColor={"white"}
            >
              <Text bg={"white"} fontSize={14}>
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
