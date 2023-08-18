import Card from "components/Card";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { API, API_Bearer } from "secret";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from '../../Styles/categoryPage.module.css'

function CategoriesMovies() {

    const [categoryMovies, setCategoryMovies] = useState([]);
    const router = useRouter();
    const { query: { categoryId } } = router;

    // para obtener el nombre de la categoria 
    const [id, categoryName] = categoryId?.split('-')

    // infinite scroll 
    const [page, setPage] = useState(1)

    useEffect(() => {
        const url =
            page === 1
                ? `${API}/discover/movie?&with_genres=${id}`
                : `${API}/discover/movie?page=${page}&with_genres=${id}`
        // console.log(url);
        fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: API_Bearer,
            }
        })
            .then(resp => resp.json())
            .then(({ data, results }) => {
                setCategoryMovies(prevState => [...prevState, ...results])
            })
            .catch(error => console.log(error))
        // console.log(categoryMovies);
    }, [categoryId,page])



    return (

        <section className={styles.section}  >
            <h1 className={styles.titleCategory} >
                {categoryName} Movies
            </h1>
            <InfiniteScroll
                dataLength={categoryMovies.length}
                next={() => setPage(prevState => prevState + 1) }
                hasMore={true}
                
                // cambiar por un componente loading 
                loader={<h2>loading.....</h2>}
            >
                <article className={styles.article}>

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
            </InfiniteScroll>

        </section>
    )
}

export default CategoriesMovies;