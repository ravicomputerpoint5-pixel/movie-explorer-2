import MovieCard from './MovieCard'

export default function MovieList({movies}){
    return(
        <>
            <div className="row g-3">
                {movies.map((movie)=>(
                    <div className="col-3" key={movie.imdbID}>
                        <MovieCard movie={movie}/>
                    </div>
                ))}
            </div>
        </>
    )
}