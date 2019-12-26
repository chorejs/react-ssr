import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from "../store/home/actions";
import { Link } from 'react-router-dom';
import store from '../store/index';

class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.getHomeList();
    }, 3000);
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <h1>This is a home.</h1>
        {
          list.concat(3).map((item, index) => (<p key={index}>{item}</p>))
        }
        <Link to="/login">go to login</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.home.list
});

const mapDispatchToProps = dispatch => ({
  getHomeList: () => {
    dispatch(getHomeList());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);