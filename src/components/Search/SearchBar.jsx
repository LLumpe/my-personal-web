import React, { Component } from "react";
import { Input, Button } from "antd";
import "./css/searchBar.css";
// import axios from "axios";
import PubSub from "pubsub-js";
export default class SearchBar extends Component {
  submit = async (event) => {
    event.preventDefault(); //阻止默认表单提交
    let value = event.target[0].value;
    PubSub.publish("SearchValue", { isLoading: true, isFirst: false });
    /* xhr发送请求 */
    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", `https://api.github.com/search/users?q=${value}`, true);
    // xhr.onload = (res) => {
    //   console.log(res);
    // };
    // xhr.send();
    /* fetch发送请求 */
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${value}`
      );
      console.log("responseHeader:", response);
      if (response.status === 200) {
        const { items } = await response.json();
        const newUserInfo = items.map((item) => {
          return {
            id: item.id,
            login: item.login,
            avatar_url: item.avatar_url,
            html_url: item.html_url,
          };
        });
        PubSub.publish("SearchValue", {
          userInfo: newUserInfo,
          isLoading: false,
        });
      }
      if (response.status === 404) {
        throw new Error("No Found Page!");
      }
    } catch (error) {
      console.log(error);
      PubSub.publish("SearchValue", { isError: true, isLoading: false });
    }

    /* axios发送请求 */
    //   axios.get(`https://api.github.com/search/users?q=${value}`).then(
    //     (res) => {
    //       console.log("axios请求：", res);
    //       const newUserInfo = res.data.items.map((item) => {
    //         return {
    //           id: item.id,
    //           login: item.login,
    //           avatar_url: item.avatar_url,
    //           html_url: item.html_url,
    //         };
    //       });
    //       // this.props.updateSearchState({
    //       //   isLoading: false,
    //       //   userInfo: newUserInfo,
    //       // });
    //       PubSub.publish("SearchValue", {
    //         userInfo: newUserInfo,
    //         isLoading: false,
    //       });
    //     },
    //     (err) => {
    //       console.log("失败了", err);
    //       // this.props.updateSearchState({ isLoading: false, isError: true });
    //       PubSub.publish("SearchValue", { isError: true, isLoading: false });
    //     }
    //   );
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="searchBar_container">
          <form className="searchBar_form" onSubmit={this.submit}>
            <h1 className="searchBar_title">Github Users Search</h1>
            <Input placeholder="enter username"></Input>
            <Button htmlType="submit">Search</Button>
          </form>
        </div>
      </div>
    );
  }
}
