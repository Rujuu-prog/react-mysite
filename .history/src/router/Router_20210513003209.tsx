import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Philosophy } from "../components/pages/Philosophy";
import { Top } from "../components/pages/Top";
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
            <Route path="/philosophy">
            <DefaultLayout>
                <Philosophy />
            </DefaultLayout>
            </Route>
        </Switch>
    </BrowserRouter>
    );
}