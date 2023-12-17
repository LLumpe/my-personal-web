import React, { Component } from "react";
import { Image, Spin } from "antd";
import "./css/searchList.css";
import PubSub from "pubsub-js";
export default class SearchList extends Component {
  state = {
    userInfo: [],
    isFirst: true, //是否第一次进入页面
    isLoading: false, //是否正在加载
    isError: false, //是否网路请求出现错误
  };
  mySubscriber = (msg, data) => {
    console.log(msg, data);
    this.setState(data);
  };
  componentDidMount() {
    this.token = PubSub.subscribe("SearchValue", this.mySubscriber);
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  render() {
    const { userInfo, isLoading, isFirst, isError } = this.state;
    return (
      <div className="SearchList">
        {isFirst ? (
          <div className="searchList_first">
            <div>enter username to search github users</div>
          </div>
        ) : isLoading ? (
          <div className="searchList_loading">
            <Spin tip="Loading" size="large"></Spin>
          </div>
        ) : isError ? (
          <div className="searchList_error">
            <h1>there might be some error in this page!</h1>
          </div>
        ) : (
          <ul className="searchList_list" id="search-list">
            {userInfo.map((user) => {
              return (
                <li key={user.id} className="searchList_item">
                  <Image src={user.avatar_url} />
                  <h3
                    onClick={() => {
                      window.open(user.html_url);
                    }}
                  >
                    {user.login}
                  </h3>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
