import React from "react";

import { ProductsType } from "../../../types/type";

export const ProductsBody: React.FC<Omit<ProductsType, "id">> = (props) => {
  const { img, text, title } = props;
  return (
    <ul>
      <li></li>
    </ul>
  );
};
