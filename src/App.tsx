import { useEffect, useState, type JSX } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [number, setNumber] = useState(0);

  async function getAdvice() {
    const resp = await fetch("https://api.adviceslip.com/advice");
    const data = await resp.json();
    setAdvice(data.slip.advice);
    // setNumber(number+1);
    setNumber((prevNumber) => prevNumber + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice} </h1>
      <button onClick={getAdvice}>Click Me!</button>
      <textarea name="name"> </textarea>
      <Message number={number} country="Palestine" />
      <Message number={number} country="Ammana" />
      <button>Submit</button>
    </div>
  );
}

interface MessageProps {
  number: number;
  country: string;
  c?: string;
}

function Message(props: MessageProps): JSX.Element {
  return (
    <div>
      <h2>Advice Count: {props.number} </h2>
      <p>Country : {props.country}</p>
      <p>Country : {props.c}</p>
    </div>
  );
}
