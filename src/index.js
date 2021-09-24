import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 const cssStyle={};

let curTime=new Date();
curTime=curTime.getHours();
let greeting="";
if (curTime >= 1 && curTime<12){
  greeting="Good Morning";
  cssStyle.color = "Orange";
} else if (curTime >= 12 && curTime <19){
   greeting="Good Afternoon";
   cssStyle.color="green";
}else{
  greeting="Good Night";
  cssStyle.color = "Black";
}


ReactDOM.render(
  <>
  <div className="name">
      <h1>Hello Bishajit,<span style={cssStyle}>{greeting}</span></h1>
  </div>
   
  </>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
