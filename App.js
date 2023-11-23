// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hi Mom from React!"
// );

// console.log(heading);

const parent = React.createElement("div", { id: "div1", key:"d1" }, [
  React.createElement("div", { id: "child1", key:"c1" }, [
    React.createElement(
      "h1",
      { id: "heading", key: "h1c1" },
      "Hi I am an h1 tag from child1"
    ),
    React.createElement(
      "h2",
      { id: "heading", key: "h2c1" },
      "Hi I am an h2 tag from child1"
    ),
  ]),
  React.createElement("div", { id: "child2", key: "c2" }, [
    React.createElement(
      "h1",
      { id: "heading", key: "h1c2" },
      "Hi I am an h1 tag from child2"
    ),
    React.createElement(
      "h2",
      { id: "heading", key: "h2c2" },
      "Hi I am an h2 tag from child2"
    ),
  ])
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
