import React from 'react';
import {connect} from 'react-redux';

export const Home = (props) => {
  return (
    <div className="content">
      <h1>Welcome home!</h1>
      <p>The time is {props.currentTime.toString()}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentTime: state.currentTime
  };
};
export default connect(
  mapStateToProps
)(Home);
