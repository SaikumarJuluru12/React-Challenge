import React, { Component } from 'react';
import './Section.css';
import Axios from 'axios';
import SubSection from '../SubSection'
class Section extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { subSections: [] };
  // }
  componentWillMount() {
    this.loadData()
  }
  // componentDidMount() {  }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  loadData() {
    Axios.get('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge').then(res => {
      var _data = []
      res.data.forEach((f, i) => _data.push(res.data.filter(d => d.stepNumber === (i + 1).toString())[0]))
      this.setState({ subSections: _data })
    })
  }
  render() {
    return (
      <div className="SectionlogoContainer">
        <div className="header">How it Works</div>
        <div className="subSection">
          {this.state && this.state.subSections && this.state.subSections.map(sec => <SubSection key={Math.random()} data={sec} />)}
        </div>
      </div>
    );
  }
}

export default Section;