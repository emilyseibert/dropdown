import React from "react";

class DropdownMenu extends React.Component {
  render() {
    return (
      <ul className="dropdown-menu">
        {this.props.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}
export default DropdownMenu;
