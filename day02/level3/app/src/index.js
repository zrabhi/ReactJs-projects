import React from "react";
import ReactDOM from "react-dom";
import zrabhiImage from "./images/zrabhi.jpg";
import verIcon from "./images/check.png";
import timeIcon from "./images/clock.png";

const Root = document.getElementById("root");

function SkillsList() {
  const techs = [
    "HTML",
    "CSS",
    "Sass",
    "JS",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Pyhton",
    "Flask",
    "Django",
    "NumPy",
    "Pandas",
    "Data analysis",
    "MYSQL",
    "GraphQL",
    "D3.js",
    "Gatsby",
    "Docker",
    "Heroku",
    "Git",
    "C/C++",
    "TypeScript",
    "Express",
    "Nest",
  ];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
}

const TimeNow = "June 11, 2023";

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
    <img className="MainImage" src={zrabhiImage} alt="zac rabhi" />
    <div className="MainInfo">
      <h1>ZAKARIA RABHI</h1>
      <img className="Icon" src={verIcon} alt="verified" />
    </div>
    <h2>Senior Devloper, Morroco</h2>
    <h3>SKILLS</h3>
    <ul className="Skills">
      <SkillsList />
    </ul>
    <DateNow />
  </div>
);

ReactDOM.render(Card, Root);
