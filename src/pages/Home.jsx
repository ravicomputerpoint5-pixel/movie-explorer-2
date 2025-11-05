import { useEffect, useState } from 'react'
import MovieList from '../components/MovieList'

export default function Home(){

    const [movies, setMovies] = useState([])
    const [name, setName] = useState('')

    async function getMovies(query){
        const res = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=5df9cf9a`)
        const data = await res.json()
        setMovies(data.Search)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if(name) getMovies(name)
    }

    useEffect(() => {
        getMovies("Avengers")
    },[])

    return(
        <>
            <form onSubmit={handleSearch}>
                <div className="row my-3">
                    <div className="col-10">
                        <input type="text" className="form-control" placeholder='Enter movie name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col">
                        <button className="btn btn-success">Save</button>
                    </div>
                </div>
            </form>
            <hr />
            <MovieList movies={movies} />
        </>
    )
}