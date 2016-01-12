import React, { Component, PropTypes } from 'react';
import CardList from './CardList';

export default class CardView extends React.Component {

  render() {

    let currentView = '';

    if (this.props.cardView === 'updates') {
      currentView = <div><p>Top Updates</p><CardList source={this.props.cards} actions={this.props.actions} top /><p>All Updates</p><CardList source={this.props.cards} actions={this.props.actions} /></div>;
    } else if(this.props.cardView === 'pins') {
      currentView = <div><p>All Pinned</p><CardList source={this.props.cards} actions={this.props.actions} pinned /></div>;
    }

    return (
      <div>
        {currentView}
      </div>
    );
  }
}