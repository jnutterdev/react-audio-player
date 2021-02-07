import React, { useState, useEffect, useRef, useContext } from 'react'
import playerContext from './PlayerContext'

function Controls() {

  // Global State
  const {
    currentSong,
    songs,
    nextSong,
    prevSong,
    repeat,
    random,
    playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd,

  } = useContext(playerContext)

  const audio = useRef('audio_tag');

  // self State
  const [statevolum, setStateVolum] = useState(0.3)
  const [dur, setDur] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }

  const toggleAudio = () => audio.current.paused ? audio.current.play() : audio.current.pause();

  const handleVolume = (q) => {
    setStateVolum(q);
    audio.current.volume = q;
  }

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute
  }

  useEffect(() => {
    audio.current.volume = statevolum;
    if (playing) { toggleAudio() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong])

  return (
  
    <>
    <div className="controls">
            <audio

          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          onCanPlay={(e) => setDur(e.target.duration)}
          onEnded={handleEnd}

          ref={audio}
          type="audio/mpeg"
          preload='true'
          src={songs[currentSong][1]} />

    <div class="player-ctn">
        <div class="infos-ctn">
            <div class="timer">00:00</div>
            <div class="title"></div>
            <div class="duration">00:00</div>
        </div>

        <div id="myProgress">
            <span className="currentT">{fmtMSS(currentTime)}</span>
            <input
          onChange={handleProgress}
          value={dur ? (currentTime * 100) / dur : 0}
          type="range" name="progresBar" id="prgbar" />
            <span className="totalT">{fmtMSS(dur)}</span>
        </div>

        <div class="btn-ctn">
            <div class="btn-action first-btn">
                <div id="btn-faws-back">
                    <span className="prev" onClick={prevSong}><i className="fas fa-step-backward"></i></span>
                </div>
            </div>
          
            <div class="btn-action" onClick={() => { togglePlaying(); toggleAudio(); }}>
                <div id="btn-faws-play-pause">
                    <span className={!playing ? '' : 'hide'}><i className="fas fa-play"></i></span>
                    <span className={!playing ? 'hide' : ''}><i className="fas fa-pause"></i></span>
                </div>
            </div>
        
            <div class="btn-action">
                <div id="btn-faws-next">
                    <span className="next" onClick={nextSong}><i className="fas fa-step-forward"></i></span>
                </div>
            </div>
            
            <div class="btn-mute" id="toggleMute">
                <div id="btn-faws-volume">
                    <span className="volume"><i className="fas fa-volume-down"></i></span>
                    <input value={Math.round(statevolum * 100)} type="range" name="volBar" id="volBar" onChange={(e)=> handleVolume(e.target.value / 100)} />
                </div>
            </div>

        </div>
        <div class="playlist-ctn"></div>
    </div>
    </div>
  </>
  )
}

export default Controls
