import { Box, Container, Flex, VStack, Image } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxH={"container.md"} padding={0}>
        <Box display={{ base: "none", md: "block" }}>
          <Image src="./auth.png" h={650} alt="Phone img" />
        </Box>
        <VStack spacing={4} align={"stretch"}>
          <AuthForm />
        </VStack>
      </Container>
    </Flex>
  );
};

export default AuthPage;
