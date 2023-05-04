import { Flex, Box } from "@chakra-ui/react";
import SettingSidebar from "../SettingComponent/SettingSidebar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  border-radius: 8px;
  width: 100%;
  height: 1103.9px;
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
        w={"24%"}
        bg={"white"}
        borderRadius={"8px 0 0 8px"}
        boxShadow="inset -1px 0px 0px rgba(0, 0, 0, 0.25)"
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
