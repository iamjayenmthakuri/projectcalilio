import { Flex, Box } from "@chakra-ui/react";
import SettingSidebar from "../SettingComponent/SettingSidebar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  box-sizing: border-box;
  background: #ffffff;
  border-right: 1px solid #d0d5dd;
  border-radius: 8px;
  width: 100%;
  height: 1103.9px;
  gap: 1px;
`;

const StyledBox = styled(Box)`
  background: #ffffff;
  border-radius: 0 8px 8px 0;
  flex-grow: 1;
`;

const SettingSidebarLayout = () => {
  return (
    <StyledFlex bg={" #5964ff"}>
      <Box
        w={"25%"}
        bg={"white"}
        borderRadius={"0 0 0 8px"}
        boxShadow=" 0px 1px 0px rgba(0, 0, 0, 0.25),
    inset -1px 0px 0px rgba(0, 0, 0, 0.25)"
      >
        <SettingSidebar />
      </Box>

      <StyledBox bg={"white"}>
        <Outlet />
      </StyledBox>
    </StyledFlex>
  );
};

export default SettingSidebarLayout;
