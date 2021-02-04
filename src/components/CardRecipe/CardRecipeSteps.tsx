import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography
} from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import React, { useState } from 'react';
import IconCloche from '@/assets/svg/005-cloche.svg';
import IconCutlery from '@/assets/images/015-cutlery.png';
import styles from './recipe.scss';

const themeStepper = makeStyles((theme: Theme) =>
  createStyles({
    step: {
      "& > * > * > svg.MuiStepIcon-active" : {
        color: "#EC8B83",
      },
      "& > * > * > svg.MuiStepIcon-completed" : {
        color: "#007bff",
      },
    },
    alternativeLabel: {},
    active: {},
    completed: {},
    disabled: {},
  }),
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
  }),
);

const CardRecipeSteps = (props: { arraySteps: Array<string> }): JSX.Element => {
  const classes = useStyles();
  const classesStep = themeStepper();
  const [activeStep, setActiveStep] = useState(0);
  const steps : Array<string> = (props.arraySteps).map((item, i) => `STEP ${i+1}`);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper className="theme-card"  activeStep={activeStep} orientation="vertical" >
        {steps.map((label, index) => (
          <Step key={label} className={classesStep.step}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{props.arraySteps[index]}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={`${classes.button} ${styles['backBtn']}`}
                  >
                    <KeyboardArrowLeft/> Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    className={`${classes.button} ${styles['nextBtn']}`}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}{activeStep === steps.length - 1 ? <span>&nbsp;&nbsp;</span> : <KeyboardArrowRight/>}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={`${styles['resetContainer']} theme-card`} >
          <Typography component="h4">Bon appetit!</Typography>
          <div><IconCloche alt="Cloche" /> <img alt="Cutlery" src={IconCutlery} /></div>
          <Button onClick={handleReset} color="primary" className={`${classes.button} ${styles['resetBtn']}`}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
};
export default CardRecipeSteps;
