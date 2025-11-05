import MovieCard from './MovieCard'

export default function MovieList({movies}){
    return(
        <>
            <div className="row g-3">
                {movies.map((movie)=>(
                    <div className="col-lg-3 col-md-6 col-sm-12" key={movie.imdbID}>
                        <MovieCard movie={movie}/>
                    </div>
                ))}
            </div>
        </>
    )
}