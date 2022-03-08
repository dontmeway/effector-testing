import { Box, Stack } from "@chakra-ui/react";
import { AuthForm } from "@features/auth/by-email";
import React from "react";

const Login: React.FC = () => {
  return (
    <Box
      minH="100vh"
      w="100%"
      d="flex"
      justifyContent="center"
      alignItems="center"
      bg="blue.900"
    >
      <AuthForm />
    </Box>
  );
};

export default Login;
