import React, { FC } from 'react';
import './App.css';
import { HashRouter as Router, Link, Redirect, Route, Switch, } from 'react-router-dom';
import {
    EDIT_PATH,
    PRODUCT_CREATE_PATH,
    PRODUCT_EDIT_PATH,
    PRODUCT_PREVIEW_PATH,
    PRODUCTS_LIST_PATH,
} from '../utils/constants/paths';
import ProductsListScreen from '../Screens/ProductsListScreen';
import ProductPreviewScreen from '../Screens/ProductPreviewScreen/ProductPreviewScreen';
import ProductCreateScreen from '../Screens/ProductCreateScreen';
import ProductEditScreen from '../Screens/ProductEditScreen';

const App: FC = (): JSX.Element => {
    let id = 9;
    return (
        <Router>
            <header className="App-header">
                <Link to={PRODUCTS_LIST_PATH}>ProductsListScreen</Link>
                <Link to={PRODUCT_CREATE_PATH}>ProductCreateScreen</Link>
                <Link to={`${PRODUCTS_LIST_PATH}/${id}`}>ProductPreviewScreen</Link>
                <Link to={`${PRODUCTS_LIST_PATH}/${id}${EDIT_PATH}`}>
                    ProductEditScreen
                </Link>
            </header>
            <Switch>
                <Route path="/" exact={true}>
                    <Redirect to={PRODUCTS_LIST_PATH} />
                </Route>
                <Route
                    path={PRODUCTS_LIST_PATH}
                    exact={true}
                    component={ProductsListScreen}
                />
                <Route
                    path={PRODUCT_CREATE_PATH}
                    exact={true}
                    component={ProductCreateScreen}
                />
                <Route
                    path={PRODUCT_PREVIEW_PATH}
                    exact={true}
                    children={<ProductPreviewScreen />}
                />
                <Route
                    path={PRODUCT_EDIT_PATH}
                    exact={true}
                    component={ProductEditScreen}
                />
            </Switch>
        </Router>
    );
};

export default App;
