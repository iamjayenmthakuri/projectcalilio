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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import styled from "styled-components";
import Avatarprofilephoto from "../../Images/Avatarprofilephoto.svg";
import backgroundprofile from "../../Images/backgroundprofile.svg";
import changePassword from "../../Images/changepassword.svg";
import Mailplaceholder from "../../Images/mailplaceholder";
import { useRef, useState } from "react";

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
const StyledModal = styled(Modal)`
  display: grid;
  place-items: center;
`;

function Myaccount() {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const { isOpen, onOpen } = useDisclosure();

  const [name, setName] = useState("Oliviya Ryhe");
  const [email, setEmail] = useState("olivia@gmali.com");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [show, setShow] = useState(false);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    setShow(true);
  };

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
    setShow(true);
  };

  const handleSaveChanges = () => {
    setName(newName);
    setEmail(newEmail);
    setShow(false);
  };
  const handleCancel = () => {
    setNewName(name);
    setNewEmail(email);
    setShow(false);
  };

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
              {name}
            </Text>
            <Text fontSize={13} marginTop={"-17px"} color={"#344054"}>
              {email}
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
              <Input
                type="text"
                placeholder={name}
                value={newName}
                onChange={handleNameChange}
              />

              <FormLabel fontSize={14} mt={4}>
                Email address
              </FormLabel>

              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Mailplaceholder />}
                />
                <Input
                  type="tel"
                  placeholder={email}
                  onChange={handleEmailChange}
                  value={newEmail}
                />
              </InputGroup>
            </Box>
            {show && (
              <Flex justifyContent={"end"} gap={3} mr={2} padding={1}>
                <Button
                  color={" #344054"}
                  fontSize={13}
                  bg={"#ffffff"}
                  h={"35px"}
                  boxShadow="0 0 2px rgba(0, 0, 0, 0.4)"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button
                  color={"#0011FC"}
                  fontSize={13}
                  bg={"#E8EAFF"}
                  h={"35px"}
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </Button>
              </Flex>
            )}
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
        <Button onClick={onOpen} color={"#0011FC"} fontSize={14} bg={"#E8EAFF"}>
          Change Password
        </Button>
        <Grid placeItems={"center"}>
          <StyledModal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
          >
            <ModalOverlay />
            <ModalContent w={400}>
              <ModalHeader display={"grid"} placeItems={"center"}>
                <Image src={changePassword} />
                Change Password
                <Text color={" #6E6681"} fontSize={14} fontWeight={400}>
                  Please enter your current password for verification
                </Text>
                <Text color={" #6E6681"} fontSize={14} fontWeight={400}>
                  and create a new strong password
                </Text>
              </ModalHeader>

              <ModalBody pb={6} placeItems={"center"} display={"grid"}>
                <FormControl>
                  <FormLabel color={" #344054"} fontSize={14}>
                    Enter Current Password
                  </FormLabel>
                  <Input
                    type="password"
                    ref={initialRef}
                    placeholder="current password"
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel color={" #344054"} fontSize={14}>
                    New Password
                  </FormLabel>
                  <Input type="password" placeholder="new password" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel color={" #344054"} fontSize={14}>
                    Confirm Password
                  </FormLabel>
                  <Input type="password" placeholder="confirm password" />
                </FormControl>
              </ModalBody>

              <ModalFooter
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button bg={"#5964FF"} color="#ffffff" fontSize={16}>
                  Change Password
                </Button>
              </ModalFooter>
            </ModalContent>
          </StyledModal>
        </Grid>
      </Flex>
    </>
  );
}

export default Myaccount;
