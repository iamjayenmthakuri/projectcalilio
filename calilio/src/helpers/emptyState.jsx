/* eslint-disable react/prop-types */
import { Container, Flex, Text, Image, Heading, Grid } from "@chakra-ui/react";
import styled from "styled-components";

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

function EmptyComponent(props) {
  const {
    // eslint-disable-next-line react/prop-types
    headTitle,
    headImageUrl,
    mainImageUrl,
    mainTitle,
    message,
    subMessage,
  } = props;

  return (
    <>
      <Flex margin={15} bg={"white"} gap={1} alignItems={"center"}>
        <StyledText>{headTitle}</StyledText>
        <StyledImage src={headImageUrl} bg={"white"} />
      </Flex>
      <Flex
        backgroundColor={"white"}
        alignItems="center"
        justifyContent="center"
      >
        <Container
          display={"grid"}
          maxW="container.md"
          backgroundColor={"white"}
          placeItems={"center"}
          gap={4}
        >
          <Grid
            placeItems={"center"}
            marginTop={"170px"}
            backgroundColor={"white"}
            gap={2}
          >
            <Image src={mainImageUrl} boxSize={134} background={"White"} />
            <Heading as={"Heading"} background={"White"} fontSize={18}>
              {mainTitle}
            </Heading>
            <Flex
              gap={-2}
              flexDirection={"column"}
              alignItems={"center"}
              backgroundColor={"white"}
            >
              <Text bg={"white"} fontSize={14}>
                {message}
              </Text>
              <Text bg={"whiteAlpha.900"}>{subMessage}</Text>
            </Flex>
          </Grid>
        </Container>
      </Flex>
    </>
  );
}

export default EmptyComponent;
