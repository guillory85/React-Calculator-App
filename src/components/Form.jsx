import React from "react";
import Input from "./Input";

export default function Form(props) {
  let itemsJoin = props.value.join("");

  return (
    <form onSubmit={props.submitIt}>
      {props.click ? (
        <Input value={itemsJoin} />
      ) : (
        <Input value={props.total} />
      )}

      <div className="pad">
        <input type="submit" name="C" value="C" />
        <input type="submit" name="/" value="/" />
        <input type="submit" name="7" value="7" />
        <input type="submit" name="8" value="8" />
        <input type="submit" name="9" value="9" />
        <input type="submit" name="*" value="*" />
        <input type="submit" name="4" value="4" />
        <input type="submit" name="5" value="5" />
        <input type="submit" name="6" value="6" />
        <input type="submit" name="+" value="+" />
        <input type="submit" name="1" value="1" />
        <input type="submit" name="2" value="2" />
        <input type="submit" name="3" value="3" />
        <input type="submit" name="-" value="-" />
        <input type="submit" name="0" value="0" />
        <input type="submit" name="=" value="=" />
      </div>
    </form>
  );
}
