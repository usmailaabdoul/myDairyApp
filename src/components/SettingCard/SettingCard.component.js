import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './SettingCard.style';

class SettingCard extends Component {

    render() {

        return(
            <View style={[styles.mainContainer, {marginTop: this.props.marginTop} ]}>
                {this.props.children}
            </View>
        )
    }
}

export default SettingCard;