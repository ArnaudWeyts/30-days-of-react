import React from 'react';
import Navbar from '../components/Nav/Navbar';
import { connect } from 'react-redux';

export class Index extends React.Component {
  render() {
    // this isn't right REEEEEEEEEEEEE
    // We should have a regular currentUser object in our props but we don't and idk WHYYYYY
    const {currentUser} = this.props.actions;
    return (
      <div className="app">
        <Navbar currentUser={currentUser} />
        <div className="page">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  currentUser: state.currentUser
}))(Index);
