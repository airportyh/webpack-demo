import * as _ from "lodash";
// import * as h from "hyperscript";
import * as React from "react";
import * as ReactDOM from "react-dom";

import "./style.css";

const people = [
    "Danny",
    "Fabiano",
    "Robert",
    "Yifan",
    "Anish"
];

const a: number = 45;

console.log("a is", a);

// const lis = _.map(people, p => h("li", p));
// const ul = h("ul", ...lis);
// document.body.appendChild(ul);
// console.log(_.map([1, 2, 3], n => n * n));

function App() {
    return (
        <ul>
            {_.map(people, (p) => <li key={p}>Hello, {p}!</li>)}
        </ul>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));
