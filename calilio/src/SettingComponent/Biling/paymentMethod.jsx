import { Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";
import payment from "../../Images/payment.svg";

const StyledText = styled(Text)`
  background-color: white;
`;

const StyledImage = styled(Image)``;

const PaymentMethod = () => {
  return (
    <Flex margin={15} bg={"white"} gap={2} alignItems={"center"}>
      <StyledText>Payment Method</StyledText>
      <StyledImage src={payment} bg={"white"} />
    </Flex>
  );
};

export default PaymentMethod;
