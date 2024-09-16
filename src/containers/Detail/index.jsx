import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Credits from "../../components/Credits";
import SpanGenres from "../../components/SpanGenres";
import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideos } from "../../services/getDate";
import { getImages } from "../../utils/getImages";
import { Background, Container, ContainerMovies, Cover, Info } from "./styles";

function Detail() {
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState([])
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()

    const newMovieVideos = Object.values(movieVideos)

    // console.log(Array.isArray(movieVideos))
    console.log(movieVideos); // Deve mostrar o array no console

    useEffect(() => {
        async function getAllDate() {

            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id),
            ])
                .then(([movie, videos, credits, similar]) => {
                    console.log({ movie, videos, credits, similar })
                    setMovie(movie),
                        setMovieVideos(videos),
                        setMovieCredits(credits),
                        setMovieSimilar(similar)

                })
                .catch((error) => console.error(error))
        }
        getAllDate()

    }, [])

    return (

        <>
            {movie && (
                <>
                    <Background image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>
                        </Info>
                    </Container>

                    <ContainerMovies>
                        {newMovieVideos && newMovieVideos.slice(0, 4)
                            .map(video => (
                                <div key={video.key}>
                                    <h4>{video.name}</h4>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.key}`}
                                        title="Youtub Video Player"
                                        height="500px"
                                        width="100%"
                                    ></iframe>
                                </div>
                            ))
                        }

                    </ContainerMovies>
                </>
            )}
        </>
    )
}
Detail.propTypes = {
    movieVideos: PropTypes.array

}
export default Detail
