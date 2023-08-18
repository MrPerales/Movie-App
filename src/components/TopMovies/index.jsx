import Link from "next/link";
import { useEffect, useState } from "react";
import { PiStarThin } from "react-icons/pi"
import { API, API_Bearer, API_KEY } from "secret";
import styles from '../../Styles/topMovies.module.css'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const API_TRENDING = `${API}/trending/movie/day`
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: API_Bearer
    }

}

function TopMovies() {
    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        fetch(API_TRENDING,options)
            .then(resp=> resp.json())
            .then(({data,results})=>setMovies(results))
            .catch(error=>console.log(error))
    },[])


    const topMovies = movies.filter(movie => movie.vote_average >= 8);
    // console.log(topMovies);
    const urlImages = 'https://image.tmdb.org/t/p/original'

    // slice
    let isResponsive;
    if (typeof window !== 'undefined') {

        // let mql = window.matchMedia("(max-width: 600px)");
        isResponsive = window.screen.availWidth >= 700 ? "2" : "1";

        // console.log(window.screen.availWidth);
    }

    return (
        <section className={styles.section}>


            <swiper-container

                slides-per-view={isResponsive}
                // grid-rows="10"
                // speed="500" 
                loop="true"
                css-mode="true"
                navigation="true"
                pagination="true"
                // scrollbar="true"
            >

                {topMovies?.map((movie) =>


                    <swiper-slide key={movie.id}>

                        <div >

                            <div className={styles.topMovieContainer}>

                                <img
                                    src={`${urlImages}${movie.backdrop_path}`}
                                    alt={movie.title}

                                    // style={{ borderRadius: '10px', }}
                                />
                                <div className={styles.title}>
                                    <h1>{movie.title}</h1>

                                    <span><PiStarThin />{movie?.vote_average}</span>
                                </div>


                                <Link href={`/details/${movie.id}?${movie.title}`}>
                                    <button className={styles.learnMoreButton}>
                                        Learn more
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </swiper-slide>



                )}
            </swiper-container>

        </section >
    )
}
export default TopMovies;