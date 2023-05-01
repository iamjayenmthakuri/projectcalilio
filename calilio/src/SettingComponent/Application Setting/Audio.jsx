import { Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import headphone from "../../Images/headphone.svg";

const StyledText = styled(Text)`
  background-color: white;
`;
const StyledImage = styled(Image)``;

function Audio() {
  return (
    <Flex margin={15} bg={"white"} gap={2} alignItems={"center"}>
      <StyledText>Audio</StyledText>
      <StyledImage src={headphone} bg={"white"} />
    </Flex>
  );
}

export default Audio;
