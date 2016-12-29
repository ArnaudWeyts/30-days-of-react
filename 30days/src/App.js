import React from 'react';
import 'whatwg-fetch';
import './App.css';

const a = [1, 10, 100, 1000];

const App = (props) => {
  return (
    <ul>
      {React.Children.map(a, i => <li>{i}</li>)}
    </ul>
  );
};

export default App;
