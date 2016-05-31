import React, { Component, PropTypes } from 'react';
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardActions from 'material-ui/lib/card/card-actions';
import CardText from 'material-ui/lib/card/card-text';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import RaisedButton from 'material-ui/lib/raised-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import ContentRemove from 'material-ui/lib/svg-icons/content/remove';

import './cardList.scss';

export default class CardList extends React.Component {

  onAddButtonClick = (movie) => {
    this.props.addMovie(movie);
  };

  onRemoveButtonClick = (id) => {
    this.props.removeMovie(id);
  };

  render() {

    return (
      <div className='cardList'>
        {
          this.props.movies.map(function(movie) {
            let inWatchList = this.props.list.find( function( ele ) { return ele.id === movie.id;} ) ? true : false;
            return <Card key={this.props.movies.indexOf(movie)} className='cardList__card' addMovie={this.props.addMovie}>
              <div className='card__info'>
                <CardMedia>
                  <div className='card__poster'>
                    <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='poster__image' />
                  </div>
                </CardMedia>
                <CardTitle className='card__title' title={movie.title}>
                      <FloatingActionButton mini
                        className='card__add'
                        secondary={inWatchList ? false : true}
                        onClick={inWatchList ? this.onRemoveButtonClick.bind(this, movie.id) : this.onAddButtonClick.bind(this, movie)}>
                        {inWatchList ? <ContentRemove /> : <ContentAdd />}
                      </FloatingActionButton>
                </CardTitle>
              </div>
            </Card>;
          }, this)
        }
      </div>
    );
  }
}