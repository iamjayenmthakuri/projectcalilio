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
  font-size: 17px;
  line-height: 28px;
  color: #101828;
`;

const StyledImage = styled(Image)`
  size-adjust: 10px;
`;
const StyledTitle = styled(Text)`
  font-size: 15px;
`;

const StyledButton = styled(Button)`
  width: 200px;
`;

const StyledFlex = styled(Flex)`
  align-items: center;
  gap: 9px;
  justify-content: flex-start;

  padding: 4px;
  &:hover ${StyledImage} {
    background-color: var(--chakra-colors-gray-200);
  }
  &:hover {
    background-color: var(--chakra-colors-gray-200);
  }
  &:active {
    background-color: var(--chakra-colors-gray-200);
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
const StyledListItem = styled(ListItem)`
  &:hover ${StyledLink} {
    color: #000000;
  }
`;

const SettingSidebar = () => {
  return (
    <SimpleGrid
      boxShadow="inset -1px 0px 0px rgba(0, 0, 0, 0.25)"
      gap={6}
      padding={3}
      borderRadius={"8px 0px 0px 0px"}
    >
      <Flex gap={2} alignItems={"center"}>
        <StyledText fontWeight={700}>Settings</StyledText>
        <Image src={Setting} />
      </Flex>
      <SimpleGrid placeItems={"left"} gap={8} paddingLeft={6}>
        <Flex flexDirection={"column"} gap={3} marginLeft={-6}>
          <Text fontWeight={600}>User Settings</Text>
          <StyledLink to="myaccount">
            <StyledButton
              gap={2}
              bg={"#5964FF"}
              width={"98%"}
              display={"flex"}
              justifyContent={"flex-start"}
            >
              <StyledImage src={myaccount} />
              <StyledTitle color={"white"}>My Account</StyledTitle>
            </StyledButton>
          </StyledLink>
        </Flex>
        <List spacing={2}>
          <Text fontWeight={600}>WorkSpace</Text>
          <StyledListItem>
            <StyledFlex>
              <Image src={overview} />
              <StyledLink to="overview">overview</StyledLink>
            </StyledFlex>
          </StyledListItem>

          <StyledListItem>
            <StyledFlex>
              <Image src={mynumber} />
              <StyledLink to="mynumber">My Number</StyledLink>
            </StyledFlex>
          </StyledListItem>

          <StyledListItem>
            <StyledFlex>
              <Image src={member} />
              <StyledLink to="member">Member</StyledLink>
            </StyledFlex>
          </StyledListItem>

          <StyledListItem>
            <StyledFlex>
              <Image src={blocklist} />
              <StyledLink to="blocklist">Block List</StyledLink>
            </StyledFlex>
          </StyledListItem>
        </List>
        <List spacing={2}>
          <Text fontWeight={600}>Billing</Text>
          <StyledListItem>
            <StyledFlex>
              <Image src={subscription} />
              <StyledLink to="subscription">Subscription</StyledLink>
            </StyledFlex>
          </StyledListItem>

          <StyledListItem>
            <StyledFlex>
              <Image src={payment} />
              <StyledLink to="payment">Payment method</StyledLink>
            </StyledFlex>
          </StyledListItem>
        </List>
        <List spacing={2}>
          <Text fontWeight={600}>Application Setting</Text>
          <StyledListItem>
            <StyledFlex>
              <Image src={audio} />
              <StyledLink to="audio">Audio</StyledLink>
            </StyledFlex>
          </StyledListItem>

          <StyledListItem>
            <StyledFlex>
              <Image src={notification} />
              <StyledLink to="notification">Notification</StyledLink>
            </StyledFlex>
          </StyledListItem>
        </List>
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default SettingSidebar;
