import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_Bearer } from "secret";
import styles from '../../Styles/categoryList.module.css'

const UrlList = 'https://api.themoviedb.org/3/genre/movie/list'
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: API_Bearer
    }

}

function CategoryList() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(UrlList, options)
            .then(resp => resp.json())
            .then(data => setCategories(data.genres))
            .catch(error => console.log(error))
    }, [])
    // console.log(categories);

    return (

        <ul className={styles.categoryList} >
            {categories.map(category =>
                <Link key={category.id} href={`/category/${category.id}-${category.name}`}>
                    <li >{category.name}</li>
                </Link>
            )}
        </ul>
    )
}

export default CategoryList;