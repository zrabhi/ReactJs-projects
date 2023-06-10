import React from 'react';
import ReactDOM from 'react-dom';


const root = document.getElementById('root');


const MainContentStyle = {
  // paddingBottom:'1rem',
  display:'flex',
  flex:'1 1 auto',
  flexDirection: 'column',
  alignItems:'center',
  marginBottom: '3rem',
  justifyContent: 'space-between',
  gap:'.5rem',

}

const MainContent = (
  <div className='Main-content' style={MainContentStyle}>
  <h1>Subscribe</h1>
      <p>Sign up with your email address to recieve news and update</p>
      <div className='Inputs' >
        <input type="name" value="First name" lvalue=""/>
        <input type="name"  value="last name"/>
        <input type="email" value="Email"/>
      </div>
      <button>Subscribe</button>
  </div>
);

ReactDOM.render(MainContent, root);