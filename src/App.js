import { useState } from "react";
import "./styles.css";

export default function App() {
  const [txt, Settxt] = useState("");
  let newtxt = "";
  

  let timer;

  const inputHandler = (e) => {
    Settxt(e.target.value);
  };

  const db = (fn, delay) => {
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
        
      }, delay);
    };
  };

  const outputHandler = (tt) => {
    let copyText = tt;
    let newstr = "";

    console.log(copyText);
    for (let i = 0; i < copyText.length; i++) {
      if (txt[i] === copyText[i]) {
        let nn = String.fromCharCode(copyText.charCodeAt(i) + 10);
        
        newstr += nn;
        console.log(nn);
        
      }
    }
    return newstr;
  };
  newtxt = outputHandler(txt);
  
  return (
    <div className="App">
      <input
        type="txt"
        className="inputText"
        onChange={inputHandler}
        value={newtxt}
      ></input>
      <div className="output">{newtxt}</div>
      <div className="output">{txt}</div>
    </div>
  );
}
