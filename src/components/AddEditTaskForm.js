import React, { Fragment } from "react";
import AutoSaveForm from "./AutoSaveForm";

const AddEditTaskForm = props => (
  <AutoSaveForm {...props}>
    {(values, handleChange) => (
      <Fragment>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Assignee</label>
          <select name="assignee" value={values.assignee}>
            <option value="Bob">Bob</option>
            <option value="John">John</option>
            <option value="Lewis">Lewis</option>
          </select>
        </div>
        <div>
          <label>Due date</label>
          <input type="date" name="dueDate" value={values.dueDate} />
        </div>
      </Fragment>
    )}
  </AutoSaveForm>
);

export default AddEditTaskForm;
