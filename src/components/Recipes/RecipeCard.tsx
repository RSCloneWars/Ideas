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
import {Link} from "react-router-dom";

import CardContentHead from './RecipeCardHead';
import styles from './recipes.scss';

export interface IRecipeResults {
  results: IRecipeResult[];
}

const unique = (array: Array<string>): Array<string> => {
  const result: Array<string> = [];
  array.forEach(str => {
    if (!result.includes(str)) {
      result.push(str);
    }
  });
  return result;
};

const timeConvert = (num: number): string => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  let out = '';
  if (hours === 0) {
    out = '';
  } else if (hours <= 1) {
    out = `${hours} hr,`;
  } else {
    out = `${hours} hrs,`;
  }
  return ` ${out} ${minutes} min`;
};

export const CardStyle = makeStyles({
  root: {
    maxWidth: 260,
    borderRadius: '15px',
    overflow: 'visible',
    position: 'relative',
  },
  loading: {
    color: '#6c757d',
    margin: '50px auto 0',
    display: 'block',
  },
  media: {
    height: 180,
    width: 260,
    borderRadius: '15px 15px 0 0',
  },
  bookmark: {
    width: '30px',
    height: '30px',
    backgroundImage: `url(${Bookmark})`,
    backgroundPosition: '-100% 0%',
    position: 'absolute',
    top: '15px',
    left: '15px',
  },
  likeRecipe: {
    backgroundPosition: '0% 0%',
  },
  gridMain: {
    gridGap: '24px 48px',
  },
  gridItem: {
    padding: '24px 0',
  },
});

const CategoriesDataService = (type: string) => {
  const [result, setData] = useState<Service<IRecipeResults>>({
    status: 'loading',
  });

  useEffect(() => {
    fetch(
      `${FilterUrl}?number=8&type=${type}&addRecipeInformation=true&instructionsRequired=true&fillIngredients=true&apiKey=${FreeApiKey1}`
    )
      .then(response => response.json())
      .then(response => {
        setData({ status: 'loaded', data: response });
        // console.log(type + " from useEffect");
      })
      .catch(error => setData({ status: 'error', error }));
  }, [type]);

  return result;
};

export const RecipeCard = (props: { typeOfRecipe: string }): JSX.Element => {
  const classes = CardStyle();
  const service = CategoriesDataService(props.typeOfRecipe);

  return (
    <div className={styles['recipeCards']}>
      {service.status === 'loading' && (
        <div>
          <CircularProgress className={classes.loading} />
        </div>
      )}
      {service.status === 'error' && <div>Error</div>}

      <Grid container justify="center" spacing={0} className={classes.gridMain}>
        {service.status === 'loaded' &&
          service.data.results.map(card => (
            <Grid item key={card.id} className={classes.gridItem}>
              <Card className={classes.root}>
                <CardContentHead image={card.image} idRecipe={card.id} title={card.title} />
                <CardContent className='theme-card'>
                  <div className={styles['cardContentHead']}>
                    <div className={styles['time']}>
                      <IconClock width={20} height={20} alt="Clock" />
                      <span>{timeConvert(card.readyInMinutes)}</span>
                    </div>
                    <Typography gutterBottom variant="h5" component="h3">
                      {card.title}
                    </Typography>
                  </div>

                  <Typography
                    className={styles['cardContentText']}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {card.analyzedInstructions.map(item => {
                      const temp: Array<string> = [];
                      let str = '';
                      item.steps.map(part => {
                        if (part.ingredients.length === 0) {
                          str = part.step;
                        } else {
                          part.ingredients.map(ingredient =>
                            temp.push(ingredient.name[0].toUpperCase() + ingredient.name.slice(1))
                          );
                        }
                      });
                      return temp.length > 0
                        ? temp.length <= 5
                          ? unique(temp).slice(0, 6).join(', ')
                          : `${unique(temp).slice(0, 6).join(', ')} ...`
                        : str;
                    })}
                  </Typography>
                </CardContent>

                <CardActions className="d-flex p-0 justify-content-center theme-card">
                  <Link className={styles['cardButton']} to={`/recipe/${card.id}`}>
                    <Button className="theme-button" variant="primary">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
