import PropTypes from "prop-types";
import { Container, Title } from "../../components/Credits/styles";
import { getImages } from "../../utils/getImages";

function Credits({ credits }) {

    return (
        <>
            <Title> Créditos </Title>

            {credits && (
                <Container >
                    {credits.slice(0, 5).map(artist => (

                        <div key={artist.id}>
                            <img src={getImages(artist.profile_path)} />
                            <p>{artist.original_name}</p>
                        </div>
                    ))}
                    <div></div>
                </Container>
            )}

        </>
    )
}
Credits.propTypes = {
    credits: PropTypes.array

}
export default Credits
