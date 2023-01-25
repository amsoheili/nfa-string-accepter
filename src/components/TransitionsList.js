import React, { useState } from "react";
import NewTransionForm from "./NewTransionForm";
import Transition from "./Transition";
import classes from "./Transition.module.scss";

const TransitionsList = (props) => {
  const [isAddingNewTransion, setIsAddingNewTransion] = useState(false);

  const toggleAddingNewTransion = () => {
    setIsAddingNewTransion((prevState) => !prevState);
  };

  return (
    <div>
      <h1>Add transitions</h1>
      <div>
        {props.transitions.map((transition, index) => (
          <Transition
            key={index}
            start={transition.start}
            input={transition.input}
            end={transition.end}
          />
        ))}
      </div>
      <div className={classes["add-transition"]}>
        <div>
          {!isAddingNewTransion && (
            <button onClick={toggleAddingNewTransion}>Add new Transion</button>
          )}
        </div>
        <div>
          {isAddingNewTransion && (
            <div>
              <NewTransionForm
                onAddTransition={props.onAddTransition}
                onCloseAddTransition={() => setIsAddingNewTransion(false)}
              />
              <button onClick={() => setIsAddingNewTransion(false)}>
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

export default TransitionsList;
