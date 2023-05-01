import { Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import subscription from "../../Images/subscription.svg";

const StyledText = styled(Text)`
  background-color: white;
`;
const StyledImage = styled(Image)``;

function Subscription() {
  return (
    <Flex margin={15} bg={"white"} gap={2} alignItems={"center"}>
      <StyledText>Subscription</StyledText>
      <StyledImage src={subscription} bg={"white"} />
    </Flex>
  );
}

export default Subscription;
