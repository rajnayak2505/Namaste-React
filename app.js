// Nested HTML using React Element

const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [React.createElement("div", {id:"child1"},[
        React.createElement("h1", {key:1}, "Hello I am H1 tag"),
        React.createElement("h2", {key:2}, "Hello I am H2 tag")
    ]),
    React.createElement("div", {id:"child2"},[
        React.createElement("h1", {key:3}, "Hello I am H1 tag"),
        React.createElement("h2", {key:4}, "Hello I am H2 tag")
    ])
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)
