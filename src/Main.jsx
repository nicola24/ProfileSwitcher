import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import axios from 'axios';

import User from './User';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
    this.fetch = this.fetch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetch((dataReceived) => {
      this.setState({ user: dataReceived });
    });
  }

  fetch(cb) {
    const result = [];

    axios.get('/user')
    .then((res) => {
      result.push(res.data);
      cb(result);
    });
  }

  handleClick() {
    this.fetch((dataReceived) => {
      this.setState({ user: dataReceived });
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div>
            <FloatingActionButton mini onClick={this.handleClick} >
              <ChevronLeft />
            </FloatingActionButton>
          </div>
          <div>
            {this.state.user.map(x => <User singleUser={x} key={x.id} />)}
          </div>
          <div>
            <FloatingActionButton mini onClick={this.handleClick}>
              <ChevronRight />
            </FloatingActionButton>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
