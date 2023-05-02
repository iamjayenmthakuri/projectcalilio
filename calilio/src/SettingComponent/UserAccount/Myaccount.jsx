import { Flex, Text, Image, Grid, Container } from "@chakra-ui/react";
import styled from "styled-components";
import Avatarprofilephoto from "../../Images/Avatarprofilephoto.svg";
import backgroundprofile from "../../Images/backgroundprofile.svg";

const StyledFlex = styled(Flex)`
  width: 100%;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
`;
const StyledText = styled(Text)`
  background-color: white;

  margin-left: 15px;
  font-weight: 700;
  font-size: 15px;
  line-height: 48px;
  color: #344054;
`;
const StyledImage = styled(Image)`
  background-image: url(${backgroundprofile});
  width: 98.5%;
  border-radius: 8px 8px 0px 0px;
  margin-top: 10px;
  margin-left: 5px;
  height: 120px;
`;

function Myaccount() {
  return (
    <>
      <Grid backgroundColor={"white"}>
        <StyledFlex bg={"white"} gap={2}>
          <StyledText>My account</StyledText>
        </StyledFlex>

        <StyledImage />
        <Flex h={"min-content"}>
          <Image src={Avatarprofilephoto} boxSize={152} marginTop={"-65px"} />
          <Grid padding={2}>
            <Text fontSize={26} color="#101828" fontWeight={600}>
              {" "}
              Olivia Rhye
            </Text>
            <Text fontSize={13} marginTop={"-17px"} color={"#344054"}>
              olivia@calilio.com
            </Text>
          </Grid>
        </Flex>
      </Grid>
      <Container>
        <Grid>
          <Text color={"#344054"} fontWeight={500} fontSize={14}>
            Personal info
          </Text>
          <Text color={"#344054"} fontSize={12}>
            Update your personal details.
          </Text>
        </Grid>
      </Container>
    </>
  );
}

export default Myaccount;
