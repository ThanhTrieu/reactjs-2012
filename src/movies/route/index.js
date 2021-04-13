import React, { lazy, Suspense} from 'react';
import { Skeleton } from 'antd'; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const SearchPage = lazy(() => import('../pages/search/index'));
const PopularPage = lazy(() => import('../pages/popular/index'));
const UpcomingPage = lazy(() => import('../pages/upcoming/index'));
const LoginPage = lazy(() => import('../pages/login/index'));

const RouteMovie = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <Route path="/" exact>
            <LoginPage/>
          </Route>
          <Route path="/popular-movie">
            <PopularPage/>
          </Route>
          <Route path="/upcoming-movie">
            <UpcomingPage/>
          </Route>
          <Route path="/search-movie">
            <SearchPage/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}
export default React.memo(RouteMovie);