import React from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';


export default class Player extends React.Component {
 render() {
    const muiTheme = createMuiTheme({});
    const src = [
        '../assets/sounds/drums.wav',
      ];
return (
    <>
        <ThemeProvider theme={muiTheme}>
            <AudioPlayer
                elevation={1}
                width="100%"
                variation="default"
                spacing={3}
                download={true}
                autoplay={true}
                order="standart"
                preload="auto"
                loop={true}
                src={src}
                type="audio/wav"
            />
        </ThemeProvider>;
</>
)
 }   


}