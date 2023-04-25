import Movie from "./Movie";
export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json();
  return (
    <>
      <div className="text-center font-light text-white text-6xl mb-10">
        Movie App 🚀
      </div>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie : any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
          />
        ))}
      </div>
    </>
  )
}
