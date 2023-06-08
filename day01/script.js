// const reactDom = require("react-dom");

const div = document.getElementById("root");

function MainDiv() 
{
  return (<div id="test"></div>);
}

function MainContent() {
  return (
    <div>
      <h1>Im learning React</h1>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    </div>
  );
}

const NavbarSTYLE = 
{
  diplay: 'flex',
  // flexDirection: 'row',
  alignItems: 'center',
  jusitifyContent: 'center',
  background: '#61DBFB',
  fontSize: '1.5rem',
};

const liStyle = 
{
  flex:'1',
  flexDirection: 'row',
}

const avbar = (
  <nav style = {NavbarSTYLE}>
    <h1>bobs's bostro </h1>
    <ul style= {liStyle}>
      <li >Home</li>
      <li >Menu</li>
      <li >About Us</li>
      <li >Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(avbar, div);
