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
          <Text style={styles.label}>{sound.label}</Text>
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
    backgroundColor: '#F5FCF0',
  },
  rightContainer: {
    flex: 1,
  },
  label: {
    fontSize: 25,
    marginBottom: 12,
    textAlign: 'center',
  },
});
