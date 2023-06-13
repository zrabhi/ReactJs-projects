import React from "react";
import ReactDOM from "react-dom";

const ShowData = (time) => {
  const months = [
    "Junuary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return `${month} ${date}, ${year}`;
};

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const App = () => {
  const handleTime = () => {
    alert(ShowData(new Date()));
  };
  const greetPeople = () => {
    alert("Welcome to 30 Day of React.js Challenge, 2023");
  };

  return (
    <div className="app">
      <Button text="show time" onClick={handleTime} />
      <Button text="Greet People" on onClick={greetPeople} />
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
