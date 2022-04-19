import React, { useState } from "react";

import Form from "./Form";

function Cal() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState();
  const [isEqual, setEqual] = useState(true);

  function handleSubmit(event) {
    let key = this.event.submitter.name;
    setItems((prevValue) => {
      return [...prevValue, key];
    });

    if (key === "=") {
      setEqual(false);
      items.forEach((element, index) => {
        if (element === "+") {
          setTotal(
            parseInt(items.splice(0, index).join("")) +
              parseInt(items.slice(1).join(""))
          );
        } else if (element === "-") {
          setTotal(
            parseInt(items.splice(0, index).join("")) -
              parseInt(items.slice(1).join(""))
          );
        } else if (element === "*") {
          setTotal(
            parseInt(items.splice(0, index).join("")) *
              parseInt(items.slice(1).join(""))
          );
        } else if (element === "/") {
          setTotal(
            parseInt(items.splice(0, index).join("")) /
              parseInt(items.slice(1).join(""))
          );
        }
      });
    }
    if (key === "C") {
      setItems([]);
      setTotal("");
      setEqual(true);
    }
    event.preventDefault();
  }

  return (
    <Form submitIt={handleSubmit} value={items} total={total} click={isEqual} />
  );
}
export default Cal;
