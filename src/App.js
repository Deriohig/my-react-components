import React, { Component } from 'react';

import BasicModelBox from './components/BasicModelBox';
import './App.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelOpen:false
    };
    this.openModel = this.openModel.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  openModel(){
    this.setState({ modelOpen: true })
  }
  onClose(){
    this.setState({modelOpen:false})
  }

  render() {
    return(
  <div style={styles}>

    <h2>Click Below to open the basic model box. {"\u2728"}</h2>
    <button onClick={this.openModel}>Activate ModelBox</button>
    {this.state.modelOpen ? <BasicModelBox onClose={this.onClose}>
      <p>
        more content thats wrapped in more content thats wrapped in more content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        in
      </p>
      <p>
        more content thats wrapped in more content thats wrapped in more content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        in
      </p>
      <p>
        more content thats wrapped in more content thats wrapped in more content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        in
      </p>
      <p>
        more content thats wrapped in more content thats wrapped in more content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        in
      </p>
      <p>
        more content thats wrapped in more content thats wrapped in more content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        in
      </p>
      <p>
        more content thats wrapped in more content thats wrapped in more content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        inmore content thats wrapped inmore content thats wrapped inmore content
        thats wrapped inmore content thats wrapped inmore content thats wrapped
        in
      </p>
      </BasicModelBox> : ''}
  </div>
  )
  }
}

export default App;
