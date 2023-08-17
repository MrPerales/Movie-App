import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { API, API_Bearer } from "secret";
import Link from "next/link";
import Card from "components/Card";
import InfiniteScroll from "react-infinite-scroll-component";


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: API_Bearer
    }

}

function MoviesBySearch() {

    const [searchListMovies, setSearchListMovies] = useState([])
    const [page, setPage] = useState(2)
    const router = useRouter();
    const { query: { query } } = router;
    // console.log(query);

    useEffect(() => {
        if (query) {
            console.log('principal');
            fetch(`${API}/search/multi?query=${query}`, options)
                .then(resp => resp.json())
                .then(({ data, results }) => {
                    // setSearchListMovies(results);
                    setSearchListMovies(results)
                })
                .catch(error => console.log(error))
        }
    }, [query]);
    // una forma de solucionar la limpieza del DOM cuando buscas otra pelicula 
    // revisar si hay otras opciones 
    if (page) {
        useEffect(() => {
            console.log('pagination');
            fetch(`${API}/search/multi?query=${query}&page=${page}`, options)
                .then(resp => resp.json())
                .then(({ data, results }) => {
                    // setSearchListMovies(results);
                    setSearchListMovies(prevState => [...prevState, ...results])
                })
                .catch(error => console.log(error))
        }, [page])

    }

    // console.log(searchListMovies);

    return (
        <section
            style={{
                display: 'grid',
                margin: '80px 40px',
            }}
        >
            <h1 style={{ fontSize: '20px', color: '#fff', marginBottom: '15px' }}> Search "{query}" </h1>
            <InfiniteScroll
                dataLength={searchListMovies.length}
                next={() => setPage(prevState => prevState + 1)}
                hasMore={true}

                // cambiar por un componente loading 
                loader={<h2>loading.....</h2>}
            >

                <article >
                    {searchListMovies?.map(movie =>
                        <Link key={movie.id} href={`/details/${movie.id}?${movie.title}`}>
                            <Card
                                poster={movie.poster_path}
                                titleSection={'Trending Movies'}
                                title={movie.title}
                            ></Card>
                        </Link>
                    )}
                </article>
            </InfiniteScroll>



        </section>
    )
}
export default MoviesBySearch;