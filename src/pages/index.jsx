import Card from "components/Card";
import CategoryList from "components/CategoryList";
import Link from "next/link";
import React from "react";
import { API, API_Bearer, API_KEY } from "secret";

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

    React.useEffect(() => {
        fetch(API_TRENDING, options)
            .then(resp => resp.json())
            .then(({ _, results }) => setData(results))
            .catch(error => console.log(error))
    }, [])
    // console.log(data);

    return (
        <>
            <section
                className="grid overflow-x-scroll justify-items-stretch
                    overflow-y-hidden whitespace-nowrap overscroll-x-contain snap-x snap-center
                "
            >
                <CategoryList />
            </section>
            <h2>Trending Movies</h2>
            <section className="trendingPreview-movieList">
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
        </>
    )
}
export default HomePage