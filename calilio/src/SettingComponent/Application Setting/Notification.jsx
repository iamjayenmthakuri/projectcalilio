import { Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import notification from "../../Images/notification.svg";

const StyledText = styled(Text)`
  background-color: white;
`;
const StyledImage = styled(Image)``;

function Notification() {
  return (
    <Flex margin={15} bg={"white"} gap={2} alignItems={"center"}>
      <StyledText>Notification</StyledText>
      <StyledImage src={notification} bg={"white"} />
    </Flex>
  );
}

export default Notification;
