import { StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 35,
    width: '40%',
    backgroundColor: 'grey'
  },
  playing: {
    flex: 2,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'

  },
  changingBar: {
    flex: 4.5,
    // backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'

  },
  playButton: {
    flex: 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'

  },
  playButtonText:{
    marginTop: 40,
    flex: 1,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lcdScreen: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: '80%',
    backgroundColor: 'rgba(100, 100, 255, .4)'
  },
  lcdText: {
    fontSize: 36,
    lineHeight: 40,

  },
  measuringContainer: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain'
  },
  theBar: {
    flex: 1,
    width: "80%",
    // height: 30,

    
    position: 'absolute',
    bottom:0
  }
});
