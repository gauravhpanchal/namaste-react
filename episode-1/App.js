// React.createElement creates and object and curly brackets are used to pass the attributes like class and id to the element
// const heading = React.createElement("h1", { id: "heading" }, "Hello World");

// console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

// //render converts the object into heading h1 tag and put it in the dom
// root.render(heading);

/**
 * NESTED STRUCTURE
 * <div id="parent">
 *       <div id="child">
 *          <h1>Im an H1 tag</h1> **Siblings are passed inside an array
 *          <h2>Im an H2 tag</h2>
 *       </div>
 * </div>
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im an H1 tag"),
    React.createElement("h2", {}, "Im an H2 tag"),
  ])
);

root.render(parent);
