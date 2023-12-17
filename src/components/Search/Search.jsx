import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import "./css/search.css";
export default class Search extends Component {
  //使用pubsubJs代替父子组件之间的消息传递
  // state = {
  //   userInfo: [],
  //   isFirst: true, //是否第一次进入页面
  //   isLoading: false, //是否正在加载
  //   isError: false, //是否网路请求出现错误
  // };
  // updateSearchState = (stateObj) => {
  //   this.setState(stateObj, () => {
  //     console.log(this.state);
  //   });
  // };
  render() {
    return (
      <div className="Search">
        <div className="search_container">
          <SearchBar></SearchBar>
          <SearchList></SearchList>
        </div>
      </div>
    );
  }
}
