import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Player from "./components/Player";
import SongsList from "./components/Songlist";

// main player components
import list from "./songs/songlist";

// player styling components
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import "./assets/css/style.css";

class App extends React.Component {
  state = {
    load: false,
    select: null,
    id: 0,
    status: false
  };

  onSelect = id => {
    let song = list.filter(song => song.id === id);

    this.setState({
      select: song,
      load: true,
      id: id,
      status: true
    });

    // console.log(this.state.status);
  };

  offme = () => {
    this.setState({
      status: !this.state.status
    });
  };

  render() {
    return (
    
      <div className="app">
        <CssBaseline />
        <Container>
        <Header />
        <Player
          url={this.state.load ? this.state.select[0].url : ""}
          status={this.state.status}
          load={this.state.load}
          offMe={this.offme}
          songName={this.state.load && this.state.select[0].name}
        />
        <SongsList
          list={list}
          Onselect={this.onSelect}
          id={this.state.id && this.state.id}
          off={this.offme}
          status={this.state.status}
        />
        </Container>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);