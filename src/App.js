import React, { Component } from 'react';
import axios from 'axios';
import { API_APP_ID, API_CHARITY_ID } from './constants';

import Header from './components/Header';
import Main from './components/Main';
import Loading from './components/Loading';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    axios.all([
      axios.get(`https://api.justgiving.com/${API_APP_ID}/v1/charity/${API_CHARITY_ID}`),
      axios.get(`https://api.justgiving.com/${API_APP_ID}/v1/charity/${API_CHARITY_ID}/donations`)
    ])
      .then(axios.spread((charity, donations) => {
        this.setState({
          charityData: charity.data,
          donationsData: donations.data,
          isLoading: !this.state.isLoading
        });
      }))
      .catch(error => {

        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  render() {
    const { charityData, donationsData, isLoading } = this.state;
    return (

      <div className="components__wrapper">
        <Header />
        {
          isLoading ? <Loading loading={isLoading} />
            : <Main charityData={charityData} donationsData={donationsData} />
        }
      </div>
    );
  }
}

export default App;
