import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Synth from '../components/Synth';

const useStyles = makeStyles((theme) => ({ 
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Poppins',
    },
    appbar: {
        background: 'none',
       
    },
    icon: {
        color: '#00BD9D',
        fontSize: '2rem',
    }, 
    colorText: {
       color: '#00BD9D',
       fontSize: '3rem',
    }
 }));
  export default function Header() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
          <Toolbar>
          <h1>JN React Project</h1>
          <IconButton>
            <FlashOnIcon className={classes.icon} />
          </IconButton>
          </Toolbar>
      </AppBar>
      <div>
          <h1 className={classes.colorText}>
              Coming soon!
          </h1>
          <Synth />
      </div>
      </div>
    );
  }