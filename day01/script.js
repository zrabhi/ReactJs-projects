// const reactDom = require("react-dom");

const div = document.getElementById("root");

function MainDiv() {
  return <div id="test"></div>;
}

function MainContent() {
  return (
    <div>
      <h1>Im learning React</h1>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    </div>
  );
}

const NavbarSTYLE = {
  diplay: "flex",
  // flexDirection: 'row',
  alignItems: "center",
  jusitifyContent: "center",
  background: "#61DBFB",
  fontSize: "1.5rem",
};

const liStyle = {
  flex: "1",
  flexDirection: "row",
};

const HeaderStyle = {
  alignItems: "center",
  backgroundColor: "#61DBFB",
  color: "black",
  width: "100%",
};
//jsx header element

const header = (
  <header style={HeaderStyle}>
    <div className="header-wrapper">
      <h1>Welcome to 30 days of React</h1>
      <h2>Getting started React</h2>
      <h3>Javascript library</h3>
      <p>Zac rabhi</p>
      <smal>June 9, 2023</smal>
    </div>
  </header>
);

const mainStyle = {
  backgroundColor: "#F3F0F5",
  width: "100%",
};

const techs = ['Html, Css, JavaScript'];
const techFormated = techs.map((tech) => <li key={tech.toString}>{tech}</li>);
const main = (
  <main style={mainStyle}>
    <p>
      Prerequisite to get started <strong>reactJs</strong>
    </p>
    <ul>{techFormated}</ul>
  </main>
);

const app = (
  <div className="app">
    {header}
    {main}
  </div>
);
ReactDOM.render(app, div);
