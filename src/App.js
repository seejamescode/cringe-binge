import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { togglePin, toggleTop, changeCardView } from './actions'
import "./sass/Container.scss";
import * as CardActions from './actions/CardActions';

import Nav from './components/Nav';
import CardView from './components/CardView';

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
    const { cards, cardView, actions } = this.props;

    return (
      <div className="container--poseidon" style={{
          backgroundColor: '#fff'
        }}>
        <Nav changeCardView={actions.changeCardView} />
        <CardView cardView={cardView} cards={cards} actions={actions} />
      </div>
    );
  }
}

function mapState(state) {
  return {
    cards: state.cards,
    cardView: state.cardView
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(CardActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(App);
