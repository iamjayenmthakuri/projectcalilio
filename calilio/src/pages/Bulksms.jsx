import { Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import sms from "../Images/sms.svg";

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

function Bulksms() {
  return (
    <>
      {" "}
      <Flex margin={15} bg={"white"} gap={2} alignItems={"center"}>
        <StyledText>Bulk sms</StyledText>
        <StyledImage src={sms} bg={"white"} />
      </Flex>
    </>
  );
}

export default Bulksms;
