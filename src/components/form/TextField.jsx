import React from "react";

class TextField extends React.Component {
  state = {
    label: this.props.label || "Text",
    value: this.props.value || "",
    placeholder: this.props.placeholder || "Fill text here"
  };

  render() {
    return (
      <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">
          {this.state.label}
        </label>
        <div class="uk-form-controls">
          <input
            class="uk-input"
            id="form-stacked-text"
            type="text"
            placeholder={this.state.placeholder}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default TextField;
