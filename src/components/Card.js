import React, { Component, PropTypes } from 'react';
import Collapse from 'react-collapse';
import EventListener from 'react-event-listener';
import _ from 'lodash';
import { WindowResizeListener } from 'react-window-resize-listener'
import "../sass/Card.scss";

var cx = require('classnames');

export default class Card extends React.Component {
  static propTypes = {
    togglePin: PropTypes.func.isRequired,
    toggleTop: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  listeners: {
    window: {
      resize: 'checkSize',
    }
  }

  resize = _.throttle(() => {
    if (window.innerWidth > 768) {
      this.refs.title.style.height =  this.props.largestHeight + 'px';
    } else {
      this.refs.title.style.height = 'initial';
    }
  }, 20)

  checkSize = _.throttle(() => {
    this.props.onHeightChange(this.props.index, this.refs.titleHeight.clientHeight);
    setTimeout(() => this.resize(), 20);
  }, 20)

  componentDidMount() {
    setTimeout(() => this.checkSize(), 10);
  }

  handleClick = (e) => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const {togglePin, toggleTop} = this.props;

    if (this.state.open) {
      this.handleClick;
    }

    const toggleDescriptionHeight = this.state.open
      ? {height: this.props.descriptionHeight}
      : {height: this.props.descriptionHeight}

    const topClassName = cx('card__top', {
      'card__top--true': this.props.top
    });

    const pinFill = this.props.pinned
      ? {fill: '#178ac5'}
      : {fill: '#777677'}

    return (
      <div className="card" style={{
          display: 'inline-block',
          maxWidth: '450px',
          position: 'relative'
        }}>
        <WindowResizeListener onResize={windowSize => {
          this.checkSize();
          this.resize();
        }}/>
        <button type="button" className='card__tile' onClick={this.handleClick} style={{
            border: 'none',
            padding: '2em 2em 1em 2em',
            textAlign: 'left',
            width: '100%'
          }}>
          <p className='card__tile__date' style={{
              color: '#474647',
              marginTop: 0
            }}>
            {this.props.date}
          </p>
          <img src={this.props.img} style={{
              borderRadius: '50%',
              height: '4em',
              width: '4em'
            }} />
          <div ref='title' style={{
              overflow: 'hidden'
            }}>
            <h3 className='card__tile__title' ref='titleHeight' style={{
                color: '#474647',
                fontWeight: 500,
                lineHeight: 1.5
              }}>
              {this.props.title}
            </h3>
          </div>
          <div style={{
                marginTop: '1em'
              }}>
            <Collapse isOpened={this.state.open} springConfig={[300, 20]}>
              <p ref="description" className='card__tile__description' style={{
                  paddingBottom: '2em',
                  color: '#474647'
                }}>
                {this.props.description}
              </p>
            </Collapse>
          </div>
        </button>
        <div style={{
            borderTop: '1px solid #E0E0E0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            margin: '0 5px'
          }}>
          <button type="button" onClick={() => toggleTop(this.props.id)} className={topClassName} style={{
              backgroundColor: 'transparent',
              border: 'none',
              display: 'flex',
              height: '1em',
              margin: '1em',
              padding: '0'
            }}>
            <svg viewBox="0 0 32 32" style={{
                height: '1em'
              }}>
              <g>
                <polygon fill="#777677" points="11.2,21.5 3.4,13.7 0,17 11.2,28.3 32,7.5 28.6,4.1 "/>
              </g>
            </svg>
          </button>
          <button type="button" onClick={() => togglePin(this.props.id)} style={{
              backgroundColor: 'transparent',
              border: 'none',
              display: 'flex',
              height: '1em',
              margin: '1em',
              padding: '0'
            }}>
            <svg viewBox="0 0 32 32" style={{
                height: '1em'
              }}>
              <g>
                <path style={pinFill} d="M21.1,10.3L23.5,0H16H8.5l2.4,10.3c-2.5,1.4-4.4,3.7-5.2,6.5h6.8h7.1h0h6.7C25.5,14,23.6,11.6,21.1,10.3z" />
                <polygon style={pinFill} points="12.7,18.1 16,32 19.3,18.1" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}