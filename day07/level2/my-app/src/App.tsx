import React, { Component } from "react";
import "./App.css";
import Props from "./PropsTypes";

const Footer: React.FC<Props["Footer"]> = ({ date, background, color }) => {
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

class HeaderContent extends Component<Props["HeaderContentProp"]> {
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

class App extends Component {
  constructor(prop: Props) {
    super(prop);
  }

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
    const UserData: Props["data"] = {
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
          style={{
            background: this.state.userCardBckGround,
            color: this.state.color,
          }}
        ></div>
        <Footer
          date={this.showDate(new Date())}
          background={this.state.backgroundColor}
          color={this.state.color}
        />
      </div>
    );
  }
}

export default App;
