import { Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import overview from "../../Images/dashbord.svg";

const StyledText = styled(Text)`
  background-color: white;
`;
const StyledImage = styled(Image)``;

function Blocklist() {
  return (
    <Flex margin={15} bg={"white"} gap={2} alignItems={"center"}>
      <StyledText>Block List</StyledText>
      <StyledImage src={overview} bg={"white"} />
    </Flex>
  );
}

export default Blocklist;
