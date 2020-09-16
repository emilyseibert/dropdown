import React from "react";
import DropdownMenu from "./DropdownMenu";

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      closed: true,
      value: { name: "" },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ closed: true, value: value });
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropdown-value">
          <span>{this.state.value.name}</span>
          <button
            onClick={() =>
              this.setState((state) => ({ closed: !state.closed }))
            }
          >
            Caret-down
          </button>
        </div>

        {!this.state.closed && (
          <DropdownMenu
            items={this.props.items}
            onItemClick={this.handleChange}
          />
        )}
      </div>
    );
  }
}

export default Dropdown;
