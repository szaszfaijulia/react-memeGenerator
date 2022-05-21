import React from 'react';
//import memesData from '../memesData.js';

export default function Meme() {
  /**
   * Challenge: 
   * As soon as the Meme component loads the first time,
   * make an API call to "https://api.imgflip.com/get_memes".
   * 
   * When the data comes in, save just the memes array part
   * of that data to the `allMemes` state
   * 
   * Think about if there are any dependencies that, if they
   * changed, you'd want to cause to re-run this function.
   * 
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` blocks to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   * 
   * Challenge: 
    * Try to figure out why our code is broken! 😞
    * 
    * Hint: it has to do with the difference between
    * what we were importing before from memesData.js
    * and what we're setting our state as with `allMemes`
   */
  
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  const [allMemes, setAllMemes] = React.useState([]/*memesData*/)

  React.useEffect(() => {
    //console.log("Effect ran")
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      //.then(data => console.log(data))
      .then(data => setAllMemes(data.data.memes))
  }, [])  //ha változik a szöveg

  /*   // ASYNC
  React.useEffect(async () => {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const data = await res.json()
    setAllMemes(data.data.memes)
  }, [])
  */

//console.log(allMemes)
  
  function getMemeImage() {
    /*const memesArray = allMemes.data.memes*/  // az allMemes már egy array, nem object data properties-ekkel
    /*const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url*/
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
      
  }
  
  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  
  return (
    <main>
      <div className="form">
        <input 
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button 
          className="form--button"
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}