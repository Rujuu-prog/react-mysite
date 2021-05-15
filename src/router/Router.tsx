import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Philosophy } from "../components/pages/Philosophy";
import { SelfIntroduction } from "../components/pages/SelfIntroduction";
import { Top } from "../components/pages/Top";
import { Blog } from "../components/pages/Blog";
import { DefaultLayout } from "../components/templates/DefaultLayout";

export const Router:React.FC = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                <DefaultLayout>
                    <Top />
                </DefaultLayout>
                </Route>
                <Route exact path="/selfintroduction">
                <DefaultLayout>
                    <SelfIntroduction/>
                </DefaultLayout>
                </Route>
                <Route path="/philosophy">
                <DefaultLayout>
                    <Philosophy />
                </DefaultLayout>
                </Route>
                <Route path="/blog">
                <DefaultLayout>
                    <Blog />
                </DefaultLayout>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}