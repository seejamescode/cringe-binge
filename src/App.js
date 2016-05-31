import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './app.scss';
import * as SearchActions from './actions/SearchActions';
import * as ListActions from './actions/ListActions';

import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import NavArrowDropDown from 'material-ui/lib/svg-icons/navigation/arrow-drop-down';
import NavArrowDropUp from 'material-ui/lib/svg-icons/navigation/arrow-drop-up';
import LinearProgress from 'material-ui/lib/linear-progress';
import CardList from './components/cardlist/CardList';
import WatchList from './components/watchList/WatchList';

export class App extends Component {

  handleResize = (e) => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.nextPage();
    }
  }

  componentDidMount() {
    this.props.actions.searchPhotoAction();
    window.addEventListener('scroll', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleResize);
  }

  nextPage() {
    this.props.actions.searchNextPageAction();
  }

  handleOpen = () => {
    this.props.actions.toggleOpen(true);
  };

  render() {
    const { list, results, actions } = this.props;

    return (
      <div>
        <AppBar
            title="Cringe Binge"
            showMenuIconButton={false}
            iconElementRight={<FlatButton label={list.movies.length + ' cringes'} onClick={this.handleOpen.bind()} />}
            style={{position: 'fixed'}}
          />
        <div style={{
            backgroundColor: '#fff',
            paddingTop: '64px'
          }}>
          <WatchList open={list.open} movies={list.movies} query={list.query} addMovie={actions.addMovie} toggleOpen={actions.toggleOpen}>
            <CardList movies={list.movies} list={list.movies} removeMovie={actions.removeMovie} addMovie={actions.addMovie} />
          </WatchList>
          <CardList movies={results.movies} list={list.movies} removeMovie={actions.removeMovie} addMovie={actions.addMovie} />
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}>
            <LinearProgress mode="indeterminate" style={{
              margin: '2rem',
              maxWidth: '300px',
              width: 'calc(100% - 4rem)'
            }} />
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    list: state.list,
    results: state.results
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({...ListActions, ...SearchActions}, dispatch)
  };
}

export default connect(mapState, mapDispatch)(App);
