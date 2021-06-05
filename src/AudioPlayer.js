import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './assets/css/styles.css'
import Container from '@material-ui/core/Container';

import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Playlist from './Components/Features/Playlist'

import Controls from './Components/Controls'
import PlayerState from './Components/PlayerState'

class AudioPlayer extends Component {
render() {
  return (
    <>
    <CssBaseline />
      <Container>
        <Header />
          <PlayerState>
            <Controls />
            <Playlist />  
          </PlayerState>
          <Footer />
    </Container>
    </>
  );
}
}
export default AudioPlayer
