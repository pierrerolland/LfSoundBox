import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    View,
    Button
} from 'react-native';

import SoundPlayer from 'react-native-sound-player';

export default class SoundButton extends React.Component {
    playSound = (error, sound) => {
        try {
            SoundPlayer.playSoundFile(this.props.sound.url, 'mp3');
        } catch (e) {
            console.log(`cannot play the sound file`, e);
        }
    };

    render() {
        return (
            <View>
                <Button style={styles.buttons} title={this.props.sound.label} onPress={this.playSound} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    buttons: {
        fontSize: 40,
        marginBottom: 12,
        textAlign: 'center',
    },
});
