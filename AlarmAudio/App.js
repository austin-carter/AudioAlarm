import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import { TimeManager } from 'minutes-seconds-milliseconds';
import { styles } from './styles';

var decibals = [1, 2, 3, 4, 2, 1, 3, 5, 1];

export default class AudioAlarm extends React.Component {



  constructor(props){
    super(props);

    this.state = {
      currentdb: 0,
      playing: '- - -',
      playButtonText: 'Play',
      isRunning: false,
      firstTime: null,
      mainTimer: null,
      mainTimerStart: new Date(),
      interval: null,
      decibalsPosition: 0,
      currentHeight: 0,
      currentBc: 'blue'


    };
    this.pressButton = this.pressButton.bind(this);
    this.stop = this.stop.bind(this);
    this.start = this.start.bind(this);
    this.changeScreen = this.changeScreen.bind(this);
    this.pressButton = this.pressButton.bind(this);
  }




  // play() {
  //
  //   for (var i = 0; i < decibals.length; i++){
  //     this.setState({currentdb: decibals[i]});
  //   }
  //
  // }



  changeScreen() {

    if (this.state.playing == '- - -'){
      this.setState({playing: 'Playing '});

    }
    else {
      this.setState({playing: '- - -'});

    }
  }

  adjustHeightandColor(){

    var color = this.state.currentBc;

    var height = this.state.currentdb * 30;

    if (height < 60){
      color = 'green';
    }
    if (height > 60 && height < 120){
      color = 'yellow';
    }
    if (height > 120){
      color = 'red';
    }

    this.setState({currentHeight: height, currentBc: color});


  }



  start() {
    this.setState({
      mainTimerStart: new Date(),
      isRunning: true
    });

    this.setState({interval: setInterval(() => {
      if (this.state.decibalsPosition == decibals.length){
        this.pressButton();
        }
      else{
        this.setState({
          currentdb: decibals[this.state.decibalsPosition],
          decibalsPosition: this.state.decibalsPosition + 1,
        }, ()=>this.adjustHeightandColor());
      }


    }, 1000)});



  }

  stop() {

    this.setState({
      isRunning: false,
      interval: clearInterval(this.state.interval),
      mainTimer: 0,
      decibalsPosition: 0,
      currentdb: null

    });





  }


  checkPlayOrStop(){
    if (this.state.isRunning){
      this.stop();
    }
    else{
      this.start();
    }

  }



  pressButton() {

    if (this.state.playButtonText == 'Stop'){
      this.setState({playButtonText: 'Play'});
    }
    else{
      this.setState({playButtonText: 'Stop'});
    }
    this.changeScreen();
    this.checkPlayOrStop();
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.playing}>
        {/* Playing... */}
          <View style={styles.lcdScreen}>
          <Text style={styles.lcdText}>{this.state.playing}</Text>
          <Text style={styles.lcdText}>{this.state.currentdb}</Text>
          </View>
        </View>



        <View style={styles.changingBar}>
          <View style={[styles.theBar, {height: this.state.currentHeight, backgroundColor: this.state.currentBc,}]}>
          </View>
              {/*
                <Image
                  source={{uri: "https://images.crateandbarrel.com/is/image/Crate/CBGlsMini5ozMsrngCpS14/$web_product_hero$&/150824160022/crate-and-barrel-glass-mini-5-0z.-measuring-cup.jpg"}}
                  style={styles.measuringContainer}>
                </Image>
                */}

        </View>



        <View style={styles.playButton}>
          {/* Play Button */}
          <TouchableHighlight
            onPress = {this.pressButton}
            underlayColor = "white"
            activeOpacity = {1}
            style = {styles.button}>
            <Text style = {styles.playButtonText}>
            {this.state.playButtonText}
            </Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}
