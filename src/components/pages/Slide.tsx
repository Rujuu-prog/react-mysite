import React from "react";
import styled from "styled-components";
import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { DefaultLayout } from "../templates/DefaultLayout";
import me from '../atoms/img/me.svg'


export const Slide:React.FC = () => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };
    return(
        <SMainContainer>
            <SSliderWrapper>
                <Slider {...settings}>
                    <div>
                        <SImg src="https://1.bp.blogspot.com/-GEnWwyW-OAs/X9lJOyNrf4I/AAAAAAABc2g/yFZGQX39X1wSduGve_Ak3L18rupc2hNiwCNcBGAsYHQ/s180-c/building_onigiri_shop.png" />
                    </div>
                    <div>
                        <SImg src="https://1.bp.blogspot.com/-qhYAfhwkjSo/X7zMZxJhrUI/AAAAAAABca0/X7Cu6-X8DxUFyTO1hS1GhGk-KOi4cknDACNcBGAsYHQ/s180-c/food_spaghetti_vongole_bianco.png" />
                    </div>
                    <div>
                        <SImg src="https://1.bp.blogspot.com/-aW3wZ3nTUZY/X91l1Dyiq7I/AAAAAAABdAU/XvrgODFX810dqJlH-cCgKQmcSLTN_TXVwCNcBGAsYHQ/s180-c/thumbnail_food_pizza_cut.jpg." />
                    </div>
                    <div>
                        <SImg src="https://1.bp.blogspot.com/-iaFxn1y524Y/X7zMYU0QlTI/AAAAAAABcao/892PjRV4g4IQya9-uokhRL6wJ26KPKpRQCNcBGAsYHQ/s180-c/food_curry_sagu.png" />
                    </div>
                    <div>
                        <SImg src="https://1.bp.blogspot.com/-M28GZaegp38/X68afYkxWXI/AAAAAAABcQw/tSAxXfPaPp8GtBwzh9eieDieqWXxS47IgCNcBGAsYHQ/s180-c/food_thai_somtom_salad.png" />
                    </div>
                    <div>
                        <SImg src="https://1.bp.blogspot.com/-b5NJr3pGOUQ/X1CLEompXGI/AAAAAAABa0s/kG7wKCIsaok3ECvNcIwKZE8T-jk8rTevgCNcBGAsYHQ/s400/niku_manga.png" />
                    </div>
                </Slider>
            </SSliderWrapper>
        </SMainContainer>
        
    );
};

const SMainContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #f5f5f5;
    height: 85vh;
    // h1 {
    //     color: #282828;
    // }
    padding: 30px;
    .slick-track {
        display: flex;
        align-items: center;
    }
`;

const SImg = styled.img`
    display: inline !important;
`;

const SSliderWrapper = styled.div`
    width: 60%;
    margin: 0;
    .slick-prev:before,
    .slick-next:before {
        color: #282828;
    }
`;