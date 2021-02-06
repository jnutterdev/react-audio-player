import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './Components/Header';
import AudioPlayer from './Components/AudioPlayer';
import Footer from './Components/Footer'

class WebPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mp3path:`${process.env.PUBLIC_URL}/songs/`,
			mp3name:'Waxwork.mp3',
			mp3artist:'Azure Window',
			audiopath:'',
			mp3autoplay:'autoPlay',
			mp3genre:'IDM',
			currentButtonId:0,
			clickedButtonId:'',
			mp3Data:[],
		}
	}
	
	componentWillMount() {
		var mp3title = this.state.mp3name;
		mp3title = mp3title.replace('.mp3','');
		this.changeMP3 = this.changeMP3.bind(this);
		this.setState((state)=>({
			mp3title:mp3title,
			audiopath:state.mp3path+state.mp3name,
			mp3Data:[
				{
					name:'Waxwork.mp3',
					artist:'Azure Window',
					genre:'IDM'
				},
				{
					name:'Grime.mp3',
					artist:'Caliper',
					genre:'Beats'
				}
			]
		}));
	}
	
	changeMP3(currentButtonId, genre, name, artist) {
		var mp3title = name;
		var mp3name = name;
		mp3title = mp3title.replace('.mp3','').replaceAll('_',' ').toUpperCase();
		this.setState((state)=>({
			audiopath:state.mp3path+mp3name,
			mp3title:mp3title,
			mp3artist:artist,
			mp3genre:genre,
			currentButtonId:currentButtonId,
			clickedButtonId:currentButtonId,
			mp3name:mp3name
		}));
		
	}
	
	render() {

		return (
			<>
			<CssBaseline />
			<Container maxWidth="sm">
				<Typography />
			<div className="audio-container"> 
        		<Header /> 
					<h1>{this.props.title}</h1> 

        				<AudioPlayer childRef="audio" audiopath={this.state.audiopath} /> 
						
        		<Footer />
			</div>
			</Container>
			</>
		);
	}
}

ReactDOM.render(
  <WebPlayer title="Web audio player"/>,
  document.getElementById('root')
);
