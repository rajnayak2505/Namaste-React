import React from "react";
import ReactDOM from "react-dom/client"
// Nested HTML using React Element

const heading =(
    <h1 className="heading">Namaste React</h1>
);

const HeadingComponent = () => (
       <div>
        {heading}
         <h1>Namaste React</h1>
       </div>
    
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)
