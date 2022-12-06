import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  HStack,
  Image,
  Input,
  Button,
  Flex,
  FormControl,
} from "@chakra-ui/react";
import locationIcon from "../resources/location.svg";
import dateTimeIcon from "../resources/dateTime.svg";
import React from "react";

const EditableTodoitem = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <FormControl>
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
            <Input
              size="lg"
              type="text"
              name="title"
              required="required"
              placeholder="Enter a title..."
              onChange={handleEditFormChange}
              value={editFormData.title}
            />
          </Heading>
          <Text color={"black.500"} fontSize={"xl"}>
            <Input
              size="md"
              type="text"
              name="description"
              required="required"
              placeholder="Enter a description..."
              onChange={handleEditFormChange}
              value={editFormData.description}
            />
          </Text>
          <Box>
            <HStack>
              <Image src={locationIcon} width={3} />
              <Text color={"gray.500"}>
                <Input
                  size="sm"
                  type="text"
                  name="location"
                  required="required"
                  placeholder="Enter a location..."
                  onChange={handleEditFormChange}
                  value={editFormData.location}
                />
              </Text>
            </HStack>
          </Box>
          <HStack>
            <Image src={dateTimeIcon} width={3} />
            <Text color={"gray.500"}>
              <Input
                size="sm"
                type="text"
                name="date"
                required="required"
                placeholder="Enter a date..."
                onChange={handleEditFormChange}
                value={editFormData.date}
              />
            </Text>
          </HStack>
        </Box>
        <Box>
          <Flex gap={30} p={2} justifyContent="center">
            <Button type="submit" colorScheme="blue" variant="outline">
              Save
            </Button>
            <Button
              type="button"
              onClick={handleCancelClick}
              colorScheme="red"
              variant="outline"
            >
              Cancel
            </Button>
          </Flex>
        </Box>
      </Box>
    </FormControl>
  );
};

export default EditableTodoitem;
