import * as React from 'react';
import { BrowserRouter, Router as GenericRouter } from 'react-router-dom';

import { ScrollToTop } from '~/utils/routing';

import { RouteListener } from './components/route-listener';
import DebugInfo from './components/debug-info';
import RootRoute from './routes/root';

import Test from "./components/test";
import Lauren from "./components/lauren";

interface IProps {
  initialState: any;
  entryComponent?: React.ComponentType;
  history: any;
}

export default function Application({ initialState, history, entryComponent }: IProps) {
  const Router = history ? GenericRouter : BrowserRouter;
  const Component = entryComponent ? entryComponent : RootRoute;
  const routerProps = {};

  if (history) {
    routerProps.history = history;
  }

  return (
    <Router {...routerProps}>
      <>
        <RouteListener />
        <ScrollToTop>
          <Component />
          <Test/>
          <Lauren/>
        </ScrollToTop>
        <DebugInfo />
      </>
    </Router>
  );
}
