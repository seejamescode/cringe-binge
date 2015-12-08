import React, { Component } from 'react';
import "./sass/Container.scss";

import {
  Breadcrumb,
  Button,
  Checkbox,
  Code,
  Dropdown,
  Hyperlink,
  Icon,
  RadioGroup,
  ResponsiveTable,
  Slider,
  TextField,
  ToggleButton
} from '../bower_components/ap-components-react/dist/ap-components-react.js';

import Card from './components/Card';
import CardList from './components/CardList';

export class App extends Component {
  render() {
    return (
      <div className="container--poseidon" style={{
        backgroundColor: '#fff'
      }}>
        <CardList>
          <Card
            date='October 22, 2015'
            img='https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150'
            title='Load Tweet data directly into dashDB'
            description='You can now use dashDB to load data from the IBM Insights for Twitter service. Search for relevant Tweet data, create and connect to your Twitter Bluemix service, and then load your data into the database all in the dashDB web console.' />
          <Card
            date='October 22, 2015'
            img='https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150'
            title='Load Tweet data directly into dashDB'
            description='You can now use dashDB to load data from the IBM Insights for Twitter service. Search for relevant Tweet data, create and connect to your Twitter Bluemix service, and then load your data into the database all in the dashDB web console.' />
          <Card
            date='October 22, 2015'
            img='https://placeholdit.imgix.net/~text?txtsize=33&txt=150%C3%97150&w=150&h=150'
            title='Load Tweet data directly into dashDB'
            description='You can now use dashDB to load data from the IBM Insights for Twitter service. Search for relevant Tweet data, create and connect to your Twitter Bluemix service, and then load your data into the database all in the dashDB web console.' />
        </CardList>
        <Button href="" hyperlink disabled>
          Hyperlink Disabled
        </Button>
        <div  style={{margin: '4em'}}>
          <Slider start={[15, 85]} lower={0} upper={100} step={1} />
        </div>
      </div>
    );
  }
}