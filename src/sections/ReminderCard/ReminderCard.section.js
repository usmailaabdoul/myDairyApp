import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Moment from 'react-moment';

import styles from './ReminderCard.style';
import theme from './../../style/theme';

class ReminderCard extends Component {

    moodSelection() {
        const { reminder } = this.props;
        if (reminder.color == 'green') {
            return '#6ECC64'
        }
        if (reminder.color == 'yellow') {
            return '#F9B72F'
        }
        if (reminder.color == 'purple') {
            return '#7A6EFC'
        }
        if (reminder.color == 'red') {
            return '#EB4135'
        }
        if (reminder.color == 'brown') {
            return theme.BLEH_COLOR
        }
        if (reminder.color == 'dark') {
            return theme.VERY_UNHAPPY
        }
    }

    render() {
        const { reminder } = this.props;

        return (
            <TouchableOpacity style={[styles.mainCard, { backgroundColor: this.moodSelection() }]}>
                <Text style={[ styles.reminderTitle, reminder.completed ? {textDecorationLine: 'line-through'} : {textDecorationLine: 'none'} ]}>{reminder.title}</Text>

                <View style={styles.date}>
                    <Text style={styles.dateText}>{reminder.date}</Text>
                    {
                        reminder.completed ?
                            <Icon name="ios-checkmark-circle" size={25} color='white' />
                            :
                            null
                    }

                </View>
            </TouchableOpacity>
        )
    }
}

export default ReminderCard;