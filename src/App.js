import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { togglePin } from './actions'
import "./sass/Container.scss";
import * as CardActions from './actions/CardActions';

import CardList from './components/CardList';

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

export class App extends Component {
  render() {
    const { cards, actions } = this.props;

    return (
      <div className="container--poseidon" style={{
          backgroundColor: '#fff'
        }}>
        <p>Pinned Updates</p>
        <CardList source={cards} actions={actions} pinned />

        <p>All Updates</p>
        <CardList source={cards} actions={actions} />
      </div>
    );
  }
}

function mapState(state) {
  return {
    cards: state.cards
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(CardActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(App);
