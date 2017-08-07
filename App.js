import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/jerey2001/LfSoundBox/master/sounds.json';

export default class App extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
    //this.playSound = this.playSound.bind(this);
  }
   componentDidMount() {
    this.fetchData();
  }
  
  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.sounds),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

  return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderSound}
        style={styles.listView}
      />
    );
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
  
  playSound(){
  	console.log('Pouet');
  }
  
  renderSound(sound) {
    return (
        <View style={styles.container}>
          <Button style={styles.buttons} title={sound.label} onPress={() => console.log(sound.url)}/>
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
  listView: {
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  rightContainer: {
    flex: 1,
  },
  buttons: {
    fontSize: 40,
    marginBottom: 12,
    textAlign: 'center',
  },

});
