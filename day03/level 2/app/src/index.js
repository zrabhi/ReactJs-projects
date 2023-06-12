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

const TimeIconStyle = 
{
  width: ".9rem",
  height: "1rem",
  paddingLeft:"1rem",
  paddingTop: ".7rem",
}
const DateNow = () => (
  <div className="Date">
    <img className="timeIcon" style={TimeIconStyle} src={timeIcon} alt="time joined" />
    <h1 className="Joined">Joined on {TimeNow}</h1>
  </div>
);

const MainImageStyle = {
  width: "10rem",
  padding: "1rem",
  borderRadius: "15rem",
};

const MainImage = () => (
  <img
    className="MainImage"
    style={MainImageStyle}
    src={zrabhiImage}
    alt="zac rabhi"
  />
);

const MainInfoStyle = {
  display: "flex",
  paddingLeft: "1.2rem",
  flexDirection: "row",
};

const IconStyle = {
  width: "1rem",
  paddingLeft: ".1rem",
  paddingRight: "0",
  margin: ".6rem",
  height: "1rem",
};

const MainInfo = () => (
  <div className="MainInfo" style={MainInfoStyle}>
    <h1>ZAKARIA RABHI</h1>
    <img className="Icon" style={IconStyle} src={verIcon} alt="verified" />
  </div>
);

const Status = () => <h2>Senior Devloper, Morroco</h2>;

const Skills = () => <h3>SKILLS</h3>;

const SkillsStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "1rem",
};

const SkillsDiv = () => (
  <ul className="Skills" style={SkillsStyle}>
    <SkillsList />
  </ul>
);

const CardStyle = {
  display: "flex",
  flexDirection: "column",
  gap: ".2rem",
};

const Card = (
  <div className="Card" style={CardStyle}>
    <MainImage />
    <MainInfo />
    <Status />
    <Skills />
    <SkillsDiv />
    <DateNow />
  </div>
);

ReactDOM.render(Card, Root);
