import React from 'react';
import { Button } from 'react-bootstrap';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import styles from '@/components/Recipes/recipes.scss';
import {Link} from "react-router-dom";

const Searchcard = (props: {id: number, image: string, title: string}): JSX.Element => {
  const CardStyle = makeStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      backgroundImage: `url(${props.image})`,
      backgroundPosition: 'center',
      alignItems: 'center',
      width: 260,
      height: 180,
      margin: 10,
      border: '1px solid #ccc',
      position: 'relative',
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      backgroundColor: '#ffffff',
      width: 260,
      textAlign: 'center',
    }
  });
  const classes = CardStyle();
      return (
        <div>
        <div className={classes.card}>
          <div className={classes.title}>`{props.title}`</div>
          </div>
          <CardActions className="d-flex p-0 justify-content-center theme-card">
            <Link className={styles['cardButton']} to={`/recipe/${props.id}`}>
              <Button className="theme-button" variant="primary">Learn More</Button>
            </Link>
          </CardActions>
        </div>
      );
}

export default Searchcard;
