import { Link } from "react-router-dom";

export default function MovieCard({movie}){
    return(
        <>
            <div className="card">
                <div className="card-header">
                    <h3>{movie.Title}</h3>
                </div>
                <div className="card-body">
                    <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
                </div>
                <div className="card-footer">
                    <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </>
    )
}