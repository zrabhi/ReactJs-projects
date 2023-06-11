import React from 'react';
import ReactDOM from 'react-dom';
import zrabhiImage from './images/zrabhi.jpg';
import verIcon from './images/check.png';
const Root = document.getElementById('root');


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const Card = (
    <div className='Image'>
        <img className='MainImage' src={zrabhiImage} alt='zac rabhi image'/>
        <div className='MainInfo'>
            <h1>ZAKARIA RABHI</h1>
            <img className='Icon' src={verIcon} alt ='verified' />
        </div>
    </div>
);

ReactDOM.render(Card, Root);

