import React, { useEffect, useRef, useState } from 'react'
import './LoginRegistrer.css'

function LoginRegistrer({ isvisible }) {
    const [visible, setVisible] = useState(isvisible)
    const popup = useRef()

    useEffect(() => {
        const login = popup.current.classList
        visible ? login.add('desactive_popup') : login.remove('desactive_popup')
        setVisible(!visible)
    }, [isvisible])

    const handleClick = () => {
        setVisible(!visible)
        const login = popup.current.classList
        visible ? login.add('desactive_popup') : login.remove('desactive_popup')
    }

    return (
        <div ref={popup} className='container_darkScreem-LoginRegistrer'>
            <div className='container_LoginRegistrer'>
                <div className='div1_LoginRegistrer'>
                    <h3>CINE</h3>
                    <div className='container-subtitle_div1-LoginRegistrer'>
                        <h4>!Bienvenido!</h4>
                        <p>Al cine donde tus emociones cobran vida en la gran pantalla!</p>
                    </div>
                </div>
                <div className='div2_LoginRegistrer'>
                    <button onClick={handleClick} className='exit-btn'>×</button>
                    <div className='content-div2_LoginRegistrer'>
                        <h3>CINE</h3>
                        <div className='container_icons-LoginRegistrer'>
                            <button className='icon_btn'>f</button>
                            <button className='icon_btn'>G</button>
                            <button className='icon_btn'>in</button>
                        </div>
                        <span>o usa una cuenta de email</span>
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Contasenia' />
                        <button className='forgot-pasword'>Olvidaste tu contrasenia?</button>
                        <button className='Btn-Login'>Iniciar secion</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginRegistrer