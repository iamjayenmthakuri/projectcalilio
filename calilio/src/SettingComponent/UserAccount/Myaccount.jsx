import { Flex, Text, Image, Grid } from "@chakra-ui/react";
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
          <Grid>
            <StyledText color={"#101828"}></StyledText>
            Olivia Rhye
            <Text fontSize={12}>olivia@calilio.com</Text>
          </Grid>
        </Flex>
      </Grid>
    </>
  );
}

export default Myaccount;
