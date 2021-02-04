import { Button } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';

import Bookmark from '@/assets/images/bookmark.png';
import IconClock from '@/assets/svg/clock.svg';
import { FilterUrl, FreeApiKey1 } from '@/constants';
import { IRecipeResult } from '@/types/RecipeCards';
import { Service } from '@/types/Service';

import CardContentHead from '@/components/Recipes/RecipeCardHead';
import { CardStyle } from '@/components/Recipes/RecipeCard';
import styles from '@/components/Recipes/recipes.scss';

import { connect } from 'react-redux';
import { addRecipe, removeRecipe } from '@/action/actionCreator';
import { RootState } from '@/reducers/index';
import {Link} from "react-router-dom";


type Recipe = {
  id: number;
  image: string;
  title: string;
};

type ProfileProps = {
  recipes: Recipe[];
};

const Profile = ({ recipes }: ProfileProps) => {
  const classes = CardStyle();
  return (
    <Grid container justify="center" spacing={0} className={classes.gridMain}>
      {recipes.map(item => (
        <Grid item key={item.id} className={classes.gridItem}>
          <Card className={classes.root}>
            <CardContentHead image={item.image} idRecipe={item.id} />
            <CardContent className='theme-card'>
              <div className={styles['cardContentHead']}>
                <Typography gutterBottom variant="h5" component="h3">
                  {item.title}
                </Typography>
              </div>
            </CardContent>

            <CardActions className="d-flex p-0 justify-content-center theme-card">
              <Link className={styles['cardButton']} to={`/recipe/${item.id}`}>
                <Button className="theme-button" variant="primary">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default connect(({ recipes }: RootState) => ({
  recipes,
}), { addRecipe, removeRecipe })(Profile);
