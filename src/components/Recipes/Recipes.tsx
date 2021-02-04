import React from 'react';
import RecipeCategories from './RecipeCategories';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Recipes = () : JSX.Element => {
  return (
    <div className='pt-4 d-flex align-items-center flex-column' >
      <h2 className="theme-title">Recipes</h2>
      <RecipeCategories />
        <Link to="/search">
          <Button className="theme-button mt-5 mb-4" variant="primary">Search inspiration</Button>
        </Link>
    </div>
  );
};
export default Recipes;
