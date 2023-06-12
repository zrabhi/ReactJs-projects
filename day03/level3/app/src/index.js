import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

const HexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

let Color = "";

const HexaColorDiv = () => {
  Color = HexaColor();
  const HexaDivStyle = {
    width: "auto",
    height: "100px",
    textAlign: "center",
    paddingTop: "5rem",
    borderRadius: "1rem",
    background: Color,
  };
  return <div style={HexaDivStyle}>{Color}</div>;
};

const MainContentStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

const MainContent = () => (
  <div className="Main-wrapper" style={MainContentStyle}>
    <HexaColorDiv />
    <HexaColorDiv />
    <HexaColorDiv />
    <HexaColorDiv />
    <HexaColorDiv />
  </div>
);

ReactDOM.render(<MainContent />, rootElement);
