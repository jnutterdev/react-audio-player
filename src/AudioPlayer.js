import React, {Component} from 'react';
import Header from './Components/Layout/Header'
import Playlist from './Components/Features/Playlist'
import Actions from './Actions'
import Controls from './Components/Controls'

import PlayerState from './Components/PlayerState'


import './assets/css/styles.css'
import './assets/css/input.css'

class AudioPlayer extends Component {
render() {
  return (
    <PlayerState>
      <div className="main">
        <div className="top">
          <div className="left">
            <Header />
          </div>
          <div className="right">
            <Actions />
            <Playlist />
          </div>
        </div>
        <Controls />
      </div>
    </PlayerState>
  );
}
}
export default AudioPlayer;
