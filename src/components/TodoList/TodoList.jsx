import React, { Component } from "react";
import { Button, Checkbox, notification } from "antd";
import "./css/todoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      checkedList: [],
      todoListNumber: 0,
    };
  }
  index = 0;
  /**
   * @description: 添加需要完成清单，按回车添加
   * @return {*}
   */
  add = (event) => {
    console.log("---添加---");
    console.log(event);
  };
  /**
   * @description:提交任务清单
   * @param {*} event
   * @return {*}
   */
  submit = (event) => {
    event.preventDefault();
    console.log("---保存数据---");
    const inputNode = event.target[0];
    let todo = inputNode.value;
    if (todo === "") {
      notification.error({
        message: "输入框不能为空！",
      });
      return;
    }
    if (this.state.todoList.length >= 20) {
      notification.error({
        message: "任务清单任务过多，请清除一部分！",
      });
      return;
    }
    let { todoList } = this.state;
    todoList.unshift({
      label: todo,
      value: todo,
      index: this.index++,
      done: false,
    });
    this.setState(
      {
        todoList: todoList,
      },
      () => {
        console.log(this.state.todoList);
      }
    );
    inputNode.value = "";
  };
  delete = (index) => {
    console.log("---删除---");
    setTimeout(() => {
      console.log("执行完动画，再进行删除操作");
      this.setState({
        todoList: newTodoList,
        checkedList: newCheckedList,
      });
    }, 500);
    let { todoList, checkedList } = this.state;
    const todoListDom = document.querySelectorAll(".item");
    todoListDom.forEach((item) => {
      let key = item.getAttribute("data-key");
      console.log(key, index);
      if (Number(key) === Number(index)) {
        item.style.transform = "translateX(100%)";
      }
    });
    const newTodoList = todoList.filter((item) => item.index !== index);
    const newCheckedList = checkedList.filter((item) => item.index !== index);
  };
  deleteAll = () => {
    console.log("---全部删除---");
    this.setState({ todoList: [] });
  };
  onChange = (checkedValues) => {
    console.log(checkedValues);
  };
  pick = (index) => {
    console.log("---选取操作---");
    let { todoList, checkedList } = this.state;
    const newTodoList = todoList.map((item) => {
      if (item.index === index) {
        let state = item.done ? false : true;
        if (state) {
          checkedList.push(item);
        } else {
          const newCheckedList = checkedList.filter(
            (obj) => obj.index !== item.index
          );
          this.setState({
            checkedList: newCheckedList,
          });
        }
        return { ...item, done: state };
      } else {
        return item;
      }
    });
    this.setState(
      {
        todoList: newTodoList,
      },
      () => console.log(this.state.todoList)
    );
  };
  pickAll = (event) => {
    let state = event.target.checked;
    let { todoList } = this.state;
    if (state) {
      this.setState({
        checkedList: todoList,
      });
    } else {
      this.setState({
        checkedList: [],
      });
    }
    const newTodoList = todoList.map((item) => {
      return { ...item, done: state };
    });
    this.setState({
      todoList: newTodoList,
    });
  };
  render() {
    return (
      <div className="TodoList">
        <div className="container">
          <h1 className="title">TodoList</h1>
          <form className="form" onSubmit={this.submit}>
            <input
              className="input"
              placeholder="please enter todoList mission"
            ></input>
            <ul className="content">
              {this.state.todoList.map((item) => (
                <li className="item" data-key={item.index} key={item.index}>
                  <div
                    className="item_pick"
                    onClick={() => {
                      this.pick(item.index);
                    }}
                  >
                    <input
                      type="checkbox"
                      id={item.index}
                      name={item.label}
                      checked={item.done}
                      onChange={(row) => {
                        console.log(row);
                      }}
                    />
                    <label>{item.label}</label>
                  </div>
                  <Button
                    className="delete"
                    danger
                    onClick={(event) => {
                      this.delete(item.index, event);
                    }}
                  >
                    删除
                  </Button>
                </li>
              ))}
            </ul>
          </form>
          <footer className="footer">
            <Checkbox
              onClick={this.pickAll}
              checked={
                this.state.todoList.length !== 0
                  ? this.state.checkedList.length === this.state.todoList.length
                  : false
              }
            >
              done &nbsp;
              {this.state.checkedList.length !== 0
                ? this.state.checkedList.length
                : " - "}
              / all &nbsp;
              {this.state.todoList.length !== 0
                ? this.state.todoList.length
                : " - "}
            </Checkbox>
            <Button onClick={this.deleteAll} danger>
              clear all missions which were done
            </Button>
          </footer>
        </div>
      </div>
    );
  }
}
