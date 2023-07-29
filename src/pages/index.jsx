import React from "react";
import { API, API_Bearer, API_KEY } from "secret";

const API_TRENDING=`${API}/trending/movie/day`
const options={
    method:'GET',
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
            .then(data => setData(data))
            .catch(error => console.log(error))
    }, [])
    console.log(data);

    return (
        <>
            <h1 className="text-orange-700 text-5xl">
                Hello world!
            </h1>
        </>
    )
}
export default HomePage