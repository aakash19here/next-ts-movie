import { FC } from "react"
import Link from "next/link"
import Image from "next/image";
interface MovieProps {
    title : string,
    id : number,
    release_date : string,
    poster_path: string,
}

const Movie : FC<MovieProps> = ({title  , id , release_date , poster_path}) => {
    const imagePath : string = "https://image.tmdb.org/t/p/original";
    return(
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <Link href={`/${id}`}>
                <Image src={imagePath + poster_path} width={800} height={800} alt="image"/>
            </Link>
        </div>
    )
}

export default Movie;
