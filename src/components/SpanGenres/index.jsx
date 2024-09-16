import PropTypes from "prop-types";
import { Container } from "../../components/SpanGenres/styles";


function SpanGenres({ genres }) {

    return (
        <Container>
            {genres && genres.map(genres => (
                <span key={genres.id}> {genres.name} </span>
            ))}

        </Container>
    )
}
SpanGenres.propTypes = {
    genres: PropTypes.array

}
export default SpanGenres
