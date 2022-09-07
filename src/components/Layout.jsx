import React, { useState } from "react";
import "./layout.css";
import Output from "./Output";
import Icon from "../favicon.ico";
import Footer from "./Footer";

function Layout(props) {
  let [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    const value = event.target.value;
    if (value === "=") {
      if (input !== "") {
        let res = "";
        try {
          res = eval(input); // Evaluates js code rep as a string and returns its completion value Note: not encouraged
        } catch (err) {
          setResult("Math error");
        }
        if (res === undefined) {
          setResult("Math error");
        } else {
          setResult(input + "=");
          setInput(res);
        }
      }
    } else if (value === "C") {
      setInput("0");
      setResult("");
    } else if (value === "DEL") {
      let str = input;
      str = str.substr(0, str.length - 1);
      setInput(str);
    } else if (input === "0") {
      setInput(value);
    } else {
      setInput((input += value));
    }
  };

  return (
    <div className="main-frame">
      <div className="calculator">
        <br />
        <br />
        <Output user={input} answer={result} />
        <div
          className="title name"
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <img className="icon" src={Icon} alt="" /> <h2>M-CALCULATOR</h2>
        </div>
        <div className="keys">
          <input
            type="button"
            value={"C"}
            className="button clear"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"DEL"}
            className="button clear"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"%"}
            className="button operator"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"/"}
            className="button operator"
            onClick={handleClick}
          />

          <input
            type="button"
            value={"7"}
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"8"}
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"9"}
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"*"}
            className="button operator"
            onClick={handleClick}
          />

          <input
            type="button"
            value={"4"}
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"5"}
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"6"}
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"-"}
            className="button operator"
            onClick={handleClick}
          />

          <input
            type="button"
            value={"1"}
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"2"}
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"3"}
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"+"}
            className="button operator"
            onClick={handleClick}
          />

          <input
            type="button"
            value={"0"}
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"."}
            className="button"
            onClick={handleClick}
          />
          <input
            type="button"
            value={"="}
            className="button operator equal-sign"
            onClick={handleClick}
          />
        </div>
        <Footer/>
      </div>
      
    </div>
  );
}

export default Layout;
