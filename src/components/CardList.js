import React, { Component, PropTypes } from 'react';
import Card from './Card';

import "../sass/CardList.scss";

export default class CardList extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
      heightArray: [],
      largestHeight: 15
    };
  }

  handleHeight(id, value) {
    const heightArray = this.state.heightArray
    heightArray[id] = value;
    this.setState({ heightArray : heightArray});

    let heightMatch = false;
    let heightLarger = false;
    let largest = Math.max.apply(Math, this.state.heightArray);
    for (var i = 0; i < this.state.heightArray.length; i++) {
      if (this.state.heightArray[i] === this.state.largestHeight) {
        heightMatch = true;
      } else if (this.state.heightArray[i] > this.state.largestHeight) {
        heightLarger = true;
      }
    }

    if (heightMatch === false) {
      for (var i = 0; i < this.state.heightArray.length; i++) {
        if (this.state.heightArray[i] === largest) {
          this.setState({ largestHeight: value });
        }
      }
    }

    if (heightLarger === true) {
      for (var i = 0; i < this.state.heightArray.length; i++) {
        if (this.state.heightArray[i] > this.state.largestHeight) {
          this.setState({ largestHeight: value });
        }
      }
    }
  }

  formatDate(date) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let monthNumber = parseInt((date.substring(0, date.indexOf('/'))), 10);
    let dayYearNumber = date.substring(date.indexOf("/") + 1);
    let dayNumber = dayYearNumber.substring(0, dayYearNumber.indexOf('/'));
    let yearNumber = dayYearNumber.substring(dayYearNumber.indexOf("/") + 1);

    let properDate = months[monthNumber - 1] + ' ' + dayNumber + ', ' + yearNumber;
    return properDate;
  }

  getCard(id, date, img, pinned, title, top, description, key, actions) {
    return <Card id={id} date={this.formatDate(date)} img={img} pinned={pinned} top={top} title={title} description={description} onHeightChange={this.handleHeight.bind(this)} key={key} index={key} largestHeight={this.state.largestHeight} {...actions} />
  }

  render() {
    let cards = [];
    let currentCard;
    const { actions } = this.props;

    for (var i=0; i < this.props.source.length; i++) {
      currentCard = cards.length;
      if (this.props.top && this.props.source[i].top === this.props.top) {
        cards.push(this.getCard(this.props.source[i].id, this.props.source[i].date, this.props.source[i].img, this.props.source[i].pinned, this.props.source[i].title, this.props.source[i].top, this.props.source[i].description, currentCard, actions));
      } else if (!this.props.top && this.props.pinned && this.props.source[i].pinned === this.props.pinned) {
        cards.push(this.getCard(this.props.source[i].id, this.props.source[i].date, this.props.source[i].img, this.props.source[i].pinned, this.props.source[i].title, this.props.source[i].top, this.props.source[i].description, currentCard, actions));
      } else if (!this.props.top && !this.props.pinned) {
        cards.push(this.getCard(this.props.source[i].id, this.props.source[i].date, this.props.source[i].img, this.props.source[i].pinned, this.props.source[i].title, this.props.source[i].top, this.props.source[i].description, currentCard, actions));
      }
    }

    return (
      <div className="cardList">
        {cards}
      </div>
    );
  }
}