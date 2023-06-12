import React from 'react';
import ReactDOM from 'react-dom';
import JsLogo from './images/js_logo.png'
import HtmlLogo from './images/html_logo.png'
import CssLogo from './images/css_logo.png'
import ReactLogo from './images/react_logo.png'

const rootElement = document.getElementById('root');

function TechList()
{
    const Logos = [HtmlLogo,CssLogo,JsLogo,ReactLogo];
    const logosFormatted = Logos.map((logo) => 
            <img src={logo} alt="tech "/>);
    return logosFormatted;
}

const MainWrapperStyle = {
    display: 'flex',
    flexDirection:'column',
    flexWrap:'warp',
    gap:'3rem',
};

const ImagesWrapperStyle = {
  display: 'flex',
  flexDirection:'row',
  flexWrap:'wrap',
  gap:'11rem',
  alignItems:'center',
  justifyContent:'center',
}

const Main = () => (
      <div className='Main-wrapper' style={MainWrapperStyle}>
        <h1>Front end Technologies</h1>
          <div className='Images-wrapper' style={ImagesWrapperStyle}>
            <TechList />
          </div>
      </div>
);


ReactDOM.render(<Main />, rootElement);