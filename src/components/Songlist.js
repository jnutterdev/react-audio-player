import React from "react";
import FaPause from '@material-ui/icons/Pause';
import FaPlay from '@material-ui/icons/PlayArrow';
// import "./songlist.css";
class SongsList extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "1rem" }}>
        <ul className="song-list">
          {this.props.list.map(song => (
            <li className="one-song" key={song.id}>
              {song.name}
              <button
                className="small-btn"
                onClick={
                  this.props.id === song.id
                    ? this.props.status
                      ? this.props.off
                      : () => this.props.Onselect(song.id)
                    : () => this.props.Onselect(song.id)
                }
              >
                {this.props.id === song.id ? (
                  this.props.status ? (
                    <FaPause />
                  ) : (
                    <FaPlay />
                  )
                ) : (
                  <FaPlay />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SongsList;
