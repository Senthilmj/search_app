import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'
export default function SimpleSlider(props) {
    var settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: props.className
    };
    const images = props.images || []
    return (
        <Slider {...settings}>
            {images.map((img, index) => {
                return <img src={img} key={index} alt="" />
            })}


        </Slider>
    );
}