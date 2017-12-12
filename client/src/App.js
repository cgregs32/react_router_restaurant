import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Dish from './components/Dish';
import DishForm from './components/DishForm';
import NoMatch from './components/NoMatch';
import { Segment } from 'semantic-ui-react';

const App = () => (
  <Segment basic>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Menu} />
      <Route exact path='/menu' component={Menu} />
      <Route exact path='/dishes/:id' component={Dish} />
      <Route exact path='/dishes/:id/edit' component={DishForm} />
      <Route component={NoMatch} />
    </Switch>
  </Segment>
);

export default App;
