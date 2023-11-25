/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

const generateExcuse = () => {
  function whoStr() {
    // Add your code after this line
    let whoArray = ["The dog", "My grandma", "His turtle", "My bird"];
    let whoIndex = Math.floor(Math.random() * whoArray.length);
    return whoArray[whoIndex];
  }

  function actionStr() {
    // Add your code after this line
    let actionArray = ["ate", "peed", "crushed", "broke"];
    let actionIndex = Math.floor(Math.random() * actionArray.length);
    return actionArray[actionIndex];
  }

  function whatStr() {
    // Add your code after this line
    let whatArray = ["my homework", "the keys", "the car"];
    let whatIndex = Math.floor(Math.random() * whatArray.length);
    return whatArray[whatIndex];
  }
  function whenStr() {
    // Add your code after this line
    let whenArray = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    let whenIndex = Math.floor(Math.random() * whenArray.length);
    return whenArray[whenIndex];
  }

  return whoStr() + " " + actionStr() + " " + whatStr() + " " + whenStr();
};
