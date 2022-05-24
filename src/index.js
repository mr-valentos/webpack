import React, { useState } from "react";
import { render } from "react-dom";
import "./style.scss"

console.log("Hello webpack!")

const fancyFunc = () => {
    return [1, 2];
  };
  
const [a, b] = fancyFunc();

const data = [
  ['a1', 'a2'],
  ['b1','b2']
]


function App() {
  const table = data.map((elem, index) => 
  <tr key={index}>{elem.map((item)=> <td>{item}</td>)}</tr>
 )
    return (
    <table>
      <tbody>
        {table}
      </tbody>
    </table>)
}

render(<App />, document.getElementById("root"));