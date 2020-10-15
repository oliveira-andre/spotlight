import React from "react";
import { Switch, Route } from 'react-router-dom';

import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import DiscoveryScreen from "./screens/discovery";
import SearchScreen from "./screens/search";
import AlbumScreen from "./screens/album";
import FavoritesScreen from "./screens/favorites";
import NewSongScreen from "./screens/new_song";

import PrivateRoute from "./components/auth/private_route";

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={HomeScreen} />
    <Route exact path='/login' component={LoginScreen} />
    <PrivateRoute exact path='/discovery' component={DiscoveryScreen} />
    <PrivateRoute exact path='/search' component={SearchScreen} />
    <PrivateRoute exact path='/album/:id' component={AlbumScreen} />
    <PrivateRoute exact path='/favorites' component={FavoritesScreen} />
    <PrivateRoute exact path='/songs/new' component={NewSongScreen} />
  </Switch>
);

export default Routes;
