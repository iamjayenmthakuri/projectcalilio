import styled from "styled-components";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import logo from "../Images/lg.svg";

const Circle = styled(Box)`
  background: #d6d9ff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:nth-child(2) {
    outline: solid 2px #ffffff;
    border: 2px solid #5964ff;
  }
`;

const MainTitle = styled(Text)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 14.5px;
  line-height: 24px;
  text-align: center;
  color: #475467;
  background: #d6d9ff;
`;

const ProfileBar = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      padding="24px 0px 0px"
      gap={5}
      bg="#5964ff"
      w="50px"
      h="100vh"
      mt="8px"
      ml="13px"
    >
      <Image src={logo} boxSize={10} mt="10px" mb="10px" bg="#5964ff" />
      <Circle>
        <MainTitle>OR</MainTitle>
      </Circle>
      <Circle>
        <MainTitle>BR</MainTitle>
      </Circle>
      <Circle>
        <MainTitle>CR</MainTitle>
      </Circle>
      <Circle>
        <AddIcon boxSize={4} bg=" #d6d9ff" color="#5964ff" />
      </Circle>
    </Flex>
  );
};

export default ProfileBar;
