import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { RecipeCard } from './RecipeCard';

import styles from './recipes.scss';

const CheckedStyle = makeStyles({
  checked: {
    '&, & + $label': {
      background: '#007bff',
      color: 'white',
    },
  },
  label: {},
});

const RecipeCategories = (): JSX.Element => {
  const [value, setValue] = useState('main+course');
  const classes = CheckedStyle();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <div className={styles['recipeCategories']}>
        <FormControl component="div">
          <RadioGroup
            className={styles['rdGroup']}
            aria-label="categories"
            name="category1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              classes={{ label: classes.label }}
              value="main+course"
              control={<Radio classes={{ checked: classes.checked }} />}
              label="Main course"
            />

            <FormControlLabel
              classes={{ label: classes.label }}
              value="dessert"
              control={<Radio classes={{ checked: classes.checked }} />}
              label="Dessert"
            />

            <FormControlLabel
              classes={{ label: classes.label }}
              value="breakfast"
              control={<Radio classes={{ checked: classes.checked }} />}
              label="Breakfast"
            />

            <FormControlLabel
              classes={{ label: classes.label }}
              value="salad"
              control={<Radio classes={{ checked: classes.checked }} />}
              label="Salad"
            />

            <FormControlLabel
              classes={{ label: classes.label }}
              value="drink"
              control={<Radio classes={{ checked: classes.checked }} />}
              label="Drink"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <RecipeCard typeOfRecipe={value} />
    </div>
  );
};
export default RecipeCategories;
