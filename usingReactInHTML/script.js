/**
 * <div id="parent">
 *    <div id="child">
 *      <h1>Child Element</h1>
 *      <h2>Child Element Subtitle</h2>
 *    </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", { id: "child" }, [
    React.createElement("h1", {}, "Child Element"),
    React.createElement("h2", {}, "Child Element Subtitle"),
  ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
