import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { reminders } from './../../../res/data';

import { ReminderCard } from './../../sections/index';
import styles from './Home.style';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            reminders: [],
        }
    }

    componentDidMount() {
        this.setState({ reminders: reminders });
    }

    render() {

        const { reminders } = this.state

        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.mainHeaderText}>Hello, Abdoul!</Text>
                    <Text style={styles.subHeaderText}>Don’t forget to set a reminder for when u want to make a diary</Text>
                </View>

                <FlatList
                    vertical numColumns={2}
                    initialNumToRender={reminders.length}
                    style={{width: '100%'}}
                    data={reminders}
                    renderItem={({ item, index }) =>
                        <ReminderCard reminder={item} index={index} />
                    }
                    keyExtractor={(item) => item.id.toString()}
                />

                <ActionButton buttonColor="#27AE60">
                    <ActionButton.Item buttonColor='#9b59b6' title="New Dairy" onPress={() => console.log("notes tapped!")}>
                        <Icon name="md-create" size={25} color='white' />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Add a Reminder" onPress={() => { }}>
                        <Icon name="ios-stopwatch" size={25} color='white' />
                    </ActionButton.Item>
                </ActionButton>
            </SafeAreaView>
        )
    }
}

export default Home;