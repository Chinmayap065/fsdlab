import React, { Component } from "react";

class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = { city: "Mysore" };
    console.log("Constructor called");
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps: The component is being called");
    return null;
  }

  componentDidMount() {
    console.log("The component was mounted");
    setTimeout(() => {
      this.setState({ city: "Bangalore" }); // Fixed setState syntax
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate is called");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate is called");
    console.log(`Previous city: ${prevState.city}, New city: ${this.state.city}`); // Fixed prevState spelling
  }
  componentWillUnmount(){
    console.log("Component unmounted")
  }

  render() {
    console.log('Render is been called')
    return (
      <div>
        <h2>City: {this.state.city}</h2>
      </div>
    );
  }
}

export default ReactLifeCycle;
