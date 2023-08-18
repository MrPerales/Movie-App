import React from "react";
import styles from '../../../Styles/skeleton.module.css'

function SkeletonDetailCard() {
    return (

        <article className={styles.skeletonArticleDetailCard}>
            <figure className={styles.skeletonFigure}>
            </figure>

            <div className={styles.skeletonInfoContainer}>

                <div className={styles.skeletonDetailTitle}>
                   <h1></h1>
                    <p></p>
                    

                </div>
                <div className={styles.skeletonDescriptionContainer}>
                    <ul className={styles.skeletonGenreList}>
                        <li></li>
                        <li></li>
                        <li></li>

                    </ul>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p>
                        _________________________________________________________________
                        _________________________________________________________________
                        _________________________________________________________________
                    </p>
                </div>
            </div>

        </article>
    )
}

export default SkeletonDetailCard;