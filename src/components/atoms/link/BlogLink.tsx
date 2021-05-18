import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import {BlogType} from '../../../types/type';
import { Card } from "../card/Card";

export const BlogBody:React.FC<Omit<BlogType, "id">> = (props) => {
    const {img, text, title} = props;
    return(
        <ul>
            <li></li>
        </ul>
    );
}