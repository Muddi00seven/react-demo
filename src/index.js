import React from "react";
import ReactDOM from "react-dom";
import MediaCard from './MediaCard';
import Gate from './Gate';



ReactDOM.render(
  <div>
 <MediaCard
    title="Hello React App"
  
    para="If you want to start measuring performance in your app, pass a function"
    image="https://imgk.timesnownews.com/story/Dreaming_about_a_horse.jpg?tr=w-600,h-450"
  />
  <Gate active={false}
    cardNumer={1}/>
  </div>
 ,
  document.getElementById("main")
);

// If you want to start measuring performance in your app, pass a functi
