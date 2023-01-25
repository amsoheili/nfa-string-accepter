import logo from "./logo.svg";
import classes from "./App.module.scss";
import TransitionsList from "./components/TransitionsList";
import { useState } from "react";
import FinalStates from "./components/FinalStates";

const fakeTransitions = [
  { start: "q1", input: "0", end: "q2" },
  { start: "q1", input: "0", end: "q1" },
  { start: "q2", input: "1", end: "q1" },
  { start: "q1", input: "1", end: "q3" },
  { start: "q2", input: "0", end: "q3" },
  { start: "q3", input: "0", end: "q2" },
];

function App() {
  const [transitionsList, setTransitionList] = useState([]);

  const [inputString, setInputString] = useState(null);

  const [finalStates, setFinalStates] = useState([]);

  const [isAccepted, setIsAccepted] = useState(false);

  const addTransition = (transition) => {
    setTransitionList((prevState) => {
      return [...prevState, transition];
    });
  };

  const addFinalState = (state) => {
    setFinalStates((prevState) => {
      return [...prevState, state];
    });
  };

  const checkString = () => {
    setIsAccepted(false);
    console.log(`input string : ${inputString}`);
    console.log(isInputAccepted(inputString, transitionsList[0].start, 0));
    // setInputString("");
  };

  // const transitions = [
  //   { start: "q1", input: "0", end: "q2" },
  //   { start: "q1", input: "0", end: "q1" },
  //   { start: "q2", input: "1", end: "q1" },
  //   { start: "q1", input: "1", end: "q3" },
  //   { start: "q2", input: "0", end: "q3" },
  //   { start: "q3", input: "0", end: "q2" },
  // ];

  const isInputAccepted = (string, curState, curCharPointer) => {
    console.log(
      `string: ${string}, curState: ${curState}, char: ${string[curCharPointer]}`
    );

    if (curCharPointer > string.length) {
      return;
    }

    if (curCharPointer == string.length) {
      if (finalStates.includes(curState)) {
        setIsAccepted(true);
        console.log("found");
        return true;
      }
    }

    let numOfTransitions = 0;

    for (let i = 0; i < transitionsList.length; ++i) {
      if (transitionsList[i].start == curState) {
        if (transitionsList[i].input == string[curCharPointer]) {
          numOfTransitions++;
          const newCurCharPointer = curCharPointer + 1;
          const newCurState = transitionsList[i].end;
          isInputAccepted(string, newCurState, newCurCharPointer);
        }
      }
    }
    if (numOfTransitions < 1) {
      return;
    }
  };

  // console.log(isInputAccepted("000100", "q1", 0));

  return (
    <div className={classes.main}>
      <TransitionsList
        transitions={transitionsList}
        onAddTransition={addTransition}
      />
      <FinalStates finalStates={finalStates} onAddFinalState={addFinalState} />
      <div>
        <h1>Input string</h1>
        <input onChange={(e) => setInputString(e.target.value)} />
        <button onClick={checkString}>Check String</button>
      </div>
      {isAccepted ? (
        <h4>The input is accepted by the dfa</h4>
      ) : (
        <h4>The input is not accepted by the dfa</h4>
      )}
    </div>
  );
}

export default App;
