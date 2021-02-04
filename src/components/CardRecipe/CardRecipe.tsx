import {
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Tabs,
  Tab
} from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Service } from '@/types/Service';
import { IRootObject } from '@/types/CardRecipe';
import IconSaucepan from '@/assets/svg/004-cake.svg';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import AccessTime from '@material-ui/icons/AccessTime';
import Bookmark from '@/assets/images/bookmark.png';
import styles from './recipe.scss';
import CardRecipeSteps from '@/components/CardRecipe/CardRecipeSteps';
import { FreeApiKey1 } from '@/constants/index';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

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

const CardStyle = makeStyles((theme: Theme) =>
  createStyles({
    gridMain: {
      display: 'grid',
      gridTemplateColumns: '2fr 3fr',
      '& > * > * > div.MuiBox-root': {
        padding: '0',
      },
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
      },
    },
    cardImage: {
      minHeight: '500px',
      [theme.breakpoints.down('sm')]: {
        minHeight: '350px',
        height: '350px',
      },
    },
    loading: {
      color: '#6c757d',
      margin: '50px auto',
      display: 'block',
    },
    bookmark: {
      width: '30px',
      height: '30px',
      backgroundImage: `url(${Bookmark})`,
      backgroundPosition: '-100% 0%',
      cursor: 'pointer',
    },
    likeRecipe: {
      backgroundPosition: '0% 0%',
    },
    panelTabs: {
      marginTop: '40px',
      '& > * > span': {
        backgroundColor: '#f0f0f0',
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: '20px',
      },
    },
  })
);

const CardRecipe = (): JSX.Element => {
  const classes = CardStyle();
  const [value, setValue] = useState(0);
  const [info, setData] = useState<Service<IRootObject>>({
    status: 'loading',
  });
  const id = (window.location.pathname).replace('/recipe/', '');
  let temp: Array<string> = [];
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${FreeApiKey1}`)
      .then(response => response.json())
      .then(response => {
        setData({ status: 'loaded', data: response });
      })
      .catch(error => setData(error));
  }, []);

  const [like, setClassLike] = useState(() => {
    const arrayIds: Array<string> = localStorage.getItem('likeRecipe')
      ? JSON.parse(localStorage.getItem('likeRecipe') || '{}')
      : [];
    return arrayIds.includes(id) ? classes.likeRecipe : '';
  });

  const clickLikeBookmark = (id: number): void => {
    const arrayIds: Array<string> = localStorage.getItem('likeRecipe')
      ? JSON.parse(localStorage.getItem('likeRecipe') || '{}')
      : [];

    if (!arrayIds.includes(id.toString())) {
      arrayIds.push(id.toString());
      setClassLike(classes.likeRecipe);
    } else {
      arrayIds.splice(arrayIds.indexOf(id.toString()), 1);
      setClassLike('');
    }
    localStorage.setItem('likeRecipe', JSON.stringify(arrayIds));
  };

  return (
    <div className={`${styles['wrapCardRecipe']} bg-light theme-container`}>
      <div className={`${styles['cardRecipe']} theme-card theme-title`}>

        {info.status === 'loading' && (
          <div style={{ paddingTop: '50px', paddingBottom: '50px' }}>
            <CircularProgress className={classes.loading} />
          </div>
        )}

        {info.status === 'loaded' && (
          <Grid container className={classes.gridMain} spacing={0}>
            <Grid item>
              <CardMedia
                component="img"
                className={classes.cardImage}
                alt={`Image of recipe ${info.data.title}`}
                image={info.data.image}
                title={`Image of recipe ${info.data.title}`}
              />
              <div className={styles['wrapCardClock']}>
                <div>
                  <AccessTime style={{ fontSize: 40, color: '#4a6a83' }} />
                </div>
                <div>
                  <span>Cooking Time</span>
                  <div>{timeConvert(info.data.readyInMinutes)}</div>
                </div>

                <div>
                  <IconSaucepan alt="Saucepan" />
                </div>
                <div>
                  <span>Servings</span>
                  <div>{info.data.servings}</div>
                </div>
              </div>
            </Grid>

            <Grid item className={styles['cardBlockContent']}>
              <div>
                <span onClick={() => clickLikeBookmark(info.data.id)} data-key={info.data.id} className={`${classes.bookmark} ${like}`}></span>
              </div>

              {info.data.vegan && (
                <span><Brightness1Icon style={{ fontSize: 15, color: '#14c4bb' }} /> vegan</span>
              )}
              {info.data.veryHealthy && (
                <span><Brightness1Icon style={{ fontSize: 15, color: '#3078B4', marginLeft: '15px' }} /> healthy</span>
              )}

              <Typography gutterBottom variant="h5" component="h1">
                {info.data.title}
              </Typography>

              <div className={styles['cardAddInfo']}>
                {info.data.vegetarian && (
                  <span>Vegetarian</span>
                )}
                {info.data.glutenFree && (
                  <span>Gluten Free</span>
                )}
                {info.data.dairyFree && (
                  <span>Dairy Free</span>
                )}
              </div>

              <Tabs className={classes.panelTabs} value={value} onChange={handleChange} aria-label="description recipe">
                <Tab label="Ingredients" {...a11yProps(0)} />
                <Tab label="Steps" {...a11yProps(1)} />
              </Tabs>

              <TabPanel value={value} index={0}>
                <div className={styles['cardTabContent']}>
                  <ul>
                      {info.data.extendedIngredients.map((item, i) => (
                        <li key={i}>{item.original}</li>
                      ))}
                  </ul>
                </div>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <CardContent className={styles['cardTabContent']}>
                  {info.data.analyzedInstructions.forEach(({ steps }) =>
                    steps.map(item => temp.push(item.step))
                  )}
                  <CardRecipeSteps arraySteps={temp} />
                </CardContent>
              </TabPanel>
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
};
export default CardRecipe;
