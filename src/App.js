import React, { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className="container">
      <div className="row">
        <div className="App">
          <div className="title">
            <h1>Traffic-Ligth desde ReactJS</h1>
          </div>
          <div className="block offset-5">
            <div className="lights">
              <div className="red light">
                <div
                  id="red"
                  className={"red" === color ? "on" : ""}
                  onClick={() => setColor("red")}
                ></div>
              </div>
              <div className="yellow light">
                <div
                  type="button"
                  id="yellow"
                  className={"yellow" === color ? "on" : ""}
                  onClick={() => setColor("yellow")}
                ></div>
              </div>
              <div className="green light">
                <div
                  type="button"
                  id="green"
                  className={"green" === color ? "on" : ""}
                  onClick={() => setColor("green")}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
