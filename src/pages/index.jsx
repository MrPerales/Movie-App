import Card from "components/Card";
import CategoryList from "components/CategoryList";
import TopMovies from "components/TopMovies";
import Link from "next/link";
import React, { useState } from "react";
import { API, API_Bearer, API_KEY } from "secret";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonCard from "components/SkeletonLoadings/skeletonCard";
import styles from '../Styles/index.module.css'
import SkeletonTopMovies from "components/SkeletonLoadings/skeletonTopMovies";

const API_TRENDING = `${API}/trending/movie/day`
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: API_Bearer
    }

}

function HomePage() {

    const [data, setData] = React.useState([])
    const [page, setPage] = useState(1);


    React.useEffect(() => {

        fetch(`${API_TRENDING}?page=${page}`, options)
            .then(resp => resp.json())
            .then(({ _, results }) =>
                setData(prevState => [...prevState,...results])
            )
            .catch(error => console.log(error))
    }, [page])
    // console.log(data);


    return (
        <>
            {/* <SkeletonTopMovies/> */}


            <TopMovies/>


            <section className={styles.section}>
                <CategoryList />
            </section>

            <h2 className={styles.titleTrending} >
                Trending Movies
            </h2>
            {/* <CardSkeleton/> */}

            <InfiniteScroll
                dataLength={data.length}
                next={() => setPage(prevState => prevState + 1)}
                hasMore={true}

                // cambiar por un componente loading 
                loader={<SkeletonCard></SkeletonCard>}
            >
                <section className={styles.trendingPreviewMovieList}>
                    {data.map(movie =>
                        <Link key={movie.id} href={`/details/${movie.id}?${movie.title}`}>
                            <Card
                                poster={movie.poster_path}
                                titleSection={'Trending Movies'}
                                title={movie.title}
                            ></Card>
                        </Link>
                    )}
                </section>
            </InfiniteScroll>

        </>
    )
}
export default HomePage