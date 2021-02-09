import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {favEmoji: "👍"};
      }
    componentDidMount() {
        setTimeout(() => {
          this.setState({favEmoji: "😎"})
        }, 1000)
    }

    render() {
		return (
            <div className="footer">
                &copy; 2021. All design, content, and music by jnutterdev. {this.state.favEmoji}
            </div>
        )
}
}

export default Footer;