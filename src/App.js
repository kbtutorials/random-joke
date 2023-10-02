import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";

function App() {
  const jokesObj = {
    type: "general",
    setup: "What did the spaghetti say to the other spaghetti?",
    punchline: "Pasta la vista, baby!",
    id: 150,
  };
  const [jokes, setJokes] = useState(jokesObj);

  async function getJoke() {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    setJokes(data);
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={getJoke}>Random Joke</button>
      </section>
      <section>
        <h2>
          <i>Setup : </i>
          {jokes.setup}
        </h2>
        <h2>
          <i>Punchline: </i>
          {jokes.punchline}
        </h2>
      </section>
    </React.Fragment>
  );
}

export default App;
