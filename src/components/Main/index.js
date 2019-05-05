import React, {Component} from 'react';

import Charity from '../Charity';
import Donations from '../Donations';

import './styles.scss';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 100,
      care: false
    }
    this.handleCareUpdate = this.handleCareUpdate.bind(this);
  }

  handleCareUpdate() {
    if (this.state.care === false) {

      this.setState({ likes: this.state.likes + 1, care: !this.state.care })
    } else {
      this.setState({likes: this.state.likes - 1, care: !this.state.care })
    }
  }

  render() {
    const {charityData, donationsData} = this.props;
    const {likes, care} = this.state;
    return (
      <div className="main__section main_wrapper">
        <Charity charity={charityData} handleCareUpdate={this.handleCareUpdate} likes={likes} care={care}/>
        <Donations charity={charityData} donations={donationsData} />
      </div>
    ) 
  }
}

export default Main