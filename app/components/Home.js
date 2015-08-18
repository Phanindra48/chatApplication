import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }


  onChange(state) {
    this.setState(state);
  }



  render() {
    return (
      <div className='container'>
        <h3 className='text-center'>Chat application is under construction. Please get back to us after some time.</h3>
        <div className='row'>
        </div>
      </div>
    );
  }
}

export default Home;