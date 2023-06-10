import React from 'react';
import ReactDOM from 'react-dom';


const root = document.getElementById('root');



const MainInputStyle = {
  display:'flex',
  flexDirection:'row',
  gap:'1rem',
}

const MainContentStyle = {
  // paddingBottom:'1rem',
  display:'flex',
  flex:'1 1 auto',
  flexDirection: 'column',
  alignItems:'center',
  marginBottom: '3rem',
  justifyContent: 'space-between',
  gap:'.5rem',
  marign: '0',
  // padding:'0'

}

const MainContent = (
  <div className='Main-content' style={MainContentStyle}>
  <h1>Subscribe</h1>
      <p>Sign up with your email address to recieve news and update</p>
      <div className='Inputs' style={MainInputStyle}>
        <input type="name" />
        <input type="name"  />
        <input type="email" />
      </div>
      <button>Subscribe</button>
  </div>
);

ReactDOM.render(MainContent, root);