import React from 'react'
import ReactDOM from 'react-dom'
import zrabhiImage from './images/zrabhi.jpg'
import ReactLogo from './images/react_logo.png'
import HtmlLogo from './images/html_logo.png'
import CssLogo from './images/css_logo.png'

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
const techFormated = techs.map((tech) => 
      <li 
        key={tech.toString}>{tech}
        </li>);

const main = (
  <main style={mainStyle}>
    <p>
      Prerequisite to get started <strong>reactJs</strong>
    </p>
    <ul>{techFormated}</ul>
  </main>
);

const user = (
  <div>
      <img src={zrabhiImage} alt='zrabhi image' />
  </div>
)


const app = (
  <div className="app">
    {header}
    {main}
    {user}
  </div>
); 

// const rootElement = document.getElementById('root');

const h1Style = {
  flex: '1',
  fontSize: '30px',
  fontWeight: '500',
  textAlign:'center', 
}

const logos = (
    <div className='root-child'>
        <h1 style={h1Style}>Front End Technologies</h1>
        <div className='root-images'>
          <img src= {ReactLogo} atl="react logo" />
          <img src= {HtmlLogo} atl="react logo" />
          <img src= {CssLogo} atl="react logo" />
        </div>
    </div>
)

const rootElement = document.getElementById('root');

ReactDOM.render(logos, rootElement);
// ReactDOM.render(app, rootElement);
