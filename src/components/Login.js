import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setAccessToken, accessToken }) => {
  const navigate = useNavigate();
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const jsonUser = JSON.stringify({
      userName: username,
      password: password,
    });
    axios
      .post("http://localhost:8080/login", jsonUser, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const token = res.data;
        setAccessToken(token);
        if (token !== "") {
          console.log("Navigating to home page");
          navigate("/");
        } else {
          navigate("/login");
        }
      })
      .then((err) => console.error(err));
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input type="text" name="username" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
              <Box>
                <HStack>
                  <Text>New here?</Text>
                  <Link to="/register">
                    <Text color="blue.400">Register!</Text>
                  </Link>
                </HStack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
};

export default Login;
