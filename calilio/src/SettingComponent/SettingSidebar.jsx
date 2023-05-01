import {
  Image,
  List,
  ListItem,
  Flex,
  Text,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import overview from "../Images/dashbord.svg";
import Setting from "../Images/setting.svg";
import blocklist from "../Images/blocklist.svg";
import mynumber from "../Images/mynumber.svg";
import audio from "../Images/headphone.svg";
import notification from "../Images/notification.svg";
import payment from "../Images/payment.svg";
import subscription from "../Images/subscription.svg";
import member from "../Images/member.svg";
import myaccount from "../Images/myaccount.svg";

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
const StyledTitle = styled(Text)`
  font-size: 15px;
`;

const StyledButton = styled(Button)`
  width: 210px;

  &:hover ${StyledImage} {
    background-color: var(--chakra-colors-gray-200);
  }
  &:hover ${StyledTitle} {
    background-color: var(--chakra-colors-gray-200);
  }
`;

const StyledFlex = styled(Flex)`
  align-items: center;
  gap: 11px;
  justify-content: flex-start;
  background-color: #ffffff;

  padding: 4px;
  &:hover {
    background-color: #c2bfbf;
  }
  &:active {
    background-color: #2c4b27;
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

const SettingSidebar = () => {
  return (
    <SimpleGrid
      boxShadow="inset -1px 0px 0px rgba(0, 0, 0, 0.25)"
      backgroundColor={"white"}
      gap={6}
      padding={3}
      borderRadius={"8px 0 0 0"}
    >
      <Flex bg={"white"} gap={2} alignItems={"center"}>
        <StyledText fontWeight={700}>Settings</StyledText>
        <Image src={Setting} bg={"white"} />
      </Flex>
      <SimpleGrid
        placeItems={"left"}
        backgroundColor={"white"}
        gap={7}
        paddingLeft={6}
      >
        <Flex
          flexDirection={"column"}
          gap={2}
          backgroundColor={"white"}
          marginLeft={-6}
        >
          <Text bg={"white"} fontWeight={600}>
            User Settings
          </Text>

          <StyledButton
            color={"white"}
            gap={2}
            bg={"#5964FF"}
            width={"103%"}
            display={"flex"}
            justifyContent={"flex-start"}
          >
            <StyledImage src={myaccount} />
            <StyledTitle>My Account</StyledTitle>
          </StyledButton>
        </Flex>
        <List spacing={2} bg={"white"}>
          <Text bg={"white"} fontWeight={600}>
            WorkSpace
          </Text>
          <ListItem>
            <StyledFlex>
              <Image src={overview} background={"white"} />
              <StyledLink to="overview">overview</StyledLink>
            </StyledFlex>
          </ListItem>

          <ListItem>
            <StyledFlex>
              <Image src={mynumber} background={"white"} />
              <StyledLink to="mynumber">My Number</StyledLink>
            </StyledFlex>
          </ListItem>

          <ListItem>
            <StyledFlex>
              <Image src={member} background={"white"} />
              <StyledLink to="member">Member</StyledLink>
            </StyledFlex>
          </ListItem>

          <ListItem>
            <StyledFlex>
              <Image src={blocklist} background={"white"} />
              <StyledLink to="blocklist">Block List</StyledLink>
            </StyledFlex>
          </ListItem>
        </List>
        <List spacing={2} bg={"white"}>
          <Text bg={"white"} fontWeight={600}>
            Billing
          </Text>
          <ListItem>
            <StyledFlex>
              <Image src={subscription} background={"white"} />
              <StyledLink to="subscription">Subscription</StyledLink>
            </StyledFlex>
          </ListItem>

          <ListItem>
            <StyledFlex>
              <Image src={payment} background={"white"} />
              <StyledLink to="payment">Payment method</StyledLink>
            </StyledFlex>
          </ListItem>
        </List>
        <List spacing={2} bg={"white"}>
          <Text bg={"white"} fontWeight={600}>
            Application Setting
          </Text>
          <ListItem>
            <StyledFlex>
              <Image src={audio} background={"white"} />
              <StyledLink to="audio">Audio</StyledLink>
            </StyledFlex>
          </ListItem>

          <ListItem>
            <StyledFlex>
              <Image src={notification} background={"white"} />
              <StyledLink to="notification">Notification</StyledLink>
            </StyledFlex>
          </ListItem>
        </List>
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default SettingSidebar;
