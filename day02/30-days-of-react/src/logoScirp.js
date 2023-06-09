import React from 'react'
import ReactDOM from 'react-dom'
import ReactLogo from './images/react_logo.png'
import HtmlLogo from './images/html_logo.png'
import CssLogo from './images/css_logo.png'


const logos = (
    <div>
        <img src={ReactLogo} atl="react logo" />
        <img src={HtmlLogo} atl="react logo" />
        <img src={CssLogo} atl="react logo" />
    </div>
)

const rootElement = document.getElementById('root');

ReactDOM.render(logos, rootElement);
