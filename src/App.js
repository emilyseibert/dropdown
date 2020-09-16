import React from "react";
import axios from "axios";
import Dropdown from "./components/Dropdown";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => this.setState({ items: res.data }));
  }

  render() {
    return (
      <div className="App">
        <Dropdown items={this.state.items} />
      </div>
    );
  }
}

export default App;
