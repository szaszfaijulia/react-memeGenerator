import React from 'react'

export default function Header(){
  return(
    <header className="header">
      <img src="https://raw.githubusercontent.com/szaszfaijulia/react-memeGenerator/master/src/trollface.png" className="header--image"/>
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  )
}