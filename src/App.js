import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './sass/Container.scss';
import * as CardActions from './actions/CardActions';
import * as CardViewActions from './actions/CardViewActions';
import * as SearchActions from './actions/SearchActions';

import Nav from './components/Nav';
import CardView from './components/CardView';

import {
  Dropdown
} from '../bower_components/ap-components-react/dist/ap-components-react.js';
import '../bower_components/ap-components-react/dist/ap-components-react.min.css';

export class App extends Component {

  searchPhoto(event) {
    if (event.which === 13) {
      this.props.actions.searchPhotoAction(event.target.value);
    }
  }

  render() {
    const { cards, cardView, actions } = this.props;

    return (
      <div>
      <div className='container--poseidon' style={{
          backgroundColor: '#fff'
        }}>
        <input onKeyDown={this.searchPhoto.bind(this)} type="text" ref="keyword" className="form-control input-lg" placeholder="Nature, Sky, Aurora... + Enter" />
        <Nav changeCardView={actions.changeCardView} />
        <CardView cardView={cardView} cards={cards} actions={actions} />
      </div>
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
    actions: bindActionCreators({ ...CardActions, ...CardViewActions, ...SearchActions }, dispatch)
  };
}

export default connect(mapState, mapDispatch)(App);
