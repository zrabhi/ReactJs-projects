import "./App.css";

const HexaColorGenerator = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    console.log(index);
    color += str[index];
  }
  return "#" + color;
};

const ColorsGenerator = () => {
  const colors = [];
  for (let i = 0; i < 32; i++) colors.push(HexaColorGenerator());
  return colors;
};

const Colors = ({ Colors }) => {
  const list = Colors.map((color) => (
    <li style={{ background: color }} key={color}>
      {" "}
      {color}
    </li>
  ));
  return <ul className="Colors">{list}</ul>;
};

function App() {
  return (
    <main>
      <div className="MainWrapper">
        <h1>30 Days of React</h1>
        <h2>Hexadicaml Colors</h2>
        <Colors Colors={ColorsGenerator()} />
      </div>
    </main>
  );
}

export default App;
