import {
  Flex,
  Text,
  Image,
  Grid,
  Container,
  Button,
  Input,
  Box,
} from "@chakra-ui/react";
import styled from "styled-components";
import Avatarprofilephoto from "../../Images/Avatarprofilephoto.svg";
import backgroundprofile from "../../Images/backgroundprofile.svg";

const StyledFlex = styled(Flex)`
  width: 100%;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
`;
const StyledText = styled(Text)`
  background-color: white;

  margin-left: 15px;
  font-weight: 700;
  font-size: 15px;
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
const MyAccountWrapper = styled(Container)`
  background-color: white;
  width: 870px;
  border-radius: 0 8px 8px 0;
`;
// const MyAccountComponent = styled.div``;
// const Heading = styled.div`
//   padding: 16px 24px;
//   border-bottom: 1px solid #d0d5dd;
//   h2 {
//     font-weight: 700;
//     font-size: 18px;
//     color: #344054;
//   }
// `;
// const AccountContent = styled.div``;
// const BackgroundBox = styled.div`
//   margin: 7px;
//   border-radius: 8px 8px 0 0;
//   background-image: url(${BgImage});
//   width: 856px;
//   height: 200px;
//   position: relative;
// `;
const PersonelInfo = styled(Box)`
  display: flex;
  flex-direction: column;
`;
// const MyNameWrapper = styled(Container)`
//   position: relative;
//   height: 70px;
// `;
// const MyName = styled(Text)`
//   position: absolute;
//   left: 190px;
//   height: 100px;
//   span {
//     font-size: 30px;
//     font-weight: 600px;
//     line-height: 38px;
//     color: #101828;
//   }
//   p {
//     font-weight: 400;
//     font-size: 16px;
//     color: #475467;
//     line-height: 24px;
//   }
// `;
const InputField = styled.div`
  padding: 30px;
  display: flex;
  width: 100%;
  height: 212px;
`;
const InputText = styled.div`
  padding-right: 20px;
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #344054;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #475467;
  }
`;
const InputBox = styled(Box)`
  padding: 24px;
`;
const IfullName = styled(Text)`
  padding-bottom: 12px;
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 8px;
  }
`;
const EmailAddress = styled.div`
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 8px;
  }
`;
const Password = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
`;
const PasswordText = styled.div`
  padding-right: 32px;
  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #344054;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #6e6681;
  }
`;
const PasswordButton = styled.div``;
const MyButton = styled(Button)`
  font-weight: 600;
  line-height: 20px;
  color: blue;
`;

function Myaccount() {
  return (
    <>
      <Grid backgroundColor={"white"}>
        <StyledFlex bg={"white"} gap={2}>
          <StyledText>My account</StyledText>
        </StyledFlex>

        <StyledImage />
        <Flex h={"min-content"}>
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
      <MyAccountWrapper>
        <PersonelInfo>
          <InputField>
            <InputText>
              <Text>Personel info</Text>
              <span>Update your personal details.</span>
            </InputText>
            <InputBox>
              <IfullName>
                <Text>Full name</Text>
                <Input
                  placeholder="Your name"
                  padding="10px 14px"
                  width="521px"
                  height="44px"
                />
              </IfullName>
              <EmailAddress>
                <Text>Email address</Text>
                <Input
                  placeholder="Your email"
                  padding="10px 14px"
                  width="521px"
                  height="44px"
                />
              </EmailAddress>
            </InputBox>
          </InputField>
          <Password>
            <PasswordText>
              <span>Password</span>
              <p>Choose a strong password</p>
            </PasswordText>
            <PasswordButton>
              <MyButton fontSize="14px">Change Password</MyButton>
            </PasswordButton>
          </Password>
        </PersonelInfo>
      </MyAccountWrapper>
    </>
  );
}

export default Myaccount;
