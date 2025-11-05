import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function MovieDetail(){
    const {id} = useParams()
    const [movie, setMovie] = useState([])

    async function getDetail(){
        const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=5df9cf9a`)
        const data = await res.json()
        setMovie(data)
    }

    useEffect(() => {
        getDetail()
    },[id])
    return(
        <>
            <h3>{movie.Title}</h3>
            <img src={movie.Poster} alt={movie.Title} />
            <h4>Genre: {movie.Genre}</h4>
            <h4>Relase: {movie.Year}</h4>
            <h5>Plot: {movie.Plot}</h5>
            <Link to="/" className="btn btn-danger">Back</Link>
        </>
    )
}