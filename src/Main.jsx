import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
// import { blue500 } from 'material-ui/styles/colors';
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
      <MuiThemeProvider>
        <div>
          <div>
            <FloatingActionButton mini>
              <ChevronLeft />
            </FloatingActionButton>
          </div>
          <div>
            {this.state.user.map(x => <User singleUser={x} key={x.id} />)}
          </div>
          <div>
            <FloatingActionButton mini>
              <ChevronRight />
            </FloatingActionButton>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
