import React, { Component, PropTypes } from 'react';
import Collapse from 'react-collapse';
import Dialog from 'material-ui/lib/dialog';
import Divider from 'material-ui/lib/divider';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import SocialShare from 'material-ui/lib/svg-icons/social/share';
import NavArrowDropDown from 'material-ui/lib/svg-icons/navigation/arrow-drop-down';
import NavArrowDropUp from 'material-ui/lib/svg-icons/navigation/arrow-drop-up';
import RaisedButton from 'material-ui/lib/raised-button';
import Snackbar from 'material-ui/lib/snackbar';

import './watchList.scss';

export default class WatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }

  handleClose = () => {
    this.props.toggleOpen(false);
  };

  componentDidMount() {
    if (window.location.href.indexOf('watchlist=') > -1 && window.location.href.slice(window.location.href.indexOf('watchlist=') + 10) !== '') {
      let loadedMovieIds = window.location.href.slice(window.location.href.indexOf('watchlist=') + 10).split('&');
      let loadedMovieList = [];
      loadedMovieIds.map(function(id) {
        loadedMovieList.push({id: Number(id)})
      }, this)
      loadedMovieList.forEach(this.props.addMovie);
    }
  }

  componentDidUpdate() {
    window.history.pushState('Cringe Binge', 'Cringe Binge', '?watchlist=' + this.props.query.slice(1));
  }

  copyLink() {
    var textField = document.createElement('textarea');
    textField.style.opacity = 0;
    textField.style.height = 0;
    textField.innerText = window.location;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    this.setState({copied: true});
    this.handleClose();
  }

  handleRequestClose = () => {
    this.setState({copied: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.handleClose.bind()}
      />,
      <FlatButton
        label="Share"
        primary={true}
        keyboardFocused={true}
        onClick={this.copyLink.bind(this)}
        disabled={this.props.movies.length === 0}
      />,
    ];

    let minutes = this.props.movies.reduce((sum, movie) => sum + movie.runtime, 0);
    let hours = 0;
    let days = 0;
    let time = '';

    if (minutes >= 60) {
      hours = Math.floor(minutes / 60);
      minutes = minutes - hours * 60;
      if (hours >= 24) {
        days = Math.floor(hours / 24);
        hours = hours - days * 24;
      }
    }
    if (minutes !== 0) {
      if (minutes === 1) {
        time = minutes + ' minute';
      } else {
        time = minutes + ' minutes';
      };
    };
    if (hours !== 0) {
      if (time.length > 0) {
        time = ', ' + time;
      };
      if (hours === 1) {
        time = hours + ' hour' + time;
      } else {
        time = hours + ' hours' + time;
      };
    };
    if (days !== 0) {
      if (time.length > 0) {
        time = ', ' + time;
      };
      if (days === 1) {
        time = days + ' day' + time;
      } else {
        time = days + ' days' + time;
      };
    };
    if (time === '') {
      time = '0 minutes';
    };

    return (
      <div>
        <Dialog
            title='Your Cringes'
            actions={actions}
            modal={false}
            open={this.props.open}
            onRequestClose={this.handleClose.bind()}
            contentClassName='dialog'
            bodyClassName='watchList'
          >
            <div style={{
              paddingLeft: '24px',
              position: 'absolute'
            }}>
              {this.props.movies.length} movies | {time}
            </div>
            <div className='watchList__movies'>
              {this.props.movies.length > 0 ? this.props.children : <div style={{display: 'flex', justifyContent: 'center', padding: '2rem'}}>No cringe-worthy movies have been added to your cringelist yet!</div>}
            </div>
        </Dialog>
        <Snackbar
            open={this.state.copied}
            message='Copied your bingelist! Now share it with friends!'
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
            style={{position: 'fixed'}}
          />
      </div>
    );
  }
}