import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './MoviePage.css'
import ColorGeneres_btn from '../../components/buttons/Color-generes_btn';

function MoviePage() {
    const params = useParams();
    const image = 'https://es.web.img2.acsta.net/medias/nmedia/18/66/74/01/20350623.jpg'
    const description = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Obcaecati quis, magni similique, voluptate vitae maxime
                         quas unde totam porro nisi asperiores ipsam maiores at perferendis,
                         distinctio deleniti ipsum ut. Molestiae!`
    const [youtubeID] = useState('EXeTwQWrcwY')

    useEffect(() => {
        console.log(params); // "hotspur"
    }, [])

    return (
        <section className='container_page-movie'>
            <div className='container_movie'>
                <div className='div1_movie'>
                    <div>
                        <img className='img-portada_home' src={image} alt="" loading='lazy' />
                        <div className='Generes_movie'>
                            <ColorGeneres_btn title='Accion' nameColor='yellow' />
                            <ColorGeneres_btn title='Terror' nameColor='blue' />
                        </div>
                    </div>
                    <article className='Movie-info_home-moviePage'>
                        <h2>Batman</h2>
                        <p>{description}</p>
                        <p>{description}</p>
                        <p>{description}</p>
                    </article>
                </div>
                <div className='div2_movie'>
                    <CardMovieDescription img={image} title='Batman' description={description} />
                    <CardMovieDescription img={image} title='Batman' description={description} />
                    <CardMovieDescription img={image} title='Batman' description={description} />
                    <CardMovieDescription img={image} title='Batman' description={description} />
                </div>
            </div>
            <iframe className='video'
                title='Youtube player'
                allowfullscreen="allowfullscreen"
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
            </iframe>
        </section>
    )
}

export default MoviePage

function CardMovieDescription({ img, title, description }) {
    return (
        <div className='container_Description-Card'>
            <div style={{ backgroundImage: `url(${img})` }} className='Image_movie'></div>
            <div className='info_Description-Card'>
                <h4>{title}</h4>
                <p>{description}</p>
                <button>ver mas</button>
            </div>
        </div>
    )
}