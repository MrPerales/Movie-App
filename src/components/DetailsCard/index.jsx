import Link from "next/link";
import React from "react";
import { PiStarThin } from "react-icons/pi"
import styles from '../../Styles/detailsCard.module.css'

function DetailCard({ movie }) {

    
    // console.log(movie);

    return (
        <article className={styles.article}>

            <figure className={styles.figure}>
                <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt={movie?.title} />
            </figure>

            <div className={styles.infoContainer}>

                <div className={styles.detailTitle}>
                    <h1>{movie?.title}</h1>
                    <span><PiStarThin />{movie?.vote_average}</span>
                </div>
                <div className={styles.descriptionContainer}>
                    <ul className={styles.genreList}>
                        {movie?.genres?.map(category =>
                            <Link key={category.id} href={`/category/${category.id}?${category.name}`}>
                                <li>
                                    {category.name}
                                </li>
                            </Link>
                        )}
                    </ul>

                    <h2 >ABOUT THE MOVIE</h2>
                    <p>{movie?.overview}</p>
                </div>
            </div>

        </article>
    )
}

export default DetailCard;