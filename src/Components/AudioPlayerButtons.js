// AudioPlayerButtons
import React, {Component} from 'react';

class AudioPlayerButtons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMute: false,
		}
		this.muteIcon = this.muteIcon.bind(this);
		this.muteActions = this.muteActions.bind(this);
	}

	shouldComponentUpdate(newProps) {
		if(newProps.entity !== this.props.entity) {
			console.log('component has updated');
			return true;
		} else {
			console.log('component has not updated.');
			return false;
		}
	}

	muteIcon() {
		this.setState({ isMute: !this.state.isMute })
	}

	muteActions(){
		// this.state.mute;
		this.muteIcon();
	}

	render() {
		return (
			<>
	
				<div className="infos-ctn">
				<div className="timer">00:00</div>
				<div className="title">
						<h3>Artist name - Song name</h3>
				</div>
				
					<div id="songLength" className="duration">{this.duration}</div>
				</div>

				{/* //  PROGRESS BAR / NO COMPONENT  */}
				
				<div id="myProgress">
						<div id="myBar"></div>
				</div>
				
			
				{/* //  PREVIOUS SONG BUTTON / NO COMPONENT  */}
				<div className="btn-ctn">
					<div className="btn-action first-btn" >
						<div id="btn-faws-back">
							<i className='fas fa-step-backward'></i>
						</div>
					</div>
				
				{/* //   REWIND SONG BUTTON / NO COMPONENT  */}
					<div className="btn-action" >
						<div id="btn-faws-rewind">
							<i className='fas fa-backward'></i>
						</div>
					</div>

				{/* //  PLAY BUTTON / AUDIOPLAYER > AUDIOPLAYERBUTTONS (this.play)  */}
					<div className="btn-action" >
						<div id="btn-faws-play-pause">
							<i className='fas fa-play' id="icon-play" onClick={this.props.play} ></i>
						</div>
					</div>

					<div className="btn-action" >
						<div id="btn-faws-play-pause">
							<i className='fas fa-pause' id="icon-pause" onClick={this.props.pause} ></i>
						</div>
					</div>
				
				{/* //  FFWD BUTTON / NO COMPONENT  */}
					<div className="btn-play" >
						<div id="btn-faws-forward">
							<i className='fas fa-forward'></i>
						</div>
					</div>
				
				{/* //  NEXT SONG BUTTON / NO COMPONENT  */}
					<div className="btn-action" >
						<div id="btn-faws-next">
							<i className='fas fa-step-forward'></i>
						</div>
					</div>
				
				{/* //  MUTE BUTTON / AUDIOPLAYER > AUDIOPLAYERBUTTONS (this.mute)  */}
					<div className="btn-mute" id="toggleMute" onClick={this.muteActions}>
						<div id="btn-faws-volume" >
							 { this.state.isMute
         					 ? <i id="iconVolUp" className="fas fa-volume-up"></i>
          						: <i id="iconVolMute" className="fas fa-volume-mute"></i>
        					}
						</div>
					</div>
				
				</div>
				
				</>
			);
	}
}

export default AudioPlayerButtons;