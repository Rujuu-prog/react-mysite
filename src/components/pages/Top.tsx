import React, { useState } from "react";
import styled from "styled-components";
import {useSpring, animated, useTransition} from 'react-spring';
import { easeLinear, easeQuadInOut, easeCubicOut } from "d3-ease";
import { DefaultLayout } from "../templates/DefaultLayout";

import me from '../atoms/img/me.svg'

// type fade: {opacity: any;};

export const Top:React.FC = () => {
    const [toggle, setToggle] = useState(true);

    const transitions = useTransition(toggle, {
            loop: false,
            from: { position: 'absolute', opacity: 0},
            // to: { opacity: 0},
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            expires: true,
            // reverse: toggle,
            delay: 800,
            config: { friction: 200, duration: 1000, easing: easeLinear },
            onRest: () => setToggle(!toggle),
        });
    const styles = useSpring({
            loop: false,
            from: { opacity: 0},
            to: { opacity: 1, color: 'black'},
            delay: 800,
            config: { friction: 200, duration: 1000, easing: easeLinear }
        });
    const fadeIn = useSpring({
            loop: false,
            from: { opacity: 0, x: 700},
            to: { opacity: 1, x: 0},
            delay: 800,
            config: { friction: 200, duration: 1000, easing: easeCubicOut }
        })
    return(
        <SMainContainer>
            <SContents>
                {transitions(({opacity}, item) => 
                    item ? (
                        <animated.div style={{
                            position: 'absolute',
                            opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
                        }} >
                            <h1>welcome</h1>
                        </animated.div>
                    ) : (
                        <animated.div style={{
                            position: 'absolute',
                            opacity: opacity.to({ range: [1.0, 0.0], output: [0, 1] }),
                        }} >
                            <h1>Rujuu's</h1>
                            <h2>ポートフォリオ</h2>
                        </animated.div> 
                    )
                )}
                {/* <animated.div style={fadeOut} >
                    <h1>welcom</h1>
                </animated.div>
                <animated.div style={styles} >
                    <h1>Rujuu's</h1>
                    <h2>ポートフォリオ</h2>
                </animated.div> */}
                
            </SContents>
            <SImgContainer>
                <animated.div style={fadeIn} >
                    <img src={me} alt='me'/>
                </animated.div>
            </SImgContainer>
        </SMainContainer>
    );
};

const SMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-grow: 1;
    background-color: #f5f5f5;
`;

const SContents = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 50px;
        font-weight: 600;
        margin: 0 0 10px 0;
    }
    h2 {
        color: #282828;
        font-size: 30px;
        font-weight: 500;
        margin: 0;
    }
`;

const SImgContainer = styled.div`
    width: 50%;
    img {
        height: 90vh;
        width: 100%;
        object-fit:cover;
    }
`;






