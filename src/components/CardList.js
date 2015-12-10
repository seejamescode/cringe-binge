import React from 'react';
import Card from './Card';

import "../sass/CardList.scss";

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: props.open};
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

  getCard(date, img, title, description, key) {
    return <Card date={this.formatDate(date)} img={img} title={title} description={description} key={key} />
  }

  render() {
    let cards = [];

    for (var i=0; i < this.props.source.length; i++) {
      cards.push(this.getCard(this.props.source[i].date, this.props.source[i].img, this.props.source[i].title, this.props.source[i].description, i));
    }

    return (
      <div className="cardList">
        {cards}
      </div>
    );
  }
}