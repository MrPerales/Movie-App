import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { API, API_Bearer } from "secret";
import DetailCard from "components/DetailsCard";
import Card from "components/Card";
import Link from "next/link";
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: API_Bearer
    }

}
const styleSection = {
    width: '1280px',
    display: ' flex',
    'flex-direction': 'column',
    'padding-left': '20px',
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
                .then(error => console.log(error))
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
            <section
                style={{
                    width: '100%',
                    display: 'grid',
                    'place-content': 'center',
                    'margin-top': '15px',
                    // outline: '1px solid blue',

                }}>

                <DetailCard movie={movie} />
            </section>

            <section
                style={{
                    width: '100%',
                    display: 'flex',
                    // outline: '1px solid',
                    justifyContent: 'center',
                    'margin-top': '20px'
                }}
            >
                <article style={styleSection}>
                    <h2 style={{ 'color': '#fff', fontSize: '25px','padding-left':'10px' }}>Related Movies</h2>
                    <div style={{
                        'overflow-x': 'scroll',
                        'overflow-y': 'hidden',
                        'white-space': 'nowrap',
                        'gap': '2.5rem',
                        'overscroll-behavior-x': 'contain',
                        'scroll-snap-type': 'x proximity',
                        // outline: '1px solid red',
                        'padding': '10px'
                    }}>

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