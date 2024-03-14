import React from 'react'
import './BtnCircle.css'

function BtnCircle({title,colorBtn}) {
  return (
   <button className={colorBtn+' '+'red_button'}>{title}</button>
  )
}

export default BtnCircle