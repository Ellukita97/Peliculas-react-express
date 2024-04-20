import React, { useState } from 'react'
import './SignUp_btn.css'
import LoginRegistrer from '../popups/LoginRegistrer'

function SignUp_btn() {
  const [active, setAvtive] = useState(false)

  const activeFunc = () => {
    setAvtive(!active)
  }

  return (
    <>
      <button onClick={activeFunc} className='signUp_button'>Iniciar Seccion</button>
      <LoginRegistrer isvisible={active} />
    </>

  )
}

export default SignUp_btn