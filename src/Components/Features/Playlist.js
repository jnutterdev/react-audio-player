import React, { useContext } from 'react'
import playerContext from '../PlayerContext'


function Playlist() {
  const { SetCurrent, currentSong, songs } = useContext(playerContext)

  return (
    <div className="playlist-ctn">
        <div className="play-list-menu">
        <i className="fas fa-list-ul"></i>
          <span className="playlist-info-track">Play List</span>
        </div>
         
          <div className="playlist-track-ctn">
              <ul className="loi">
               {
            songs.map((song, i) =>
              <li className={'songContainer ' + (currentSong === i ? 'selected' : '')} key={i} onClick={() => { SetCurrent(i); }}>
                <i className="fas fa-music"></i>
                <span className="song">{song[0]}</span>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Playlist
