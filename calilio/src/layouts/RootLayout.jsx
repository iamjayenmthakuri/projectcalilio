import { Outlet } from "react-router-dom";
import ProfileBar from "../components/ProfileBar";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <Flex w="100%" gap={{ sm: "25px", md: "10px", lg: "5px" }} bg={" #5964ff"}>
      <Box w={{ sm: "10px", md: "40px", lg: "59px" }}>
        <ProfileBar />
      </Box>
      <Box w={{ sm: "40px", md: "250px", lg: "251px" }}>
        <Sidebar />
      </Box>
      <Box
        flexGrow="1"
        backgroundColor={"white"}
        margin={{ sm: "6px", md: "8px", lg: "8px" }}
        borderRadius={{ sm: "6px", md: "8px", lg: "8px" }}
      >
        <Outlet />
      </Box>
    </Flex>
  );
};

export default RootLayout;
