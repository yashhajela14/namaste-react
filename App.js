import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement('h1', { id:'heading'}, "Yo! Namaste bitch!");

const Title = () => <h1 className="title">Yo! Namaste from JSX ☀️</h1>;

//Component Composition
const FuncComponent = () => (
  <div>
    {Title()}
    <Title></Title>
    <Title />
    <h2>{console.log(200 + 300)}</h2>
    <h1 className="heading">Its a Func Comp!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FuncComponent />);
