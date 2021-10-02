import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import { ProductType } from "../../../types/type";
import { Card } from "../card/Card";

export const ProductBody: React.FC<Omit<ProductType, "id">> = (props) => {
  const { img, text, title } = props;
  return (
    <ul>
      <li></li>
    </ul>
  );
};
