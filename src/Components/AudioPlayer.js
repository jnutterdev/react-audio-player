import React, {Component} from 'react';
import VolumeSlider from './VolumeSlider';
import AudioPlayerButtons from './AudioPlayerButtons';

class AudioPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			volumeBeforeMute:.50,
			speakerEntity:"&#128266;"
		}
		this.pause = this.pause.bind(this);
		this.play = this.play.bind(this);
		this.mute = this.mute.bind(this);
		this.changeVolume = this.changeVolume.bind(this);
		this.volumeRef = React.createRef();
		this.duration = this.duration.bind(this);
	}
	
	componentDidMount(){
		this.refs.audio.volume = this.state.volumeBeforeMute;
	}
	
	componentWillReceiveProps() {
		this.refs.audio.pause();
		this.refs.audio.load();
		this.refs.audio.play();
	}
	
	pause(){
		this.refs.audio.pause();
	}
		
	duration(){
		this.duration = document.getElementById("songInfo").duration;
		document.getElementById("songLength").innerHTML = this.duration;
	}

	play(){
		this.refs.audio.play();
		this.refs.audio.volume = this.volumeRef.current.value/100;		
	}

	mute(){
		if(this.refs.audio.volume === 0)
		{
			// To unmute the player
			this.refs.audio.volume=this.volumeRef.current.value/100;
			this.setState((state)=>({
				speakerEntity:'&#128266;'
			}));
		} else {		
			// To mute the player
			this.setState((state)=>({
				speakerEntity:'&#128263;',
			}));
			this.refs.audio.volume = 0;
		}

	}
	
	changeVolume() {
		this.refs.audio.volume = this.volumeRef.current.value/100;
		if(this.refs.audio.volume>0) {
			this.setState((state)=>({
				speakerEntity:'&#128266;',
			}));			
		} else {
			this.setState((state)=>({
				speakerEntity:'&#128263;',
			}));			
		}
	}
	
	render() {
		
		return (
			<div className="player-ctn">
				<audio ref={this.props.childRef}>
					<source src={this.props.audiopath} type="audio/mpeg" />
				</audio>

				<AudioPlayerButtons id="songInfo" entity={this.state.speakerEntity} pause={this.pause} play={this.play} mute={this.mute} duration={this.duration} />
				<div className="slider-ctn">
					<VolumeSlider changeVolume={this.changeVolume} volumeRef={this.volumeRef}/>
				</div>
				{/* <div className="playlist-ctn">
					{
								this.state.mp3Data.map((mp3,index)=>
								<Buttons key={index} 
								changeMP3={this.changeMP3}
								clickedButtonId={this.state.mp3name}
								mp3={mp3.name}
								artist={mp3.artist}
								genre={mp3.genre}
								/>
								)
					}
							</div> */}

			</div>
		)
	}
}

export default AudioPlayer;