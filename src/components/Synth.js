import React from "react";
import ReactDOM from "react-dom";
import '../assets/css/style.css';
import { Sampler } from "tone";
import A1 from "../assets/sounds/drums.wav";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

export default class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
    this.handleClick = this.handleClick.bind(this);

    this.sampler = new Sampler(
      { A1 },
      {
        onload: () => {
          this.setState({ isLoaded: true });
        }
      }
    ).toDestination();
  }

  handleClick() {
    this.sampler.triggerAttack("A1");
  }

  render() {
    const { isLoaded } = this.state;
    return (
      <>
        <Button classNames="buttonColor" disabled={!isLoaded} onClick={this.handleClick} variant="contained">
          start
        </Button>
      </>
    );
  }
}

