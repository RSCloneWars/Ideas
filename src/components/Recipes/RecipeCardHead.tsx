import React, { useState } from 'react';

import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Slide,
  // Button,
  CardMedia,
} from '@material-ui/core';

import { Button } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import { TransitionProps } from '@material-ui/core/transitions';
import StarIcon from '@material-ui/icons/Star';
import Bookmark from '@/assets/images/bookmark.png';

import { connect } from 'react-redux';
import { addRecipe, removeRecipe } from '@/action/actionCreator';
import { RootState } from '@/reducers/index';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CardStyle = makeStyles({
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
    cursor: 'pointer',
  },
  likeRecipe: {
    backgroundPosition: '0% 0%',
  },
  dialog: {
    '& > * > *': {
      border: '1px solid #3078B4',
    },
    '& > * > * > #modal-dialog-title': {
      padding: '10px 24px',
      marginBottom: '10px',
      backgroundColor: '#3078B4',
    },
    '& > * > * > * h2': {
      textAlign: 'left',
      color: '#fff',
    },
  },
});

type Recipe = {
  id: number;
  image: string;
  title?: string;
};

const CardContentHead = (props: { title?: string; idRecipe: number; image: string; recipes: Array<Recipe>; addRecipe(id: number, image: string, title?: string): void; removeRecipe(id: number): void }): JSX.Element => {
  const classes = CardStyle();
  const [open, setOpenDialog] = useState(false);
  const [like, setClassLike] = useState(() => {
    const arrayIds: Array<string> = localStorage.getItem('likeRecipe')
      ? JSON.parse(localStorage.getItem('likeRecipe') || '{}')
      : [];
    return arrayIds.includes(props.idRecipe.toString()) ? classes.likeRecipe : '';
  });

  const checkRecipesList = (recipes: Array<Recipe>, id: number): boolean => recipes.some((item: Recipe) => item.id === id);

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDialog = () => {
    if (like) {
      clickLikeBookmark(props.idRecipe);
    } else {
      setOpenDialog(true);
    }
  };

  const handleClick = (id: number) => {
    const { recipes, removeRecipe } = props;
    if (checkRecipesList(recipes, id)) {
      removeRecipe(id);
      setClassLike('');
    } else {
      handleDialog();
    }
  };

  const addToFavorit = (id: number) => {
    const { title, image, addRecipe } = props;
    addRecipe(id, image, title);
    setOpenDialog(false);
    setClassLike(classes.likeRecipe);
  };

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
    setOpenDialog(false);
  };

  return (
    <div>
      <CardMedia className={classes.media} image={props.image} title="Image of recipe" />
      <span
        onClick={() => handleClick(props.idRecipe)}
        data-key={props.idRecipe}
        className={`${classes.bookmark} ${like}`}
      />

      <Dialog className={classes.dialog}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="modal-dialog-title"
      >
        <DialogTitle id="modal-dialog-title">{'Add a Favorite?'}</DialogTitle>
        <DialogContent>
          <DialogContentText className="theme-modalText">
            Add this recipe as a favorite. To access to favorites, visit the your Profile.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className="outline-primary d-flex align-items-center theme-button"
            onClick={() => addToFavorit(props.idRecipe)}
            color="primary"
          >
            <StarIcon style={{ color: '#f8f9fa', fontSize: 20 }} />
            Add
          </Button>
          <Button className="outline-primary d-flex align-items-center theme-button"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default connect(({ recipes }: RootState) => ({
  recipes,
}), { addRecipe, removeRecipe })(CardContentHead);
