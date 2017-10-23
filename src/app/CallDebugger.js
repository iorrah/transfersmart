import React from 'react';

class CallDebugger extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    debugger
  }

  render() {
    return (
      <button onClick={this.onClick}>Call Debugger</button>
    );
  }
}

export default CallDebugger;
