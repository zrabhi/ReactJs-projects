import "./App.css";

function randomNumberInRange(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// for debbuging
// const Test = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//   22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
// ];

const isPrime = (number) => {
  for (let i = 2; i < number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const Numbers = ({ Numbers }) => {
  const list = Numbers.map((number) => {
    if (number > 1) {
      if (isPrime(number))
        return (
          <li style={{ backgroundColor: "red" }} key={number}>
            {number}
          </li>
        );
      if (number % 2)
        return (
          <li style={{ backgroundColor: "yellow" }} key={number}>
            {number}
          </li>
        );
      else if (!(number % 2))
        return (
          <li style={{ backgroundColor: "green" }} key={number}>
            {number}
          </li>
        );
    }
    if (number === 1)
      return (
        <li style={{ backgroundColor: "yellow" }} key={number}>
          {number}
        </li>
      );
    else if (number === 0)
      return (
        <li style={{ backgroundColor: "green" }} key={number}>
          {number}
        </li>
      );
  });
  return <ul className="Numbers">{list}</ul>;
};

function randomNumberGenerator() {
  const numbers = [];
  for (let i = 0; i < 32; i++) {
    numbers.push(randomNumberInRange(100, 1));
  }
  return numbers;
}

function App()
{
  return (
    <main>
      <div className="MainWrapper">
        <h1>30 Days of React</h1>
        <h2>Number Generator</h2>
        <Numbers Numbers={randomNumberGenerator()} />
      </div>
    </main>
  );
}

// export default randomNumberInRange;
export default App;
