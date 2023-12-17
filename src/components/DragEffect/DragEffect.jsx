import React, { Component } from "react";
import "./DragEffect.css";

export default class DragEffect extends Component {
  //properties
  element;
  //private properties
  #startPoint;
  #endPoint;
  #area;
  //private methods
  #createSelectArea = () => {
    const area = document.createElement("div");
    console.log(area, this.element);
    this.element.style.position = "relative";
    area.style.position = "absolute";
    area.style.border = "2px dashed rgba(5, 5, 5, 0.5)";
    area.style.background = "rgba(248, 248, 255, 0.2)";
    area.style.display = "none";
    this.element.appendChild(area);
    this.#area = area;
  };
  #mouseDownEvent = (e) => {
    console.log("---mouseDown---");
    e.preventDefault();
    this.#disableSelectedItems();
    const { clientX, clientY } = e;
    const { x, y } = this.#getRelativePositionInElement(clientX, clientY);
    this.#startPoint = { x: x, y: y };
    this.#endPoint = this.#startPoint;
    this.#handleMouseMove();
  };
  #handleMouseDown = () => {
    this.element.addEventListener("mousedown", this.#mouseDownEvent);
  };
  #mouseMoveEvent = (e) => {
    e.preventDefault();
    this.#showArea();
    const { clientX, clientY } = e;
    const { x, y } = this.#getRelativePositionInElement(clientX, clientY);
    this.#endPoint = { x: x, y: y };
    this.#updateArea();
  };
  #handleMouseMove = () => {
    this.element.addEventListener("mousemove", this.#mouseMoveEvent);
  };
  #mouseUpEvent = (e) => {
    console.log("---mouseUp---");
    e.preventDefault();
    this.#hideArea();
    this.element.removeEventListener("mousemove", this.#mouseMoveEvent);
  };
  #handleMouseUp = () => {
    this.element.addEventListener("mouseup", this.#mouseUpEvent);
  };
  #mouseLeaveEvent = (e) => {
    console.log("---mouseLeave---");
    e.preventDefault();
    this.#hideArea();
    this.#disableSelectedItems();
    this.element.removeEventListener("mousemove", this.#mouseMoveEvent);
  };
  #handleMouseLeave = () => {
    this.element.addEventListener("mouseleave", this.#mouseLeaveEvent);
  };
  #getRelativePositionInElement = (clientX, clientY) => {
    const rect = this.element.getBoundingClientRect();
    const { left, top } = rect;
    let x = clientX - left;
    let y = clientY - top;
    if (x < 0) {
      x = 0;
    }
    if (y < 0) {
      y = 0;
    }
    return { x, y };
  };
  #updateArea = () => {
    const top = Math.min(this.#startPoint.y, this.#endPoint.y);
    const left = Math.min(this.#startPoint.x, this.#endPoint.x);
    const width = Math.abs(this.#startPoint.x - this.#endPoint.x);
    const height = Math.abs(this.#startPoint.y - this.#endPoint.y);
    this.#area.style.top = top + "px";
    this.#area.style.left = left + "px";
    this.#area.style.width = width + "px";
    this.#area.style.height = height + "px";
    this.#selectItems();
  };
  #hideArea = () => {
    this.#area.style.display = "none";
  };
  #showArea = () => {
    this.#area.style.display = "block";
  };
  #selectItems = () => {
    const areaRect = this.#area.getBoundingClientRect();
    const items = document.querySelectorAll(".dragEffect_item");
    for (let item of items) {
      const itemRect = item.getBoundingClientRect();
      const hasIntersection = this.#twoRectsHaveIntersection(
        areaRect,
        itemRect
      );
      item.dataset.selected = hasIntersection;
    }
  };
  #disableSelectedItems = () => {
    const items = document.querySelectorAll(".dragEffect_item");
    for (let item of items) {
      item.dataset.selected = false;
    }
  };
  #twoRectsHaveIntersection = (areaRect, itemRect) => {
    const left1 = areaRect.left;
    const left2 = itemRect.left;
    const right1 = areaRect.left + areaRect.width;
    const right2 = itemRect.left + itemRect.width;
    const top1 = areaRect.top;
    const top2 = itemRect.top;
    const bottom1 = areaRect.top + areaRect.height;
    const bottom2 = itemRect.top + itemRect.height;
    if (
      left1 <= left2 &&
      top1 <= top2 &&
      bottom1 >= bottom2 &&
      right1 >= right2
    ) {
      return true;
    } else {
      return false;
    }
  };
  componentDidMount() {
    console.log("---网页挂载---");
    this.#createSelectArea();
    this.#handleMouseDown();
    this.#handleMouseUp();
    this.#handleMouseLeave();
    this.#selectItems();
  }
  render() {
    return (
      <div className="DragEffect">
        <ul
          className="dragEffect_grid"
          ref={(currentNode) => {
            this.element = currentNode;
          }}
        >
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
          <li className="dragEffect_item">a</li>
        </ul>
      </div>
    );
  }
}
