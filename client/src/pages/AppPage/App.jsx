import ColorGeneres_btn from '../../components/buttons/Color-generes_btn'
import BtnCircle from '../../components/buttons/BtnCircle'
import './App.css'

function App() {
  return (
    <section className='background-container_home'>
      <div className='container_home'>
        <div className='info-container_home'>
          <header className='generes-container_home'>
            <ColorGeneres_btn title='Accion' nameColor='yellow' />
            <ColorGeneres_btn title='Terror' nameColor='blue' />
          </header>
          <article className='Movie-info_home'>
            <h2>Batman</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati quis, magni similique, voluptate vitae maxime
              quas unde totam porro nisi asperiores ipsam maiores at perferendis,
              distinctio deleniti ipsum ut. Molestiae!
            </p>
          </article>
          <footer className='button-container_home'>
            <BtnCircle colorBtn='red' title='Ver trailer' />
            <BtnCircle colorBtn='black' title='Aniadir a carrito' />
          </footer>
        </div>
        <img className='img-portada_home' src="https://es.web.img2.acsta.net/medias/nmedia/18/66/74/01/20350623.jpg" alt="" loading='lazy' />

      </div>
      <h2 className='titleNewMovies'>Nuevas peliculas</h2>
      <div className='container-img-banner_home'>
        <img className='img-banner_home' src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png" alt="" />
        <img className='img-banner_home' src="https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg" alt="" />
        <img className='img-banner_home' src="https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/05/poster-for-movie.png" alt="" />
        <img className='img-banner_home' src="https://img.buzzfeed.com/buzzfeed-static/static/2022-04/4/20/asset/0f12255e2129/sub-buzz-817-1649105149-10.jpg" alt="" />
        <img className='img-banner_home' src="https://images.jdmagicbox.com/comp/jd_social/news/2018jul06/image-1904-7c6ece.jpg" alt="" />
      </div>
    </section>
  )
}

export default App
