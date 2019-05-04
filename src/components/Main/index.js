import React, {Component} from 'react';

import Charity from '../Charity';
import Donations from '../Donations';

import './styles.scss';

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {charityData, donationsData} = this.props
    return (
      <div className="main__section main_wrapper">
        <Charity charity={charityData} />
        <Donations charity={charityData} donations={donationsData} />
      </div>
    ) 
  }
}

export default Main