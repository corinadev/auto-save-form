import React, { Component } from "react";

/**
 * Computes what to show in a form based on:
 * - previously saved draft
 * - latest db version of the entity
 * - default values
 *
 * TODO Consider merging entry with draft as well in case things changed in the meantime
 */
const getInitialFormValues = ({ draft, entity, defaultValues }) => {
  if (!draft && !entity) {
    return {
      ...defaultValues
    };
  }

  if (!draft) {
    return {
      ...entity
    };
  }

  return {
    ...draft
  };
};

class AutoSaveForm extends Component {
  state = {
    userChanges: {}
  };
  componentDidMount() {
    this.props.onFormReady(this.props.entityId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.entityId !== prevProps.entityId) {
      this.props.onFormReady(this.props.entityId);
      this.setState({ userChanges: {} });
    }

    if (
      JSON.stringify(this.state.userChanges) !==
      JSON.stringify(prevState.userChanges)
    ) {
      this.props.onDraftChanged(
        this.props.entityId,
        this.props.entityType,
        this.state.userChanges
      );
    }
  }

  handleFieldChanged = e => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState(state => ({
      userChanges: {
        ...state.userChanges,
        [key]: value
      }
    }));
  };

  handleFormSubmit = e => {
    e.preventDefault();

    // TODO Read values from state instead of HTML form?
    // Since the form is controlled ...
    const formData = new FormData(e.target);
    const entries = Array.from(formData.entries());
    const data = entries.reduce((acc, value) => {
      acc[value[0]] = value[1];
      return acc;
    }, {});

    this.props.onSave({ ...data, id: this.props.entityId });
  };

  handleFormCancel = e => {
    e.preventDefault();
    this.props.onCancel();
  };

  render() {
    const { draft, entity, isLoading } = this.props;
    if (isLoading) {
      return <div>Loading ...</div>;
    }

    // TODO Make default values generic as well
    const initialFormValues = getInitialFormValues({
      draft: draft,
      entity: entity,
      defaultValues: {
        description: "",
        dueDate: "",
        assignee: ""
      }
    });
    const formData = {
      ...initialFormValues,
      ...this.state.userChanges
    };

    return (
      <div className="autoSaveForm">
        <form onSubmit={this.handleFormSubmit}>
          {this.props.children(formData, this.handleFieldChanged)}
          <div>
            <button onClick={this.handleFormCancel}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AutoSaveForm;
