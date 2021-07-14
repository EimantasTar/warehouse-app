import React, { FC } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import {
  PRODUCT_CREATE_PATH,
  PRODUCT_EDIT_PATH,
  PRODUCT_PREVIEW_PATH,
  PRODUCTS_LIST_PATH,
} from "../utils/constants/paths";
import {
  ProductCreatePage,
  ProductEditPage,
  ProductPreviewPage,
  ProductsListPage,
} from "../components/pages";
import { Header } from "../components/organisms";
import { HeaderLayout } from "../components/layouts";

const App: FC = (): JSX.Element => {
  return (
    <Router>
      {/* <header className="App-header"> */}
      {/*  <Link to={PRODUCTS_LIST_PATH}>ProductsListScreen</Link> */}
      {/*  <Link to={PRODUCT_CREATE_PATH}>ProductCreateScreen</Link> */}
      {/*  <Link to={`${PRODUCTS_LIST_PATH}/${id}`}>ProductPreviewScreen</Link> */}
      {/*  <Link to={`${PRODUCTS_LIST_PATH}/${id}${EDIT_PATH}`}> */}
      {/*    ProductEditScreen */}
      {/*  </Link> */}
      {/* </header> */}
      <HeaderLayout>
        <Header />
      </HeaderLayout>
      <Switch>
        <Route path="/" exact>
          <Redirect to={PRODUCTS_LIST_PATH} />
        </Route>
        <Route path={PRODUCTS_LIST_PATH} exact component={ProductsListPage} />
        <Route path={PRODUCT_CREATE_PATH} exact component={ProductCreatePage} />
        <Route path={PRODUCT_PREVIEW_PATH} exact>
          <ProductPreviewPage />
        </Route>
        <Route path={PRODUCT_EDIT_PATH} exact component={ProductEditPage} />
      </Switch>
    </Router>
  );
};

export default App;
