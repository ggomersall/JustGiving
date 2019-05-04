import React, {Component} from 'react';
import axios from 'axios';

import Header from './components/Header';
import Main from './components/Main';

import './App.scss';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    // axios.all([
    //   axios.get(`https://api.justgiving.com/c3fa073b/v1/charity/2116`),
    //   axios.get(`https://api.justgiving.com/c3fa073b/v1/charity/2116/donations`)
    // ])
    // .then(axios.spread((charity, donations) => {
    //   this.setState({
    //     charityData: charity.data,
    //     donationsData: donations.data
    //   })
    //   console.log(this.state)
    // }))
    // .catch(error => console.log(error));

    axios.get(`./data.json`)
    .then( res => {
      const data = res.data;
      console.log(data)
      this.setState({
        charityData: data.charityData,
        donationsData: data.donationsData
      })
    })
    .catch(err=>console.log(err));
  }

  render() {

    const { charityData, donationsData} = this.state;
    return (
      <div className="components__wrapper">
        <Header />
        {
          charityData && donationsData &&
          <Main charityData={charityData} donationsData={donationsData} />
        }
      </div>
    )
  }
}

export default App;