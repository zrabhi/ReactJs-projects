import "./App.css";
import zrabhiImage from "./images/zrabhi.jpg";
import verIcon from "./images/check.png";
import timeIcon from "./images/clock.png";

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

function SkillsList({Techs}) {
  const techsFormatted = Techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
}

function DateNow(props) {
  const { TimeNow } = props.data;
  return (
    <div className="Date">
      <img className="timeIcon" src={timeIcon} alt="time joined" />
      <h1 className="Joined">Joined on {TimeNow}</h1>
    </div>
  );
}

const App = (props) => {
  const data = {
    TimeNow: "June 11, 2023",
  };
  const { firstName, lastName, Job, Country } = props.data.author;
  return (
    <div className="App">
      <img className="MainImage" src={zrabhiImage} alt="zac rabhi" />
      <div className="MainInfo">
        <h1>
          {firstName} {lastName}
        </h1>
        <img className="Icon" src={verIcon} alt="verified" />
      </div>
      <h2>
        {Job}
        {", "}
        {Country}
      </h2>
      <h3>SKILLS</h3>
      <ul className="Skills">
        <SkillsList Techs={techs}/>
      </ul>
      <DateNow data={data} />
    </div>
  );
};

export default App;
