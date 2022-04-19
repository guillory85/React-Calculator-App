import React from "react";

export default function Input(props) {
  return <input className="input" type="text" readOnly value={props.value} />;
}
