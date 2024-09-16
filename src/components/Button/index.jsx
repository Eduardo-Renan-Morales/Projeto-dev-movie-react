import PropTypes from "prop-types";
import { ButtonRed, ButtonWhite } from "./styles";


function Card({ children, red, ...props }) {
    return (
        <>
            {red ? (<ButtonRed {...props} > {children}</ButtonRed>) :
                (<ButtonWhite {...props}> {children}</ButtonWhite>)}
        </>
    )
}
Card.propTypes = {
    children: PropTypes.string,
    red: PropTypes.object
}
export default Card
