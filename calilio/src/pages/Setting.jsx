import { Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import setting from "../Images/setting.svg";
import SettingSidebar from "../SettingComponent/SettingSidebar";

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

function Setting() {
  return (
    <>
      <Flex margin={15} bg={"white"} gap={2} alignItems={"center"}>
        <StyledText>Settings</StyledText>
        <StyledImage src={setting} bg={"white"} />
      </Flex>
      <SettingSidebar />
    </>
  );
}

export default Setting;
