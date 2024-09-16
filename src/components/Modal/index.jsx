import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { getMovieVideos } from "../../services/getDate";
import { Background, Container } from "./styles";

function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            setMovie(await getMovieVideos(movieId))
        }

        getMovies()

    }, [])


    return (

        <Background onClick={() => setShowModal(false)}>

            {movie && (
                <Container>
                    <button>X</button>
                    <iframe
                        src={`https://www.youtube.com/embed/${movie.key}`}
                        title="Youtub Video Player"
                        height="500px"
                        width="100%">
                    </iframe>
                </Container>
            )}
        </Background>
    )
}
Modal.propTypes = {
    movieID: PropTypes.number,
    setShowModal: PropTypes.string

}
export default Modal
