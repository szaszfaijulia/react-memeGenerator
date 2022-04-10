import React from "react";
import "./style.css";
import Header from './components/Header'
import Meme from './components/Meme'
//import memesData from './memesData.js'

/**
 * Challenge 1: Build the Header component
*/
/**
 * Challenge 2: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
*/

export default function App() {
  /*const meme = memesData.map(memes => {
    return(
      <Meme 
        key={memes.id}
        {...memes}
      />
    )
  })*/
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}
