import { Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  width: 100%;

  padding: 0;
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

function Myaccount() {
  return (
    <>
      <StyledFlex bg={"white"} gap={2} alignItems={"center"}>
        <StyledText>My account</StyledText>
      </StyledFlex>
    </>
  );
}

export default Myaccount;
