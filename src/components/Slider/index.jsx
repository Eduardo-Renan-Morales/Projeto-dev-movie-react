import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "../Card";
import { Container } from "./styles";


function Slider({ info, title }) {
    console.log(info, title)

    return (
        <Container>
            <h2> {title} </h2>
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
                className="swiper">

                {info.map((item, index) => (
                    <SwiperSlide key={index}>

                        <Card item={item} />

                    </SwiperSlide>
                ))}

            </Swiper>
        </Container>
    )
}
Slider.propTypes = {
    info: PropTypes.array,
    title: PropTypes.string
}
export default Slider
