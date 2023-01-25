import React, { useState } from "react";
import NewTransionForm from "./NewTransionForm";

const Transition = (props) => {
  return (
    <div>
      <p>{`start: ${props.start}, input: ${props.input}, end: ${props.end}`}</p>
    </div>
  );
};

export default Transition;
