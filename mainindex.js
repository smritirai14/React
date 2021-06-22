//var React = require('react');
//var ReactDom = require('react-dom');

//ReactDom.render(<h1> hello world!! </h1>,
 //document.getElementById('root') );

//var h1 = document.createElement("h1");
//h1.innerHTML = "Smriti Technical";
//document.getElementById("root").appendChild(h1);


//import React from "react";
//import ReactDom from "react-dom";

  //ReactDom.render(
       // <React.Fragment>
      //             <h1> Smriti Rai like </h1>
      //             <p> Plz like and share </p>
     //            <h2> please subscribe our channel </h2>
   // </React.Fragment>,
 //  document.getElementById("root")
  // );

//ReactDom.render( React.createElement("h1",null,
//" Smriti Rai Like ")
  //  document.getElementById("root")
  //);




 // import React from "react";
 // import ReactDom from "react-dom";

  //ReactDom.render(
    //    <React.Fragment>
      //      <h1>  Dusty </h1>
        //    <h2>  Quantico </h2> 
          //  <h3>  Breathe under the shadows </h3>
            //<h4>  Friends </h4> 
            //<h5>  Mr. Bean </h5>
            //<h6>  This is the list of my favourite Netflix series </h6>
        //</React.Fragment >,
          //  document.getElementById("root")
            // );


//import React from "react";
//import ReactDOM from "react-dom";

//const fname = "vinod";
//const lname =  "thapaaa";

//ReactDOM.render(
    //<>
       //<h1> my name is {'${fname } ${lname} '}</h1>
      // <p> my lucky number is {5+5} </p>
    // </> ,
  //   document.getElementById("root") 
//);

//import React from 'react';
//import ReactDOM from 'react-dom';

//const name = "Smriti Rai";
//const currDate = new Date().toLocaleDateString();
//const currTime = new Date().toLocaleTimeString();
//ReactDOM//.render(
  //<>
   // <h1>Hello, my name is {name}</h1>
   // <p> Current Time is = {currDate} </p>
    //<p> Current Time is = {currTime} </p>
  //</>,
  //document.getElementById("root")
//);



//import React from "react";
//import ReactDOM from "react-dom";

//const name = "smriti";
//const img1 = "https://picsum.photos/200/300";
//const img2 = "https://picsum.photos/250/300";
//const img3 = "https://picsum.photos/270/300";
//const img4 = "https://picsum.photos/300/300";
//const links ="https://www.thapatechnical.com";

//ReactDOM.render(
  //<>
     //<h1 contentEditable="true"> My name is {name} </h1>
     //<img src={img1} alt="randomImages"/>
     //<img src={img2} alt="randomImages"/>
     //<img src={img3} alt="randomImages"/>
     //<a href={links} target="_hjhgjgb">
     //<img src={img4} alt="randomImages"/>
    // </a>
  //</>,

//document.getElementById("root")
//);




//import React from "react";
//import ReactDOM from "react-dom";
//import"./index.css";

//const name = "smriti";
//const img1 = "https://picsum.photos/200/300";
//const img2 = "https://picsum.photos/250/300";
//const img3 = "https://picsum.photos/270/300";
//const img4 = "https://picsum.photos/300/300";
//const links ="https://www.thapatechnical.com";

//ReactDOM.render(
  //<>
    // <h1 className="heading" style= ""> My name is {name} </h1>
     //<div>
     //<img src={img1} alt="randomImages"/>
     //<img src={img2} alt="randomImages"/>
     //<img src={img3} alt="randomImages"/>
     //<a href={links} target="_hjhgjgb">
     //<img src={img4} alt="randomImages"/>
     //</a>
     //</div>
  //</>,



//import React from "react";
//import ReactDOM from "react-dom";
//import"./index.css";

//const name = "smriti";
//const img1 = "https://picsum.photos/200/300";
//const img2 = "https://picsum.photos/250/300";
//const img3 = "https://picsum.photos/270/300";
//const img4 = "https://picsum.photos/300/300";
//const links ="https://www.thapatechnical.com";
//const heading = {
  //color:'#fa9191',
  //textAlign: 'center',
  //textTransform: 'capitalize',
  //fontSize: 'xxLarge',
  //textShadow: '0px 2px 4px' ,
//  margin: '50px 50px' ,
//  fontFamily:'"Josefin Sans", sansSerif',
//}

//ReactDOM.render(
  //<>
     //<//h1  style= {heading}> My name is {name} </h1>

     //<div>
     //<img src={img1} alt="randomImages"/>
     //<img src={img2} alt="randomImages"/>
     //<img src={img3} alt="randomImages"/>
     //<a href={links} target="_hjhgjgb">
     //<img src={img4} alt="randomImages"/>
     //</a>
    // </div>
  //</>,

//document.getElementById("root")


import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

let curDate = new Date(2020, 6, 20, 21);
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (curDate >= 12 && curDate <19) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else{
  greeting = "Good Night";
  cssStyle.color = "blue";
}

ReactDOM.render(
  <>
    <div>
      <h1> 
      Hello Sir,<span style={cssStyle}>{greeting} </span>
      </h1>
  </div>
  </>,
  document.getElementById("root")
);

