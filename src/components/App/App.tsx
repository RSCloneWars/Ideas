import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from '@/components/Navbar';
import Filter from '@/components/Filter';
import IngredientSearch from '@/components/IngredientSearch';
import Main from '@/components/Main';
import Profile from '@/components/Profile';
import Footer from '@/components/Footer';
import CardRecipe from '@/components/CardRecipe';
import Developers from '../Developers';
import { Button } from 'react-bootstrap';

import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, GlobalStyles } from '@/themes/themes';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = (): JSX.Element => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <NaviBar />
        <Button className="toggle-button w-100" onClick={() => themeToggler()} size="sm">
          Change theme
        </Button>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/search">
            <Filter />
          </Route>
          <Route exact path="/ingrsearch">
            <IngredientSearch />
          </Route>
          <Route exact path="/devteam">
            <Developers />
          </Route>
          <Route path="/recipe/">
            <CardRecipe />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};
export default App;
