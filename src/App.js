import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style/App.scss";
import {ThemeProvider, createTheme} from '@material-ui/core/styles';

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";

import Registration from "./pages/Registration";
import Login from "./pages/Login";


const theme =createTheme({
palette: {
    primary: {
      light: '#ff9e9a',
      main: '#f76c6c',
      dark: '#bf3a41',
      contrastText: '#fff',
    },
     secondary: {
      light: '#464646',
      main: '#1f1f1f',
      dark: '#000000',
      contrastText: '#fff',
    },
  },
})


const App = () => {
  //need this to get search input
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");
  console.log(search);

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* tried this out to see if we can search input */}
        <Route path="/gallery/">
          <Gallery search={search} />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
         <Route path="/login">
          <Login />
        </Route>
        <Route path="/user/profile">
          <UserProfile/>
        </Route>
      </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
