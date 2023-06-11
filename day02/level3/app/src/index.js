import React from "react";
import ReactDOM from "react-dom";
import zrabhiImage from "./images/zrabhi.jpg";
import verIcon from "./images/check.png";
import timeIcon from "./images/clock.png";

const Root = document.getElementById("root");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
function SkillsList() {
  return (
    <ul className="Skills">
      <li>HTML</li>
      <li>CSS</li>
      <li>Sass</li>
      <li>JS</li>
      <li>React</li>
      <li>Redux</li>
      <li>Node</li>
      <li>MongoDB</li>
      <li>Python</li>
      <li>Flask</li>
      <li>Django</li>
      <li>NumPy</li>
      <li>Pandas</li>
      <li>Data Analysis</li>
      <li>MYSQL</li>
      <li>GraphQL</li>
      <li>D3.js</li>
      <li>Gatsby</li>
      <li>Docker</li>
      <li>Heroku</li>
      <li>Git</li>
      <li>C++/C</li>
      <li>Typescript</li>
    </ul>
  );
}

const TimeNow = "June 11, 2023";
console.log(TimeNow);
function DateNow() {
  return (
    <div className="Date">
      <img className="timeIcon" src={timeIcon} alt="time joined" />
      <h1 className="Joined">Joined on {TimeNow}</h1>
    </div>
  );
}

const Card = (
  <div className="Card">
    <img className="MainImage" src={zrabhiImage} alt="zac rabhi image" />
    <div className="MainInfo">
      <h1>ZAKARIA RABHI</h1>
      <img className="Icon" src={verIcon} alt="verified" />
    </div>
    <h2>Senior Devloper, Morroco</h2>
    <h3>SKILLS</h3>
    <SkillsList />
    <DateNow />
  </div>
);

ReactDOM.render(Card, Root);
