import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
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

  render() {
    return (
      <div className="ArticlelogoContainer">
        {/* <img className="Articlelogo" src={require('../../assets/photo-couch.jpg')} alt="" /> */}
        <div className="imgText">
          <div className="head">New Games & Accessories</div>
          <div className="title">
            <div className="">Monthly packages.</div>
            <div className="">Excitement delivered daily.</div>
          </div>
          <div className="body">
            What's the best way to shop or the latest video Games <br />
            and peripherals? How about never shopping at all? <br />
            You'll get new stuff on your doorstep - every month.
          </div>
          <button className="action" role="GetStarted">GET STARTED</button>
        </div>
      </div>
    );
  }
}

export default Article;