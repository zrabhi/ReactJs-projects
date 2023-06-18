import React, { Component } from "react";
import "./App.css";
import zrabhiImage from "./images/zrabhi.jpg";

// Fuction to show month date year

type data = {
  Welcome: string;
  Title: string;
  Subtitle: string;
  author: {
    FirstName: string;
    LastName: string;
  };
  date: string;
};

type ButtonProps = 
{
  text: string;
  onClick: () => void;
};

type MainContentProp = {

}

type HeaderContentProp = {
  data: data;
}
class HeaderContent extends Component<HeaderContentProp> {
 
  render() 
    {
      const { Welcome, Title, Subtitle } = this.props.data;
      const { FirstName, LastName } = this.props.data.author;

      return (
        <div className="MainContetent">
          <h1>{Welcome}</h1>
          <h2>{Title}</h2>
          <h3>{Subtitle}</h3>
          <p>
            {FirstName} {LastName}
          </p>
        </div>
      );
    }
  }

class techList extends Component {
  render()
  {
    const techs: string[] = ['Html', 'Css', 'JavaScript'];
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>) 
    return (techsFormatted);
  }
}
class MainContent extends Component<MainContentProp>
{
  buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
};
}

export class App extends Component {
  state = {
    styles: {
      backgroundColor: "",
      color: "",
    },
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
    return `${month} ${date},  ${year};`;
  };
  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert("Welcome to 30 days of react, 2023");
  };
  changeBackground = () => {};
  render() {
    const UserData: data = {
      Welcome: "Welcome to 30 Days Of React",
      Title: "Getting Started React",
      Subtitle: "JavaScript Library",
      author: {
        FirstName: "Zac",
        LastName: "Rabhi",
      },
      date: "Oct 7, 2020",
    };

    const userImage = { image: zrabhiImage };
    return (
      <div className="header-wrapper">
        {this.state.styles.backgroundColor}
        <HeaderContent data={UserData} />
      </div>
    );
  }
}
