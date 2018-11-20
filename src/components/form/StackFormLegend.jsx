import React from "react";
import StackFormField from "./StackFormField.jsx";

class StackFormLegend extends React.Component {
  state = {
    label: this.props.label || "",
    fields: this.props.fields || []
  };

  render() {
    const newObj = this.state.fields.map(k => <StackFormField {...k} />);

    return (
      <legend class="uk-legend">
        {this.state.label}
        {newObj}
      </legend>
    );
  }
}

export default StackFormLegend;
