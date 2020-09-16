import React from "react";

class DropdownMenu extends React.Component {
  constructor() {
    super();

    this.wrapperRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }

  componentWillMount() {
    document.removeEventListener("click", this.handleClick);
  }

  handleClick(event) {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      this.props.closeMenu();
    }
  }

  render() {
    return (
      <ul className="dropdown-menu" ref={this.wrapperRef}>
        {this.props.items.map((item) => (
          <li
            key={item.id}
            value={item.name}
            onClick={() => this.props.onItemClick(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}
export default DropdownMenu;
