import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { API, API_Bearer } from "secret";
import Link from "next/link";
import Card from "components/Card";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: API_Bearer
    }

}

function MoviesBySearch() {

    const [searchListMovies, setSearchListMovies] = useState([])
    const router = useRouter();
    const { query: { query } } = router;
    console.log(query);

    useEffect(() => {
        if (query) {

            fetch(`${API}/search/multi?query=${query}`, options)
                .then(resp => resp.json())
                .then(({ data, results }) => setSearchListMovies(results))
                .catch(error => console.log(error))
        }
    }, [query]);
    console.log(searchListMovies);

    return (
        <section 
            style={{
                display:'grid',
                margin:'80px 40px',
            }}
        >
            <h1 style={{fontSize:'20px',color:'#fff',marginBottom:'15px'}}> Search "{query}" </h1>

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



        </section>
    )
}
export default MoviesBySearch;