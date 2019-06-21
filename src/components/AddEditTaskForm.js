import React, { Fragment } from "react";
import AutoSaveForm from "../containers/AutoSaveForm";
import { DRAFT_ENTITY_TYPE } from "../constants/drafts";

const AddEditTaskForm = props => (
  <AutoSaveForm entityType={DRAFT_ENTITY_TYPE.TASK} {...props}>
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
          <select
            name="assignee"
            value={values.assignee}
            onChange={handleChange}
          >
            <option value="Bob">Bob</option>
            <option value="John">John</option>
            <option value="Lewis">Lewis</option>
          </select>
        </div>
        <div>
          <label>Due date</label>
          <input
            type="date"
            name="dueDate"
            value={values.dueDate}
            onChange={handleChange}
          />
        </div>
      </Fragment>
    )}
  </AutoSaveForm>
);

export default AddEditTaskForm;
