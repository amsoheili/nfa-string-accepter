const transitions = [
  { start: "q1", input: "0", end: "q2" },
  { start: "q1", input: "0", end: "q1" },
  { start: "q2", input: "1", end: "q1" },
  { start: "q1", input: "1", end: "q3" },
  { start: "q1", input: "0", end: "q3" },
];

const finalStates = ["q3"];

const startState = "q1";

// const inputString = "011";

// let inputCharPointer = 0;

export const isInputAccepted = (inputString, curState, curCharPointer) => {
  if (finalStates.includes(curState)) {
    return true;
  }

  let numOfTransitions = 0;

  for (let i = 0; i < transitions.length; ++i) {
    if (transitions[i].start == curState) {
      if (transitions[i].input == inputString[curCharPointer]) {
        curCharPointer++;
        numOfTransitions++;
        curState = transitions[i].end;
        isInputAccepted(inputString, curState, curCharPointer);
      }
    }
  }
  if (numOfTransitions < 1) {
    return false;
  }
};

// console.log(isInputAccepted("011", startState, 0));
