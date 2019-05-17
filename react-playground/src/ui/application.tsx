import * as React from 'react';
import { BrowserRouter, Router as GenericRouter } from 'react-router-dom';

import { ScrollToTop } from '~/utils/routing';

import { RouteListener } from './components/route-listener';
import DebugInfo from './components/debug-info';
import RootRoute from './routes/root';

import Jpope from './components/jpope';
import Josh from './components/josh';
import Test from './components/test';
import Button from './components/Button';

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
          <Test />
          <Josh />
          <Jpope name='Jeff' />
          <div>
            <h4>Default Buttons</h4>
            <Button>Default</Button>
            <Button variant='primary'>Default Primary</Button>
            <Button variant='secondary'>Default Secondary</Button>
            <Button variant='success'>Default Success</Button>
            <Button variant='warning'>Default Warning</Button>
            <Button variant='danger'>Default Danger</Button>
          </div>
          <div>
            <h4>Link Buttons</h4>
            <Button btnStyle='link' variant='primary'>
              Link Primary
            </Button>
            <Button btnStyle='link' variant='secondary'>
              Link Secondary
            </Button>
            <Button btnStyle='link' variant='success'>
              Link Success
            </Button>
            <Button btnStyle='link' variant='warning'>
              Link Warning
            </Button>
            <Button btnStyle='link' variant='danger'>
              Link Danger
            </Button>
          </div>
          <div>
            <h4>Filled Buttons</h4>
            <Button btnStyle='filled' variant='primary'>
              Filled Primary
            </Button>
            <Button btnStyle='filled' variant='secondary'>
              Filled Secondary
            </Button>
            <Button btnStyle='filled' variant='success'>
              Filled Success
            </Button>
            <Button btnStyle='filled' variant='warning'>
              Filled Warning
            </Button>
            <Button btnStyle='filled' variant='danger'>
              Filled Danger
            </Button>
          </div>
          <div>
            <h4>Outline Buttons</h4>
            <Button btnStyle='outline' variant='primary'>
              Outline Primary
            </Button>
            <Button btnStyle='outline' variant='secondary'>
              Outline Secondary
            </Button>
            <Button btnStyle='outline' variant='success'>
              Outline Success
            </Button>
            <Button btnStyle='outline' variant='warning'>
              Outline Warning
            </Button>
            <Button btnStyle='outline' variant='danger'>
              Outline Danger
            </Button>
          </div>
        </ScrollToTop>
        <DebugInfo />
      </>
    </Router>
  );
}
