import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


export default class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = { currentTime: 0 };
     this.handleStart = this.handleStart.bind(this);
     this.handleStop = this.handleStop.bind(this);
   }

  handleStart() {
      this.setState({ startTime: (new Date()) });
      this.intervalID = setInterval(() => {
      const elapsedMs = (new Date()) - this.state.startTime;
      this.setState({currentTime: (elapsedMs / 100) });
    }, 10);
  }

  handleStop() {
    clearInterval(this.intervalID);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to our timer </Text>
        <Text style={styles.timeDisplay}>{this.state.currentTime}</Text>
        <TouchableOpacity onPress={this.handleStart}
                          activeOpacity={0.5}
                          style= {styles.mainButton}>
          <Text>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleStop}
                            activeOpacity={0.5}
                            style= {styles.mainButton}>
            <Text>Stop</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 10,
    borderColor: 'skyblue',
    width: 200,
    height: 75,
    backgroundColor: 'seagreen'
  },
  timeDisplay: {
    fontSize: 200
  },
  mainButtonText: {
    fontWeight: 'bold',
    fontSize: 50,
    fontFamily: 'Arial Wide'
  }
});
