import React, { Component, PropTypes } from 'react';
import Collapse from 'react-collapse';
import EventListener from 'react-event-listener';
import _ from 'lodash';
import { WindowResizeListener } from 'react-window-resize-listener'
import "../sass/Card.scss";

var cx = require('classnames');

export default class Card extends React.Component {
  static propTypes = {
    togglePin: PropTypes.func.isRequired
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
  }, 60)

  checkSize = _.throttle(() => {
    this.props.onHeightChange(this.props.index, this.refs.titleHeight.clientHeight);
    setTimeout(() => this.resize(), 60);
  }, 60)

  componentDidMount() {
    setTimeout(() => this.checkSize(), 30);
  }

  handleClick = (e) => {
    this.setState({ open: !this.state.open });
  }

  handlePin = () => {
    this.props.onPinChange(this.props.index, !this.props.pinned);
  }

  render() {
    const {togglePin} = this.props;

    if (this.state.open) {
      this.handleClick;
    }

    const toggleDescriptionHeight = this.state.open
      ? {height: this.props.descriptionHeight}
      : {height: this.props.descriptionHeight}

    const pinnedClassName = cx('card__pin', {
      'card__pin--pinned': this.props.pinned
    });

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
        <button type="button" onClick={() => togglePin(this.props.id)} className={pinnedClassName} style={{
            backgroundColor: 'transparent',
            border: 'none',
            bottom: '0',
            padding: '0',
            position: 'absolute',
            right: '0'
          }}>
          <div className="card__pin__triangle" style={{
              width: 0,
              height: 0,
              borderStyle: 'solid',
              borderWidth: '0 0 3em 3em'
            }} />
        </button>
      </div>
    );
  }
}