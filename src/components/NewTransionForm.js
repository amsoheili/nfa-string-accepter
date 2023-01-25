import React, { useState } from "react";

const NewTransionForm = (props) => {
  const [transitionObject, setTransitionObject] = useState({
    start: "",
    input: "",
    end: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddTransition(transitionObject);
    props.onCloseAddTransition();
    setTransitionObject({
      start: "",
      input: "",
      end: "",
    });
    console.log(e);
  };

  const handleChange = (e) => {
    console.log(e.target);
    setTransitionObject((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="start">Start: </label>
        <input
          type="text"
          name="start"
          onChange={handleChange}
          value={transitionObject.start}
        />
        <label htmlFor="input">Input: </label>
        <input
          type="text"
          name="input"
          onChange={handleChange}
          value={transitionObject.input}
        />
        <label htmlFor="end">End: </label>
        <input
          type="text"
          name="end"
          onChange={handleChange}
          value={transitionObject.end}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewTransionForm;
