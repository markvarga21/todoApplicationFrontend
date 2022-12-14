import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const fullName = String(event.target.fullName.value).trim();
    const username = String(event.target.username.value).trim();
    const password = event.target.password.value;
    const jsonUser = JSON.stringify({
      name: fullName,
      userName: username,
      password: password,
    });
    axios
      .post("http://localhost:8080/api/user/register", jsonUser, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data !== "") {
          console.log("Navigating to login page");
          navigate("/login");
        }
      })
      .then((err) => console.error(err))
      .catch((err) => {
        console.err(err);
      });
  };
  return (
    <form onSubmit={handleRegisterSubmit}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy this cool todo app ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="name" isRequired>
                    <FormLabel>Full name</FormLabel>
                    <Input type="text" name="fullName" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="text" name="username" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Box>
                <HStack>
                  <Text>Already a member?</Text>
                  <Link to="/login">
                    <Text color="blue.400">Login!</Text>
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

export default Register;
