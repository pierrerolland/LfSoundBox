import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/jerey2001/LfSoundBox/master/sounds.json';

export default class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      sounds: null,
    };
  }
   componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          sounds: responseData.sounds,
        });
      })
      .done();
  }
  render() {
    if (!this.state.sounds) {
      return this.renderLoadingView();
    }

    var sound = this.state.sounds[0];
    return this.renderSound(sound);
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Chargement en cours.... (alors ferme là et attends)
        </Text>
      </View>
    );
  }

  renderSound(sound) {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{sound.label}</Text>
          <Text style={styles.year}>{sound.url}</Text>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});
