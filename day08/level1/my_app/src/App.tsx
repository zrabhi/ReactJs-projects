import React from "react";
import Prop from "./PropsTypes";
import "./App.css";

class Header extends React.Component<Prop["HeaderContent"]> {
  render() {
    console.log(this.props);
    const { Welcome, Title, Subtitle, date } = this.props.data;

    const { FirstName, LastName } = this.props.data.author;
    return (
      <header>
        <div className="MainContent" style={this.props.data.divStyle}>
          <h1>{Welcome}</h1>
          <h2>{Title}</h2>
          <h3>{Subtitle}</h3>
          <p>
            {FirstName} {LastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

const Message: React.FC<Prop["Message"]> = ({ message }) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};
const Login = () => (
  <div>
    <h3>Please Login</h3>
  </div>
);
const Welcome = () => (
  <div>
    <h1>Welcome to 30 Days Of React</h1>
  </div>
);

// A button component
const Button: React.FC<Prop["Button"]> = ({ text, onClick, style }) => (
  <button onClick={onClick} style={style}>
    {text}
  </button>
);
// TechList Component
// class base component
class TechList extends React.Component<Prop["techs"]> {
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component
// Class Component
class Main extends React.Component<Prop["MainContent"]> {
  render() {
    const { techs, greetPeople, handleTime, loggedIn, handleLogin, message } =
      this.props;
    console.log(message);

    const status = loggedIn ? <Welcome /> : <Login />;
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          {techs.length === 3 && (
            <p>You have all the prerequisite courses to get started React</p>
          )}
          <div>
            <Button
              text="Show Time"
              onClick={handleTime}
              style={buttonStyles}
            />{" "}
            <Button
              text="Greet People"
              onClick={greetPeople}
              style={buttonStyles}
            />
            {!loggedIn && (
              <p>
                Please login to access more information about 30 Days Of React
                challenge
              </p>
            )}
          </div>
          <div style={{ margin: 30 }}>
            <Button
              text={loggedIn ? "Logout" : "Login"}
              style={buttonStyles}
              onClick={handleLogin}
            />
            <br />
            {status}
          </div>
          <Message message={message} />
        </div>
      </main>
    );
  }
}

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: "3px auto",
  cursor: "pointer",
  fontSize: 22,
  color: "white",
};

// Footer Component
// Class component
class Footer extends React.Component<Prop["Footer"]> {
  render() {
    return (
      <footer>
        <div className="footer-wrapper" style={this.props.footerStyle}>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ["HTML", "CSS", "JS"],
    message: "Click show time or Greet people to change me",
  };
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };
  showDate = (time: Date) => {
    const months = [
      "January",
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
  handleTime = () => {
    let message = this.showDate(new Date());
    this.setState({ message });
  };
  greetPeople = () => {
    let message = "Welcome to 30 Days Of React Challenge, 2020";
    this.setState({ message });
  };

  render() {
    const data: Prop["data"] = {
      Welcome: "30 Days Of React",
      Title: "Getting Started React",
      Subtitle: "JavaScript Library",
      author: {
        FirstName: "Asabeneh",
        LastName: "Yetayeh",
      },
      date: "Oct 9, 2020",
      divStyle: {
        display: "flex",
        flexDirection: "column",
        paddingTop: "0",
        paddingLeft: "10rem",
        margin: "0",
        paddingBottom: "10px",
        background: "#61dbfb",
        borderBottom: "1px solid rgb(194, 194, 194)",
      },
    };
    const footerStyle:  React.CSSProperties = {
      position: "fixed",
      borderTop: "2px solid rgb(194, 194, 194)",
      background: "#61dbfb",
      width: "100%",
      height: "40px",
      paddingTop: "10px",
      bottom: "0%",
      left: "0%",
      textAlign: "center",
    };

    return (
      <div className="app">
        <Header data={data} />

        <Main
          techs={this.state.techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          loggedIn={this.state.loggedIn}
          handleLogin={this.handleLogin}
          message={this.state.message}
        />

        <Footer date={new Date()} footerStyle={footerStyle} />
      </div>
    );
  }
}

export default App;
