/* eslint-disable react/no-children-prop */
import {
  Flex,
  Text,
  Image,
  Grid,
  Container,
  Input,
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import styled from "styled-components";
import Avatarprofilephoto from "../../Images/Avatarprofilephoto.svg";
import backgroundprofile from "../../Images/backgroundprofile.svg";

import Mailplaceholder from "../../Images/mailplaceholder";

const StyledFlex = styled(Flex)`
  width: 100%;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
`;
const StyledText = styled(Text)`
  background-color: white;

  margin-left: 15px;
  font-weight: 700;
  font-size: 14px;
  line-height: 48px;
  color: #344054;
`;
const StyledImage = styled(Image)`
  background-image: url(${backgroundprofile});
  width: 98.5%;
  border-radius: 8px 8px 0px 0px;
  margin-top: 10px;
  margin-left: 5px;
  height: 120px;
`;

function Myaccount() {
  return (
    <>
      <Grid>
        <StyledFlex bg={"white"} gap={2} borderRadius="0 8px 0 0">
          <StyledText>My account</StyledText>
        </StyledFlex>

        <StyledImage />
        <Flex h={"min-content"} mt={1}>
          <Image src={Avatarprofilephoto} boxSize={152} marginTop={"-65px"} />
          <Grid padding={2}>
            <Text fontSize={26} color="#101828" fontWeight={600}>
              Olivia Rhye
            </Text>
            <Text fontSize={13} marginTop={"-17px"} color={"#344054"}>
              olivia@calilio.com
            </Text>
          </Grid>
        </Flex>
      </Grid>
      <Container
        display={"flex"}
        justifyContent={"start"}
        gap={6}
        mt={4}
        w={"100%"}
        padding={2}
      >
        <Box w="140px" ml="-50px">
          <Text fontSize={14}>Personal info</Text>
          <Text fontSize={10} color={" #6E6681"}>
            Update your personal details.
          </Text>
        </Box>
        <Grid flexGrow={1} padding={2}>
          <FormControl
            padding={1}
            boxShadow="0 0 2px rgba(0, 0, 0, 0.4)"
            borderRadius="8px"
          >
            <Box padding={2}>
              <FormLabel fontSize={14}>Full Name</FormLabel>
              <Input type="text" placeholder="Olivia Rhye" />

              <FormLabel fontSize={14} mt={4}>
                Email address
              </FormLabel>

              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Mailplaceholder />}
                />
                <Input type="tel" placeholder="email address" />
              </InputGroup>
            </Box>
          </FormControl>
        </Grid>
      </Container>
      <Flex gap={10} mt={5} ml={10} justifyContent={"start"}>
        <Grid>
          <Text fontSize={14}>Password</Text>
          <Text fontSize={10} color={" #6E6681"}>
            Choose a strong Password
          </Text>
        </Grid>
        <Button color={"#0011FC"} fontSize={14} bg={"#E8EAFF"}>
          Change Password
        </Button>
      </Flex>
    </>
  );
}

export default Myaccount;
