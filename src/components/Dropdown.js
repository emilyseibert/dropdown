import React from "react";
import DropdownMenu from "./DropdownMenu";

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      closed: true,
    };
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropdown-value">
          <span>Value</span>
          <button
            onClick={() =>
              this.setState((state) => ({ closed: !state.closed }))
            }
          >
            Caret-down
          </button>
        </div>

        {!this.state.closed && <DropdownMenu items={this.props.items} />}
      </div>
    );
  }
}

export default Dropdown;
