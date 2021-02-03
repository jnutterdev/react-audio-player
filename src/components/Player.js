import React from "react";
import {Howl, Howler} from 'howler';
import FaPause from '@material-ui/icons/Pause';
import FaPlay from '@material-ui/icons/PlayArrow';
import { secondsToMinutes, timeCounter } from "../lib/time";


class Player extends React.Component {
  state = {
    currentTime: 0,
    duration: 0,
    loaded: false,
    isPlaying: false,
    move: false,
    buffer: 0,
    volume: 0.8,
    end: "",
    volumeMove: false
  };
  componentDidMount() {
    document.addEventListener("mousemove", this.handleMove);
    document.addEventListener("mouseup", this.handleDown);
    document.addEventListener("mousemove", this.volumeMove);
    document.addEventListener("mouseup", this.onvolumeup);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMove);
    document.removeEventListener("mouseup", this.handleDown);
    document.removeEventListener("mousemove", this.volumeMove);
    document.removeEventListener("mouseup", this.onvolumeup);
  }

  UNSAFE_componentWillReceiveProps() {
    if (this.props.status) {
      this.pause();
    } else {
      this.play();
    }
  }

  loadData = () => {
    this.setState({
      duration: this.audio.duration,
      loaded: true,
      volume: this.audio.volume,
      end: false
    });

    this.play();
  };

  bufferProgress = e => {
    if (this.state.loaded) {
      if (this.audio.buffered.length > 0) {
        var bufferedEnd = this.audio.buffered.end(
          this.audio.buffered.length - 1
        );
        this.setState({ buffer: bufferedEnd });
      }
    }
  };

  setTime = time => {
    if (time <= this.state.duration) {
      this.audio.currentTime = time;
    }
  };

  handleProgress = e => {
    if (this.state.loaded) {
      let clientleft = e.clientX;
      if (!this.state.move) {
        this.setState({ move: true });
      }

      const relativeLeft = clientleft - this.node.offsetLeft;
      this.setTime(
        (relativeLeft / this.node.clientWidth) * this.audio.duration
      );
    }
  };

  handleMove = e => {
    if (this.state.move) {
      this.audio.volume = 0;
      this.handleProgress(e);
    }
  };

  handleDown = e => {
    this.audio.volume = this.state.volume;
    this.setState({ move: false });
  };

  timeUpdate = e => {
    this.setState({
      currentTime: this.audio.currentTime,
      duration: this.audio.duration
    });
  };
  play = () => {
    this.setState({
      isPlaying: true,
      end: false
    });

    this.audio.play();
  };

  pause = () => {
    this.setState({
      isPlaying: false
    });

    this.audio.pause();
  };

  handleEnd = () => {
    this.setState({
      isPlaying: false,
      end: true
    });
  };

  setVolume = vol => {
    this.audio.volume = vol;

    this.setState({
      volume: vol
    });
  };

  onvolumeDown = e => {
    if (!this.state.volumeMove) {
      this.setState({
        volumeMove: true
      });
    }
    let clientleft = e.clientX;
    let relativeLeft = clientleft - this.volumeNode.offsetLeft;
    let percentage = 100 * (relativeLeft / this.volumeNode.clientWidth);

    if (percentage > 100) {
      percentage = 100;
    }
    if (percentage < 0) {
      percentage = 0;
    }

    this.setVolume(percentage / 100);
  };

  volumeMove = e => {
    if (this.state.volumeMove) {
      this.onvolumeDown(e);
    }
  };

  onvolumeup = e => {
    this.setState({
      volumeMove: false
    });
  };

  render() {
    let {
      currentTime,
      duration,
      buffer,
      loaded,
      volume,
      isPlaying,
      end
    } = this.state;
    let { status, offMe, songName, load } = this.props;
    return (
      <div className="player">
        <div className="item1">
          <div className="main-player">
            <div className="audio">
              <audio
                src={this.props.url}
                onPlay={() => {
                  this.play();
                  if (!status) {
                    offMe();
                  }
                }}
                onPause={() => {
                  this.pause();

                  if (status) {
                    offMe();
                  }
                }}
                ref={node => (this.audio = node)}
                onLoadedMetadata={this.loadData}
                onTimeUpdate={this.timeUpdate}
                onProgress={this.bufferProgress}
                onEnded={this.handleEnd}
                type="audio/mp3"
              />
              <div
                className={loaded ? "playerbar-holder" : ""}
                ref={node => (this.node = node)}
                onMouseDown={this.handleProgress}
              >
                <div
                  className={!loaded ? "" : "dot"}
                  onMouseDown={this.handleProgress}
                  style={{ left: `${(currentTime / duration) * 100}%` }}
                />
                <div
                  className="bufferbar"
                  style={{ width: `${(buffer / duration) * 100}%` }}
                />
                <div
                  className="playerbar"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>
            </div>
            <div className="btns">
              <div className="playbtn-holder">
                <button
                  className="playbtn"
                  onClick={
                    isPlaying
                      ? () => {
                          this.pause();
                          offMe();
                        }
                      : () => {
                          this.play();
                          if (!status) {
                            offMe();
                          }
                        }
                  }
                  disabled={!loaded}
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
              </div>
              <div style={{ fontSize: ".9rem" }}>
                {loaded
                  ? isPlaying
                    ? "Now Playing " + songName
                    : end
                      ? "Song completed"
                      : !duration
                        ? "Loading"
                        : "Paused " + songName
                  : !load
                    ? "Play something"
                    : "Loading"}
              </div>

              <div>
                {timeCounter(currentTime)} /
                {duration > 0 ? secondsToMinutes(duration) : "00:00"}
              </div>
            </div>
          </div>
        </div>
        <div className="item2">
          <div
            className="volume-holder"
            ref={node => (this.volumeNode = node)}
            onMouseDown={this.onvolumeDown}
          >
            <div
              className="volume-bar"
              style={{
                width: `${volume * 100}%`,
                textAlign: "center"
              }}
            >
              <span style={{ textAlign: "center" }}>
                {" "}
                {(volume * 100).toFixed(0)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
