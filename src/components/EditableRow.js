import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter a title..."
          onChange={handleEditFormChange}
          value={editFormData.title}
        />
      </td>
      <td>
        <input
          type="text"
          name="description"
          required="required"
          placeholder="Enter a description..."
          onChange={handleEditFormChange}
          value={editFormData.description}
        />
      </td>
      <td>
        <input
          type="text"
          name="date"
          required="required"
          placeholder="Enter a date..."
          onChange={handleEditFormChange}
          value={editFormData.date}
        />
      </td>
      <td>
        <input
          type="text"
          name="location"
          required="required"
          placeholder="Enter a location..."
          onChange={handleEditFormChange}
          value={editFormData.location}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
