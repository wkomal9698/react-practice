import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = <h1 id="heading1" className="heading">Hello World from React! 121</h1>;
const heading2 = React.createElement("h1", {id:"heading2", xyz:"abc"}, "Hello World from React!2");
const Heading3 = () => {
    return <h1>Hello World from functional react component type 1! </h1>;
};
const Heading4 = () => <h1>Hello World from functional react component type 2! </h1>;
// Component Composition - component called within another component
const Heading5 = () => {
    return <div>
        // all three ways mentioned below are calling the component
        <Heading3></Heading3>
        {Heading3()} // as at the end Heading3 is a function, you can call it like this
        <Heading4/>
        --------------
        {heading1}
        --------------
        {4+44} = 4+44 (Evaluate any JS within jsx using {})
        {console.log("hi")}
    <h1>Hello World from functional react component type 3! </h1>
    </div>
};
const Heading6 = function() {
    return <h1>Hello World from functional react component type 4! </h1>;
};
const parent = React.createElement("div", {"id": "parent"}, [React.createElement("div", {id:"child"}, [heading1, heading2, <Heading3/>, <Heading4/>, <Heading5/>, <Heading6/>]), heading1, heading2, <Heading3/>, <Heading4/>, <Heading5/>, <Heading6/>]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("heading1:: ", heading1);
console.log("heading2:: ", heading2);
root.render(parent);