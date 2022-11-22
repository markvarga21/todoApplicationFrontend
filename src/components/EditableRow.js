import { Button, Input, Td, Tr } from "@chakra-ui/react";
import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <Tr>
      <Td>
        <Input
          type="text"
          name="title"
          required="required"
          placeholder="Enter a title..."
          onChange={handleEditFormChange}
          value={editFormData.title}
        />
      </Td>
      <Td>
        <Input
          type="text"
          name="description"
          required="required"
          placeholder="Enter a description..."
          onChange={handleEditFormChange}
          value={editFormData.description}
        />
      </Td>
      <Td>
        <Input
          type="text"
          name="date"
          required="required"
          placeholder="Enter a date..."
          onChange={handleEditFormChange}
          value={editFormData.date}
        />
      </Td>
      <Td>
        <Input
          type="text"
          name="location"
          required="required"
          placeholder="Enter a location..."
          onChange={handleEditFormChange}
          value={editFormData.location}
        />
      </Td>
      <Td>
        <Button type="submit">Save</Button>
        <Button type="button" onClick={handleCancelClick}>
          Cancel
        </Button>
      </Td>
    </Tr>
  );
};

export default EditableRow;
