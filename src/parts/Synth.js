import React from "react";
import '../assets/css/style.css';
import { Sampler } from "tone";
import C1 from "../assets/sounds/drums.wav";
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
    this.handleClick = this.handleClick.bind(this);

    this.sampler = new Sampler(
      { C1 },
      {
        onload: () => {
          this.setState({ isLoaded: true });
        }
      }
    ).toDestination();
  }

  handleClick() {
    this.sampler.triggerAttackRelease("C1", 1.0);
  }

  render() {
    const { isLoaded } = this.state;
    return (
      <>
        <Button className="buttonColor" disabled={!isLoaded} onClick={this.handleClick} variant="contained">
          play
        </Button>
      </>
    );
  }
}

