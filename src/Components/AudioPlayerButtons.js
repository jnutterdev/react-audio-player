// AudioPlayerButtons
import React, {Component} from 'react';

class AudioPlayerButtons extends Component {
	
	shouldComponentUpdate(newProps) {
		if(newProps.entity !== this.props.entity) {
			console.log('component has update');
			return true;
		} else {
			console.log('component has not updated.');
			return false;
		}
	}
	
	render() {
		return (
			<>
				<aside>
					<button onClick={this.props.pause} className='pause-button'>||</button>
					<button onClick={this.props.play} className='play-button'>&#9654;</button>
					<button onClick={this.props.mute} className='mute-button' dangerouslySetInnerHTML={{__html: this.props.entity}} ></button>
				</aside>
				

				<div className="infos-ctn">
					<div className="timer">00:00</div>
					<div className="title"></div>
					<div className="duration">00:00</div>
				</div>

				{/* //  PROGRESS BAR / NO COMPONENT  */}
				<div id="myProgress">
					<div id="myBar"></div>
				</div>
			
				{/* //  PREVIOUS SONG BUTTON / NO COMPONENT  */}
				<div className="btn-ctn">
					<div className="btn-action first-btn" onclick="previous()">
						<div id="btn-faws-back">
							<i className='fas fa-step-backward'></i>
						</div>
					</div>
				
				{/* //   REWIND SONG BUTTON / NO COMPONENT  */}
					<div className="btn-action" onclick="rewind()">
						<div id="btn-faws-rewind">
							<i className='fas fa-backward'></i>
						</div>
					</div>

				{/* //  PLAY BUTTON / AUDIOPLAYER > AUDIOPLAYERBUTTONS (this.play)  */}
					<div className="btn-action" onclick="toggleAudio()">
						<div id="btn-faws-play-pause">
							<i className='fas fa-play' id="icon-play" onClick={this.props.play} ></i>
							<i className='fas fa-pause' id="icon-pause" style={{ display: 'none' }} onClick={this.props.pause} ></i>
						</div>
					</div>
				
				{/* //  FFWD BUTTON / NO COMPONENT  */}
					<div className="btn-play" onclick="forward()">
						<div id="btn-faws-forward">
							<i className='fas fa-forward'></i>
						</div>
					</div>
				
				{/* //  NEXT SONG BUTTON / NO COMPONENT  */}
					<div className="btn-action" onclick="next()">
						<div id="btn-faws-next">
							<i className='fas fa-step-forward'></i>
						</div>
					</div>
				
				{/* //  MUTE BUTTON / AUDIOPLAYER > AUDIOPLAYERBUTTONS (this.mute)  */}
					<div className="btn-mute" id="toggleMute" onClick={this.props.mute}  >
						<div id="btn-faws-volume">
							<i id="icon-vol-up" className='fas fa-volume-up'></i>
							<i id="icon-vol-mute" className='fas fa-volume-mute' style={{ display: 'none' }}></i>
						</div>
					</div>
				</div>
				
				</>
			);
	}
}

export default AudioPlayerButtons;