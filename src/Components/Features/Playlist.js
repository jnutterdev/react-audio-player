import React, { useContext } from 'react'
import playerContext from '../PlayerContext'


function Playlist() {
  const { SetCurrent, currentSong, songs } = useContext(playerContext)

  return (
    <div className="playlist-ctn">     
          <div className="playlist-track-ctn">
              <ul className="plist-style">
               {
            songs.map((song, i) =>
              <li className={'songContainer ' + (currentSong === i ? 'selected' : '')} key={i} onClick={() => { SetCurrent(i); }}>
                <span className="song">{song[0]}</span><span className="songLength"></span>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Playlist
