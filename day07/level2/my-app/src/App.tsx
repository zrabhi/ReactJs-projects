import React, { Component } from "react";
import "./App.css";
import Props from "./PropsTypes";
import countriesData from "./data/countries";
import randomNumberInRange from "./utils/Helpers"

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

const Button: React.FC<Props["Button"]> = ({onClick}) => {
  return (
    <button  onClick={onClick}>
      Select Country
    </button>
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
  
  state = {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani',
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

  changeCountry = () => {
   
  };
  render() {
    const UserData: Props["data"] = {
      Welcome: "30 Days Of React",
      Title: "Getting Started React",
      Subtitle: "JavaScript Library",
      author: {
        FirstName: "Zakaria",
        LastName: "Rabhi",
      },
      date: "Oct 7, 2020",
      BackGround: "#61dbfb",
      color: "#18122B",
    };

    return (
      <div className="App" >
        <HeaderContent data={UserData} />
        <div
          className="Card"
          
        ></div>
      <Button onClick={this.changeCountry}/>
        <Footer
          date={this.showDate(new Date())}
          background="#61dbfb"
          color="#18122B"
        />
      </div>
    );
  }
}

export default App;
