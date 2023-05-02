import {
  Container,
  Flex,
  Text,
  Image,
  Button,
  Heading,
  Grid,
} from "@chakra-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledText = styled(Text)`
  /* width: 80px;
    height: 28px; */
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
`;
const StyledImage = styled(Image)`
  size-adjust: 10px;
`;
const StyledButton = styled(Button)`
  &:hover ${StyledImage} {
    background-color: var(--chakra-colors-gray-200);
  }
`;

const StyledLink = styled(Link)`
  color: #667085;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
  height: 20px;
  &:hover {
    color: #141212;
    text-decoration: none;
  }
`;

function PageNotFound() {
  return (
    <>
      <Flex margin={15} gap={1} alignItems={"center"}>
        <StyledText>Page Not Found</StyledText>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <Container
          display={"grid"}
          maxW="container.md"
          placeItems={"center"}
          gap={4}
        >
          <Grid placeItems={"center"} marginTop={"170px"} gap={2}>
            <Heading as={"Heading"} fontSize={18}>
              Page Not Found: 404 Error
            </Heading>
            <Flex gap={-2} flexDirection={"column"} alignItems={"center"}>
              <Text fontSize={14}>This page does not exist in your site.</Text>
              <Text>please Try Again...</Text>
            </Flex>

            <StyledLink to="/">
              <StyledButton
                color={"white"}
                gap={2}
                bg={"#5964FF"}
                width={"103%"}
                display={"flex"}
                justifyContent={"flex-start"}
              >
                Back to Home Page
              </StyledButton>
            </StyledLink>
          </Grid>
        </Container>
      </Flex>
    </>
  );
}

export default PageNotFound;
