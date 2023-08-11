import React from 'react';
import Lottie from 'react-lottie';

class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
    }

    render() {
        const defaultOptions = {
            loop: this.props.loop ? this.props.loop : true,
            autoplay: this.props.autoplay ? this.props.autoplay : true,
            animationData: this.props.data,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return (
                <Lottie options={defaultOptions}
                        isStopped={this.state.isStopped}
                        isPaused={this.state.isPaused}
                        id={this.props.idName}
                        />
        );
    }
}

export default Index;