import React from "react";
import StackFormField from "./StackFormField";

class StackForm extends React.Component {
  state = {
    fields: this.props.fields || []
  };

  render() {
    const newObj = this.state.fields.map(k => <StackFormField {...k} />);

    return <form class="uk-form-stacked">{newObj}</form>;
  }
}

export default StackForm;
