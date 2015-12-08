import React from 'react';
import "../sass/CardList.scss";

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: props.open};
  }

  render() {
    return (
      <div className="cardList">
        {this.props.children}
      </div>
    );
  }
}