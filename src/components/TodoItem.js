import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  HStack,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import locationIcon from "../resources/location.svg";
import dateTimeIcon from "../resources/dateTime.svg";

const TodoItem = ({ todo }) => {
  return (
    <Box
      w="xs"
      rounded={"sm"}
      my={5}
      mx={[0, 5]}
      overflow={"hidden"}
      bg="white"
      border={"1px"}
      borderColor="black"
      boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
    >
      <Box h={"100px"} borderBottom={"1px"} borderColor="black">
        <Image
          src={
            "https://media.istockphoto.com/id/1173780504/vector/to-do-list.jpg?s=612x612&w=0&k=20&c=v9CFBAPGBYqEZnu8Hn1ZNIuIHlk-RBj-OtMpB8WfbP4="
          }
          roundedTop={"sm"}
          objectFit="cover"
          h="full"
          w="full"
          alt={"Todo Image"}
        />
      </Box>
      <Box p={4}>
        <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
          {todo.title}
        </Heading>
        <Text color={"black.500"} fontSize={"xl"}>
          {todo.description}
        </Text>
        <Box>
          <HStack>
            <Image src={locationIcon} width={3} />
            <Text color={"gray.500"}>{todo.location}</Text>
          </HStack>
        </Box>
        <HStack>
          <Image src={dateTimeIcon} width={3} />
          <Text color={"gray.500"}>{todo.date}</Text>
        </HStack>
      </Box>
      <Box>
        <Flex gap={30} p={2} justifyContent="center">
          <Button colorScheme="blue" variant="outline">
            Edit
          </Button>
          <Button colorScheme="red" variant="outline">
            Delete
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default TodoItem;
