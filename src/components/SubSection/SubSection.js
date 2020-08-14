import React, { Component, Fragment } from 'react';
import './SubSection.css';

class SubSection extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  sortByKey(array, key) {
    return array.sort(function (a, b) {
      var x = a[key]; var y = b[key];
      return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
  }

  render() {
    return (
      <div className="ssContainer">
        {this.props.data &&
          <Fragment key="1">
            <div className="stepNum">0{this.props.data.stepNumber}</div>
            <div className="divider"></div>
            <div className="title">{this.sortByKey(this.props.data.versionContent, 'effectiveDate')[0].title}</div>
            <div className="body">{this.sortByKey(this.props.data.versionContent, 'effectiveDate')[0].body}</div>
          </Fragment>
        }

      </div>
    );
  }
}

export default SubSection;