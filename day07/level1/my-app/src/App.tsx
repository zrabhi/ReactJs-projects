import React, { Component } from "react";
import "./App.css";
import zrabhiImage from "./images/zrabhi.jpg";

// Fucntion to show month date year

type data = {
  Welcome: string;
  Title: string;
  Subtitle: string;
  author: {
    FirstName: string;
    LastName: string;
  };
  date: string;
  BackGround: string;
  color: string;
};

type ButtonProps = {
  text: string;
  onClick: () => void;
  style: React.CSSProperties;
};


type HeaderContentProp = {
  data: data;
};

type userProps = {
  FirstName: string;
  LastName: string;
  Image: string;
};

type FooterProps = {
  date: string;
  background: string;
  color: string;
};


const buttonStyles: React.CSSProperties = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

class HeaderContent extends Component<HeaderContentProp> {
  render() {
    const { Welcome, Title, Subtitle } = this.props.data;
    const { FirstName, LastName } = this.props.data.author;

    return (
      <div
        style={{
          background: this.props.data.BackGround,
          color: this.props.data.color,
        }}
        className="MainContent"
      >
        <h1>{Welcome}</h1>
        <h2>{Title}</h2>
        <h3>{Subtitle}</h3>
        <p>
          {FirstName} {LastName}
        </p>
        <small>{this.props.data.date}</small>
      </div>
    );
  }
}

class TechList extends Component {
  render() {
    const techs: string[] = ["Html", "Css", "JavaScript"];
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return <ul className="Techs">{techsFormatted}</ul>;
  }
}

const Button: React.FC<ButtonProps> = ({ text, onClick, style }) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
};

const UserCard: React.FC<userProps> = ({ FirstName, LastName, Image }) => {
  return (
    <div className="user-card">
      <img src={Image} alt={FirstName} />
      <h2>
        {FirstName}
        {LastName}
      </h2>
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({ date, background, color }) => {
  return (
    <footer>
      <div
        style={{ background: background, color: color }}
        className="footerWrapper"
      >
        <p>Copyright {date}</p>
      </div>
    </footer>
  );
};
export class App extends Component {
  state = {
    backgroundColor: "#61dbfb",
    userCardBckGround: "",
    color: "black",
  };

  showDate = (time: Date): string => {
    const months: string[] = [
      "Junuary",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ];
    const month: string = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return `${month} ${date},  ${year}`;
  };
  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert("Welcome to 30 days of react, 2023");
  };
  changeBackground = () => {
    let WhiteBackGround = "#61dbfb";
    let BlackBackGround = "#18122B";
    let CurrentBackColor =
      this.state.backgroundColor === WhiteBackGround
        ? BlackBackGround
        : WhiteBackGround;

    let CurrentColor = CurrentBackColor === WhiteBackGround ? "black" : "white";
    let UserCardBack =
      CurrentBackColor === WhiteBackGround ? "white" : "#18122B";
    this.setState({ backgroundColor: CurrentBackColor });
    this.setState({ color: CurrentColor });
    this.setState({ userCardBckGround: UserCardBack });
  };
  render() {
    const UserData: data = {
      Welcome: "Welcome to 30 Days Of React",
      Title: "Getting Started React",
      Subtitle: "JavaScript Library",
      author: {
        FirstName: "Zakaria",
        LastName: "Rabhi",
      },
      date: "Oct 7, 2020",
      BackGround: this.state.backgroundColor,
      color: this.state.color,
    };

    return (
      <div className="App" style={{ background: this.state.userCardBckGround }}>
        <HeaderContent data={UserData} />
        <div
          className="Card"
          style={{ background: this.state.userCardBckGround, color:this.state.color  }}
        >
          <p>Prerequisite to get started react.js</p>
          <TechList />
          <UserCard FirstName="Zakaria" LastName="Rabhi" Image={zrabhiImage} />
        </div>
        <div
          className="Buttons"
          style={{ background: this.state.userCardBckGround }}
        >
          <Button
            text="Greet People"
            style={buttonStyles}
            onClick={this.greetPeople}
          />
          <Button
            text="Show Time"
            style={buttonStyles}
            onClick={this.handleTime}
          />
          <Button
            text="Change Background"
            style={buttonStyles}
            onClick={this.changeBackground}
          />
        </div>
        <Footer
          date={this.showDate(new Date())}
          background={this.state.backgroundColor}
          color={this.state.color}
        />
      </div>
    );
  }
}
