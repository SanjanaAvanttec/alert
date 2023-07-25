import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import QuestionBox from "./App";
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));

const question = "What is the capital of France?";
const answers = ["Paris", "Berlin", "Rome", "Madrid"];
root.render(
  <React.StrictMode>
      <QuestionBox question={question} answers={answers} />,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
