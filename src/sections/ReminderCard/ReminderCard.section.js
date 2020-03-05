import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Moment from 'react-moment';

import styles from './ReminderCard.style';
import theme from './../../style/theme';

class ReminderCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // completed: false
        }
    }

    componentDidMount() {
        this.setState({
            completed: this.props.reminder.completed
        })
    }

    moodSelection() {
        const { reminder } = this.props;
        if (reminder.colorId == 1) {
            return '#6ECC64'
        }
        if (reminder.colorId == 2) {
            return '#F9B72F'
        }
        if (reminder.colorId == 3) {
            return '#7A6EFC'
        }
        if (reminder.colorId == 4) {
            return '#EB4135'
        }
        if (reminder.colorId == 5) {
            return theme.BLEH_COLOR
        }
        if (reminder.colorId == 6) {
            return theme.VERY_UNHAPPY
        }
    }

    handleCompleted() {

        if (this.props.reminder.completed == false) {
            this.setState({ completed: true })
            this.props.reminder.completed = true;
        } else {
            this.setState({ completed: false })
            this.props.reminder.completed = false;
        }
    }

    render() {
        const { reminder } = this.props;

        return (
            <TouchableOpacity onPress={() => this.handleCompleted()} style={[styles.mainCard, { backgroundColor: this.moodSelection() }]}>
                <Text style={[styles.reminderTitle, reminder.completed ? { textDecorationLine: 'line-through' } : { textDecorationLine: 'none' }]}>{reminder.title}</Text>

                <View style={styles.date}>
                    <Text>
                        <Moment
                            element={Text}
                            style={styles.dateText}
                            format="ddd Do MMM"
                            date={reminder.date}
                        />
                        {/* {reminder.date} */}
                    </Text>
                    {
                        reminder.completed ?
                            <View style={styles.completedContainer}>
                                <Text style={styles.completedContainerText}>Done</Text>
                                <Icon name="ios-checkmark-circle" size={25} color='white' />
                            </View>
                            :
                            null
                    }

                </View>
            </TouchableOpacity>
        )
    }
}

export default ReminderCard;