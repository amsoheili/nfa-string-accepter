import React, { useState } from "react";
import classes from "./FinalStates.module.scss";

const FinalStates = (props) => {
  const [isAddingNewFinalState, setIsAddingNewFinalState] = useState(false);
  const [newFinalState, setNewFinalState] = useState(null);
  const toggleAddingNewFinalState = () => {
    setIsAddingNewFinalState((prevState) => !prevState);
  };

  const addNewFinalState = () => {
    props.onAddFinalState(newFinalState);
  };

  return (
    <div>
      <h1>Add Final States</h1>
      <div>
        {props.finalStates.map((state, index) => (
          <p key={index}>{state}</p>
        ))}
      </div>
      <div className={classes["add-transition"]}>
        <div>
          {!isAddingNewFinalState && (
            <button onClick={toggleAddingNewFinalState}>
              Add new Transion
            </button>
          )}
        </div>
        <div>
          {isAddingNewFinalState && (
            <div>
              <label htmlFor="new-final-state">New Final State:</label>
              <input
                name="new-final-state"
                onChange={(e) => setNewFinalState(e.target.value)}
              />
              <button onClick={addNewFinalState}>Add New Final State</button>
              <button onClick={() => setIsAddingNewFinalState(false)}>
                close
              </button>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FinalStates;
