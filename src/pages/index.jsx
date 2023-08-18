import Card from "components/Card";
import CategoryList from "components/CategoryList";
import TopMovies from "components/TopMovies";
import Link from "next/link";
import React, { useState } from "react";
import { API, API_Bearer, API_KEY } from "secret";
import InfiniteScroll from "react-infinite-scroll-component";
import CardSkeleton from "components/CardSkeleton";


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
            <TopMovies/>


            <section
                className="grid overflow-x-scroll justify-items-stretch
                    overflow-y-hidden whitespace-nowrap overscroll-x-contain snap-x snap-center"
            >
                <CategoryList />
            </section>

            <h2
                style={{
                    fontSize: '20px',
                    color: '#fff',
                    margin: '20px'
                }}
            >
                Trending Movies
            </h2>
            <CardSkeleton/>

            <InfiniteScroll
                dataLength={data.length}
                next={() => setPage(prevState => prevState + 1)}
                hasMore={true}

                // cambiar por un componente loading 
                loader={<h2>loading.....</h2>}
            >
                <section className="trendingPreview-movieList" style={{ marginLeft: '20px' }} >
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