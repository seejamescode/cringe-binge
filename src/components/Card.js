import React from 'react';
import Collapse from 'react-collapse';
import "../sass/Card.scss";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleClick = (e) => {
    this.setState({ open: !this.state.open });
  }

  render() {

    if (this.state.open) {
      this.handleClick;
    }

    const togglePinned = this.props.pinned
      ? 'card__pin card__pin--pinned'
      : 'card__pin'

    const toggleDescriptionHeight = this.state.open
      ? {height: this.props.descriptionHeight}
      : {height: this.props.descriptionHeight}

    return (
      <div className="card" style={{
          display: 'inline-block',
          maxWidth: '450px',
          position: 'relative'
        }}>
        <button type="button" className='card__tile'  onClick={this.handleClick} style={{
            border: 'none',
            padding: '2em 2em 0 2em',
            textAlign: 'left',
            width: '100%'
          }}>
          <p style={{
              color: '#999',
              marginTop: 0
            }}>
            {this.props.date}
          </p>
          <img src={this.props.img} style={{
              borderRadius: '50%',
              height: '4em',
              width: '4em'
            }} />
          <h3>{this.props.title}</h3>
          <div style={{
                marginTop: '1em'
              }}>
            <Collapse isOpened={this.state.open} springConfig={[300, 20]}>
              <p ref="description" className='card__tile__description' style={{
                  paddingBottom: '2em'
                }}>
                {this.props.description}
              </p>
            </Collapse>
          </div>
        </button>
        <button type="button" className='card__pin' style={{
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