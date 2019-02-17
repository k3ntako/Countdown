import React from 'react';
import { BrowserRouter, Route, Switch  } from "react-router-dom";

import AllEvents from './pages/AllEvents/index'
import AddEvent from './pages/AddEvent/index'
import ShowEvent from './pages/ShowEvent/index'

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={AllEvents} />
        <Route path='/users/:userId/events/new' exact component={AddEvent} />
        <Route path='/users/:userId/events/:eventUrl' component={ShowEvent} />
        <Route path='/:eventUrl' component={ShowEvent} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
