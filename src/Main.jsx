import React, { Component } from 'react';
import axios from 'axios';

import User from './User';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    const result = [];

    axios.get('/user')
      .then((res) => {
        result.push(res.data);
        this.setState({ user: result });
      });
  }

  render() {
    return (
      <div id="main">
        {this.state.user.map(x => <User singleUser={x} key={x.id} />)}
      </div>
    );
  }
}

export default Main;
