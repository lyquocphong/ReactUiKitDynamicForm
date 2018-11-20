import React from "react";
import TextField from "./TextField";
import EmailField from "./EmailField";
import StackFormLegend from "./StackFormLegend";

class StackFormField extends React.Component {
  state = {
    type: this.props.type
  };

  components = {
    text: TextField,
    email: EmailField,
    legent: StackFormLegend
  };

  render() {
    console.log(this.state);
    const TagName = this.components[this.props.type];
    return <TagName {...this.props} />;
  }
}

export default StackFormField;
