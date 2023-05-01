import { Box, Text, Image, SimpleGrid } from "@chakra-ui/react";
import Phone from "../Images/phone.svg";
import HeroSection from "./HeroSection";

const Sidebar = () => {
  return (
    <SimpleGrid>
      <Box
        mt="10px"
        w={{ base: "50px", sm: "180px", md: "280px" }}
        h="64px"
        borderRadius="5px"
        bg="white"
        boxShadow="0px 1px 0px rgba(0, 0, 0, 0.25), inset -1px 0px 0px rgba(0, 0, 0, 0.25)"
        display="flex"
        justifyContent={{
          base: "flex-start",
          sm: "flex-start",
          md: "space-between",
        }}
        alignItems="center"
        flexDirection="row"
        px="16px"
      >
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Text
            fontWeight="700"
            fontSize={{ base: "10px", md: "15px", lg: "20px" }}
            lineHeight="30px"
            color="#344054"
            bg="white"
            width="180px"
            height="44px"
          >
            Oregon Region
          </Text>
          <Text
            fontWeight="600"
            fontSize="12px "
            width="180px"
            lineHeight="20px"
            color="#667482"
            bg="white"
          >
            $114.45
          </Text>
        </Box>
        <Image
          src={Phone}
          alt="Phone"
          border="3px solid #ffffff"
          backgroundColor="#ffffff"
          mt="5px"
        />
      </Box>
      <HeroSection />
    </SimpleGrid>
  );
};

export default Sidebar;
