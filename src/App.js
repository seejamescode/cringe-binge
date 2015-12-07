import React, { Component } from 'react';

import {
  Breadcrumb,
  Button,
  Checkbox,
  Code,
  Dropdown,
  Hyperlink,
  Icon,
  RadioGroup,
  ResponsiveTable,
  Slider,
  TextField,
  ToggleButton
} from '../bower_components/ap-components-react/dist/ap-components-react.js';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={1} />
        <Counter increment={5} />
        <Button href="" hyperlink disabled>
          Hyperlink Disabled
        </Button>
        <div  style={{margin: '4em'}}>
          <Slider start={[15, 85]} lower={0} upper={100} step={1} />
        </div>
      </div>
    );
  }
}