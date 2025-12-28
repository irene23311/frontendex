import MovieCard from "../components/MovieCard";
function Home() {
    const movies = [
        { id: 1, title: "movie1", release_date: "2024" },
        { id: 2, title: "movie2", release_date: "2025" },
        { id: 3, title: "movie3", release_date: "2026" }
    ];
    return (

        <div className="home"> <div className="movie-grid">{movies.map((movie) => (<MovieCard movie={movie} key={movie.id} />))}</div></div>
    );
}
export default Home;