import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import FlashOnIcon from '@material-ui/icons/FlashOn';

  export default function Header() {
    return (
    <div className="">
      <AppBar className="appbar" elevation={0}>
          <Toolbar>
          <h1>Music Player</h1>
          <IconButton>
            <FlashOnIcon className="icon" />
          </IconButton>
          </Toolbar>
      </AppBar>
      </div>
    );
  }