import React from 'react'
import './Color-generes_btn.css'

function ColorGeneres_btn({title,nameColor}) {
  return (
    <button className={nameColor +' '+'buttonColor'}>{title}</button>
  )
}

export default ColorGeneres_btn