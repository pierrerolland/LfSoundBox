import React, {
    Component,
} from 'react';
import {
    StyleSheet,
    View,
    Button
} from 'react-native';

export default class SoundButton extends React.Component {
    playSound = () => {
        console.log(`Playing ${this.props.sound.url}`);
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
