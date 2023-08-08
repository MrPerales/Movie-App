import Card from "components/Card";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { API, API_Bearer } from "secret";




function CategoriesMovies() {

    const [categoryMovies, setCategoryMovies] = useState([]);
    const router = useRouter();
    const { query: { categoryId } } = router;

    // para obtener el nombre de la categoria 
    const [id, categoryName] = categoryId?.split('-')

    
    useEffect(() => {
        if (categoryId) {
            fetch(`${API}/discover/movie?with_genres=${id}`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: API_Bearer,
                },
                // params: {
                //     // with_genres:categoryId
                // }
            })
                .then(resp => resp.json())
                .then(({ data, results }) => setCategoryMovies(results))
                .catch(error => console.log(error))
        }
    }, [categoryId])
    return (
        <section style={{ 'margin-top': '60px' }}>
            <h1 style={{
                fontSize: '30px',
                color: '#fff',
                'padding': '20px'

            }}>
                {categoryName} Movies
            </h1>
            <article style={{
                display: "grid",
                'grid-template-columns': 'repeat(auto-fill, minmax(200px,1fr))',
                gap: '10px 0',
                padding: '20px'
            }}>

                {categoryMovies?.map(movie =>
                    <div>
                        <Link key={movie.id} href={`/details/${movie.id}?${movie.title}`}>
                            <Card
                                poster={movie.poster_path}
                                titleSection={'Trending Movies'}
                                title={movie.title}
                            ></Card>
                        </Link>

                    </div>

                )}
            </article>

        </section>
    )
}

export default CategoriesMovies;