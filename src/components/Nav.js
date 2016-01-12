import React, { Component, PropTypes } from 'react';
// import "../sass/nav.scss";

var cx = require('classnames');

export default class Nav extends React.Component {
  static propTypes = {
    changeCardView: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {changeCardView} = this.props;

    return (
      <div>
        <button type="button" onClick={() => changeCardView('updates')} style={{
              backgroundColor: 'transparent',
              border: 'none'
            }}>
          Updates
        </button>
        <button type="button" onClick={() => changeCardView('tutorials')} style={{
              backgroundColor: 'transparent',
              border: 'none'
            }}>
          Tutorials
        </button>
        <button type="button" onClick={() => changeCardView('pins')} style={{
              backgroundColor: 'transparent',
              border: 'none'
            }}>
          Pins
        </button>
      </div>
    );
  }
}