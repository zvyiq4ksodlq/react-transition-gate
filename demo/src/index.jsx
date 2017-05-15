import React, { Component } from "react";
import ReactDOM from "react-dom";
import makeTransitionGate from "../../src/index";

const Message = ({ transitionStyles }) => (
  <div>
    <p
      style={{
        opacity: transitionStyles.opacity,
        transform: `translateY(${transitionStyles.y}%)`
      }}
    >
      {"Fades in/out"}
    </p>
    <p>{"Does not fade but is still mounted/unmounted"}</p>
  </div>
);

const EnhancedMessage = makeTransitionGate(Message, {
  enter: () => ({ opacity: 0.25, y: -30 }),
  update: () => ({ opacity: 1, y: 0 }),
  leave: () => ({ opacity: 0, y: 50 }),
  duration: 300,
  easing: "easeQuadIn"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.handleToggle}>{open ? "Close" : "Open"}</button>
        <hr />
        <EnhancedMessage open={open} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app-container"));
