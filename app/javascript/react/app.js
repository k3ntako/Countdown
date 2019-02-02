import React from 'react';
import { BrowserRouter, Route, Switch  } from "react-router-dom";

import AddEvent from './pages/AddEvent/index'
import ShowEvent from './pages/ShowEvent/index'

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={AddEvent} />
        <Route path='/users/:user_id/events/:event_url' component={ShowEvent} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
