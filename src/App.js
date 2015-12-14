import React, { Component } from 'react';
import "./sass/Container.scss";

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

import CardList from './components/CardList';
var cards = require("./cards.json");

export class App extends Component {
  render() {
    return (
      <div className="container--poseidon" style={{
          backgroundColor: '#fff'
        }}>
        <h3>Pinned Updates</h3>
        <CardList source={cards} pinned>
        </CardList>

        <h3>All Updates</h3>
        <CardList source={cards}>
        </CardList>
      </div>
    );
  }
}
