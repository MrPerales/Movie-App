import React from "react";
import styles from '../../Styles/Card.module.css'
function Card({ poster, title }) {
    const urlImages = 'https://image.tmdb.org/t/p/w300'

    // console.log(data);
    return (
        <>

            <div className={styles.movieContainer} >
                <img
                    src={`${urlImages}/${poster}`}
                    alt={title}
                    className={styles.movieImg}
                />
            </div>


        </>
    )
}
export default Card