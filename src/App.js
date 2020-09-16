import React from "react";
import axios from "axios";
import Dropdown from "./components/Dropdown";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      values: {
        name: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => this.setState({ items: res.data }));
  }

  handleChange(value) {
    this.setState((state, props) => ({ ...state, values: { name: value } }));
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <Dropdown
          onChange={this.handleChange}
          value={this.state.values.name}
          items={this.state.items}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default App;
