import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { API, API_Bearer } from "secret";
import DetailCard from "components/DetailsCard";
import Card from "components/Card";
import Link from "next/link";
import styles from '../../Styles/detailsPage.module.css'
import SkeletonDetailCard from "components/SkeletonLoadings/skeletonDetailsCard";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: API_Bearer
    }

}

function MovieDetail() {

    const [movie, setMovie] = useState();
    const [relatedMovies, setRelatedMovies] = useState();
    const router = useRouter();
    const { query: { id } } = router;
    // console.log(router);
    // console.log(id);

    //details movie 
    useEffect(() => {
        if (id) {
            fetch(`${API}/movie/${id}`, options)
                .then(resp => resp.json())
                .then(data => setMovie(data))
                .catch(error => console.log(error))
        }
    }, [id])

    //Related movies
    useEffect(() => {
        if (id) {
            fetch(`${API}/movie/${id}/similar`, options)
                .then(resp => resp.json())
                .then(({ data, results }) => setRelatedMovies(results))
                .catch(error => console.log(error))
        }
    }, [id])
    console.log(relatedMovies);

    // console.log(movie);
    return (
        <>

            {/* <section className={styles.sectionDetailCard}>
                <SkeletonDetailCard/>
            </section> */}

            <section className={styles.sectionDetailCard}>

                <DetailCard movie={movie} />
            </section>

            <section className={styles.sectionRelatedMoviesContainer}   >
                <article className={styles.articleRelatedMovies}>
                    <h2>Related Movies</h2>
                    <div className={styles.relatedCard}>

                        {relatedMovies?.map(movie =>
                            <Link key={movie.id} href={`/details/${movie.id}?${movie.title}`}>
                                <Card
                                    poster={movie.poster_path}
                                    titleSection={'Trending Movies'}
                                    title={movie.title}
                                ></Card>
                            </Link>
                        )}
                    </div>
                </article>

            </section>

        </>

    )
}

export default MovieDetail;