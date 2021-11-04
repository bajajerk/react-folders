import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { text } from "./data.js";

function readSingleFile(e) {
  console.log("as");
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    console.log(contents);
  };
  reader.readAsText(file);
}

var element = document.createElement("input");
element.type = "file";

element.addEventListener("change", readSingleFile, false);
setTimeout(() => {
  element.click();
}, 100);

function download(filename, text) {
  // var element = document.createElement("a");
  // element.setAttribute(
  //   "href",
  //   "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  // );
  // element.setAttribute("download", filename);

  // element.style.display = "none";
  // document.body.appendChild(element);

  // element.click();

  // document.body.removeChild(element);

  const element = document.createElement("a");
  const dataBlob = new Blob([text], { type: "text/plain" });
  const objectUrl = URL.createObjectURL(dataBlob);
  element.href = objectUrl;
  element.download = filename;
  element.click();
}

function App() {
  return (
    <div className="App">
      <h1
        onClick={() => {
          download(
            "sqren.txt",
            JSON.stringify({
              text,
              text2: text,
              text3: text,
              text4: text,
              text5: text,
              text6: text,
              text7: text,
              text8: text,
              text9: text,
              text10: text,
              text11: text,
              text12: text,
              text13: text
            })
          );
        }}
      >
        Download file
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
