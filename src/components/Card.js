import React from 'react';
import "../sass/Card.scss";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: props.open};
  }

  render() {
    return (
      <div className="card" style={{
        backgroundColor: '#F2F2F2',
        maxWidth: '450px',
        padding: '2em',
        position: 'relative'
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
        <p style={{
          height: '0',
          marginBottom: 0,
          overflow: 'hidden'
        }}>
          {this.props.description}
        </p>
        <button type="button" className="card__pin" style={{
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