import React, { useRef, useState } from 'react'
import './PeliculaPage.css'

function PeliculaPage() {
  return (
    <section className='container_pelicula'>
      <h2>Peliculas</h2>
      <aside className='generes_container'>
        <button className='transition_btn'>{'<'}</button>
        <FilterButton text='Aventura' />
        <FilterButton text='Accion' />
        <FilterButton text='Animacion' />
        <FilterButton text='Biografia' />
        <FilterButton text='Crimen' />
        <FilterButton text='Comedia' />
        <FilterButton text='Drama' />
        <FilterButton text='Documental' />
        <button className='transition_btn'>{'>'}</button>
      </aside>
      <div className='container-card_pelicula'>
        <CardPelicula />
        <CardPelicula />
        <CardPelicula />
        <CardPelicula />
        <CardPelicula />
        <CardPelicula />
        <CardPelicula />
        <CardPelicula />
        <CardPelicula />
        <CardPelicula />
        <CardPelicula />
        <CardPelicula />

        <CardPelicula />
        <CardPelicula />
        <CardPelicula />
        <CardPelicula />
        <CardPelicula />
        <CardPelicula />

      </div>
      <button className='viewMore-button'>+ Ver mas</button>
    </section>
  )
}

function CardPelicula() {
  const handdleClick =()=>{
    window.location.replace("http://localhost:5173/Pelicula/1");
  }
  return (
    <section onClick={handdleClick} className='pelicula_card'>
      <header className='image-pelicula_card'></header>
      <footer>
        <span className='title-pelicula_card'>Batman el senior de la noche</span>
        <div className='info-pelicula_card'>
          <span>2010</span>
          <div>
            <span>{'<3'}</span>
            <span>visto</span>
            <span>8.1</span>
          </div>
        </div>
      </footer>
    </section>
  )

}

function FilterButton({ text }) {
  const [filterValue, setFilterValue] = useState(true)
  const curretButtonFilter = useRef()

  const handdleClick = (e) => {
    const btn = curretButtonFilter.current
    filterValue ? btn.classList.add('active') : btn.classList.remove('active')
    setFilterValue(!filterValue)
  }
  return (
    <button ref={curretButtonFilter} onClick={handdleClick} className='container_FilterBtn'>{text}</button>
  )
}

export default PeliculaPage