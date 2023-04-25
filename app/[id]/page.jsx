import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

const MovieDetails = async ({ params }) => {
  const { id } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <>
      <Link href={"/"}>
        <h2 className="text-6xl">👈🏻</h2>
      </Link>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h2 className="text-2xl my-2">{res.title}</h2>
          <h2 className="text- my-2">{res.release_date}</h2>
          <h2 className="my-2"> Runtime : {res.runtime} minutes</h2>
          <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md text-sm">
            {res.status}
          </h2>
          <h2 className="my-2">{res.vote_average.toFixed(1)} ⭐️</h2>
        </div>
        <div className="flex-2">
          <Image
            className="w-auto my-12 rounded-lg"
            src={imagePath + res.backdrop_path}
            width={500}
            height={500}
            alt="img"
            priority
          />
        </div>
      </div>
      <p>{res.overview}</p>
    </>
  );
};

export default MovieDetails;
