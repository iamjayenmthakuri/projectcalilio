/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  List,
  ListItem,
  Image,
  Flex,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "../Images/dashbord.svg";
import Contacts from "../Images/Contacts.svg";
import setting from "../Images/setting.svg";
import sms from "../Images/sms.svg";
import Phone from "../Images/chat.svg";
import activeprofile from "../Images/activeprofile.svg";
import Mic from "../Images/mic.svg";
import Headphone from "../Images/headphone.svg";
import { ChevronDownIcon, AddIcon } from "@chakra-ui/icons";
import {
  toggleHideModeState,
  hideModeState,
  toggleSecondHideModeState,
  secondHideState,
} from "../helpers/GobalState";
import { useRecoilValue, useSetRecoilState } from "recoil";

const StyledFlex = styled(Flex)`
  align-items: center;
  gap: 10px;
  height: 36px;
  padding: 4px;
  &:hover {
    color: #c2bfbf;
  }
  &:active {
    color: #2c4b27;
  }
`;

const StyledLink = styled(Link)`
  color: #667085;
  font-style: normal;
  font-weight: 600;
  height: 20px;
  &:hover {
    color: #141212;
  }
`;

const StyledBox = styled(Box)`
  background-color: white;
  margin-top: 8px;
  box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
const StyledFlexed = styled(Flex)`
  box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.25);
`;

const StyledIcon = styled(ChevronDownIcon)`
  &:hover {
    color: #000000;
    cursor: pointer;
  }
  &:active {
    transform: rotate(180deg);
  }
`;
const Wrapper = styled(Flex)`
  background-color: white;
  padding: 2px;
  margin: 0;
  &:active ${StyledIcon} {
    transform: rotate(180deg);
  }
  &:hover ${StyledIcon} {
    color: #000000;
    cursor: pointer;
  }
`;

const StyledImage = styled(Image)`
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;

function HeroSection() {
  const isHideModeEnabaled = useRecoilValue(hideModeState);
  const isSecondHideModeEnabaled = useRecoilValue(secondHideState);

  const toggleHideMode = useSetRecoilState(toggleHideModeState);
  const toggleSecondHideMode = useSetRecoilState(toggleSecondHideModeState);

  return (
    <Flex flexDirection={"column"} gap={-1}>
      <StyledBox width=" 257px" height=" 970px" bgColor="white" padding="2rem">
        <List>
          <ListItem>
            <StyledFlex>
              <Image src={Dashboard} />
              <StyledLink to="/">Dashboard</StyledLink>
            </StyledFlex>
          </ListItem>

          <ListItem>
            <StyledFlex>
              <Image src={Contacts} />
              <StyledLink to="/contact">Contacts</StyledLink>
            </StyledFlex>
          </ListItem>

          <ListItem>
            <StyledFlex _hover={{ Color: "blue" }}>
              <Image src={setting} />
              <StyledLink to="/setting">Settings</StyledLink>
            </StyledFlex>
          </ListItem>

          <ListItem>
            <StyledFlex>
              <Image src={sms} />
              <StyledLink to="/bulksms">Bulk sms</StyledLink>
            </StyledFlex>
          </ListItem>
        </List>
        <Box background="white">
          <Flex
            w="100%"
            align="center"
            color="rgba(52, 64, 84, 1)"
            backgroundColor="white"
            marginTop="24px"
          >
            <Wrapper>
              <StyledIcon
                w="20px"
                ml={"-19px"}
                mt="4px"
                backgroundColor="white"
                onClick={toggleHideMode}
              />
              <Text
                as="div"
                w="185px"
                cursor={"pointer"}
                backgroundColor="white"
                fontWeight="600"
                pl="2px"
                onClick={toggleHideMode}
              >
                Numbers
              </Text>
            </Wrapper>
            <AddIcon w="13px" backgroundColor="white" />
          </Flex>
          {isHideModeEnabaled ? (
            <SimpleGrid
              transition="height 0.9s ease-in-out"
              outline=" 1.5px solid #e4e1e1"
              borderRadius=" 8px "
              marginTop="18px"
              height="100px"
              minChildWidth="190px"
              placeItems={"center"}
              backgroundColor="white"
            >
              <Image src={Phone} />
              <Text
                fontSize="11px"
                backgroundColor="white"
                color="#667085"
                fontWeight="400px"
              >
                You don't have any numbers in this
              </Text>
              <Text
                fontSize="11px"
                backgroundColor="white"
                color="#667085"
                fontWeight="400px"
              >
                workspace.
                <Text as="span" color="blue" backgroundColor="white">
                  Purchase Number
                </Text>
              </Text>
            </SimpleGrid>
          ) : null}
          <Flex
            w="100%"
            align="center"
            color="rgba(52, 64, 84, 1)"
            backgroundColor="white"
            marginTop="24px"
          >
            <Wrapper>
              <StyledIcon
                w="20px"
                mt="4px"
                ml={"-19px"}
                backgroundColor="white"
                onClick={toggleSecondHideMode}
              />
              <Text
                as="div"
                w="185px"
                cursor={"pointer"}
                backgroundColor="white"
                fontWeight="600"
                pl="2px"
                onClick={toggleSecondHideMode}
              >
                Members
              </Text>
            </Wrapper>
            <AddIcon w="13px" />
          </Flex>
        </Box>

        {isSecondHideModeEnabaled ? (
          <Flex
            gap="5px"
            marginTop="20px"
            align="center"
            backgroundColor="white"
          >
            <Image src={activeprofile} backgroundColor="white" />
            <Text fontSize="12px" fontWeight="500" backgroundColor="white">
              Olivia Maiden Rhye (You)
            </Text>
          </Flex>
        ) : null}
      </StyledBox>
      <StyledFlexed
        gap={3}
        width={"257px"}
        alignItems={"center"}
        backgroundColor={"white"}
        marginBottom="8px"
        padding={"20px"}
        marginTop={"-14px"}
        borderRadius={"0 0 8px 8px"}
      >
        <Image src={activeprofile} backgroundColor="white" />
        <Text fontWeight="700" backgroundColor="white" fontSize="11px">
          Olivia Maidye....
        </Text>
        <Flex justifyContent={"space-around"} gap={2} backgroundColor={"white"}>
          <StyledImage src={Mic} boxSize={4} />
          <StyledImage src={Headphone} boxSize={4} />
          <StyledImage src={setting} boxSize={4} />
        </Flex>
      </StyledFlexed>
    </Flex>
  );
}

export default HeroSection;
