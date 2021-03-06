import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Philosophy } from "../components/pages/Philosophy";
import { SelfIntroduction } from "../components/pages/SelfIntroduction";
import { Top } from "../components/pages/Top";
import { Products } from "../components/pages/Products";
import { Product } from "../components/pages/Product";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { Page404 } from "../components/pages/Page404";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route exact path="/selfintroduction">
          <DefaultLayout>
            <SelfIntroduction />
          </DefaultLayout>
        </Route>
        <Route path="/philosophy">
          <DefaultLayout>
            <Philosophy />
          </DefaultLayout>
        </Route>
        <Route path="/products">
          <DefaultLayout>
            <Products />
          </DefaultLayout>
        </Route>
        <Route path="/product/:id">
          <DefaultLayout>
            <Product />
          </DefaultLayout>
        </Route>
        <Route path="*">
          <DefaultLayout>
            <Page404 />
          </DefaultLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
