import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Components/Layout/Header'
import Playlist from './Components/Features/Playlist'
import Actions from './Actions'
import Controls from './Components/Controls'

import PlayerState from './Components/PlayerState'


import './assets/css/styles.css'

class AudioPlayer extends Component {
render() {
  return (
    <>
    <CssBaseline />
      <Container>
        <Header />
        <div className="player-ctn">
          <PlayerState>
              <Actions /> 
              <Controls />
              <Playlist />
          </PlayerState>
          </div>
    </Container>
    </>
  );
}
}
export default AudioPlayer;
