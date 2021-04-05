import React, { Component } from 'react';
import './Key.css';

class Key extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    playSound(target){
        debugger; 
        const sound = document.getElementById('A0');
        sound.currentTime = 0;
        sound.play();
    }
    
    handleClick(e){
        this.playSound(e.target);
    }

    render() {
              
            if(this.props.keyType==='Whitekey'){
                return (
                    <div className='white_key key' onClick={this.handleClick} >
                        <audio src='https://pianonotesforuse.s3.us-east-2.amazonaws.com/A0.mp3' id={this.props.note}></audio>
                    </div>
                );
            } else {
                return (
                    <div className='black_key key' onClick={this.handleClick}></div>
                );
            }
        
    }

}



export default Key; 