import React from "react";
import DropdownMenu from "./DropdownMenu";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      closed: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  closeMenu() {
    this.setState({ closed: true });
  }

  handleChange(value) {
    this.setState({ closed: true });
    this.props.onChange(value);
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropdown-value">
          <span>{this.props.value.name}</span>
          <button
            onClick={() =>
              this.setState((state) => ({ closed: !state.closed }))
            }
          >
            v
          </button>
        </div>

        {!this.state.closed && (
          <DropdownMenu
            closeMenu={this.closeMenu.bind(this)}
            items={this.props.items}
            onItemClick={this.handleChange}
          />
        )}
      </div>
    );
  }
}

export default Dropdown;
