import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import { reminders } from './../../../res/data';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ReduxActions from '../../redux/actions/PostActions';

import styles from './NewReminder.style';
import theme from './../../style/theme';

const reminderColors = [
    { id: 1, color: '#6ECC64' },
    { id: 2, color: '#F9B72F' },
    { id: 3, color: '#7A6EFC' },
    { id: 4, color: '#EB4135' },
    { id: 5, color: theme.BLEH_COLOR },
    { id: 6, color: theme.VERY_UNHAPPY },
]

class NewReminder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            reminder: '',

            remindercolorId: 1
        };
    }

    initialStates() {
        this.setState({reminder: '', remindercolorId: 1})
    }

    handleToggleSpecialMemory() {
        this.setState({ specialMemory: !this.state.specialMemory })
    }

    colorSelection(colorId) {

        switch (colorId) {
            case 1:
                return this.setState({ remindercolorId: colorId })
                break;
            case 2:
                return this.setState({ remindercolorId: colorId })
                break;
            case 3:
                return this.setState({ remindercolorId: colorId })
                break;
            case 4:
                return this.setState({ remindercolorId: colorId })
                break;
            case 5:
                return this.setState({ remindercolorId: colorId })
                break;
            case 6:
                return this.setState({ remindercolorId: colorId })
                break;
            default:
                return this.state.remindercolorId

        }
    }

    addReminder() {
        const { reminder, remindercolorId } = this.state;

        // console.log(1, reminder)
        // console.log(2, remindercolorId)

        reminders.push(
            {
                id: Math.random(),
                title: reminder,
                date: new Date(),
                completed: false,
                colorId: remindercolorId,
            }
        )
        this.props.toggleNewReminderModal(false)
            this.initialStates()
    }

    render() {

        // console.log(this.state.remindercolorId)
        return (
            <Modal
                isVisible={this.props.newReminderModal}
                style={{ margin: 0, justifyContent: 'flex-end', }}
                onBackdropPress={() => this.props.toggleNewReminderModal(false)} //enables background click to disappear
                // backdropColor={theme.LIGHT_BACKGROUND_COLOR}
                // backdropOpacity={0.8}
                onSwipeComplete={() => this.props.toggleNewReminderModal(false)}
                swipeDirection={['down']}
            >
                <View style={styles.rootContainer}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Set a Reminder!</Text>
                        <TouchableOpacity onPress={() => this.props.toggleNewReminderModal(false)}>
                            <AntDesign name='close' size={20} color='red' />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.headerText}>Whats the Reminder about?</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="Say something!"
                                textAlignVertical={'center'}
                                placeholderTextColor={theme.Text_PRIMARY_COLOR}
                                multiline
                                numberOfLines={3}
                                autoCorrect={false} // to stop auto correction on email field
                                style={styles.input}
                                value={this.state.reminder}
                                onChangeText={text => this.setState({ reminder: text })}
                            />
                        </View>
                    </View>

                    <Text style={styles.colorsHeader}>Pick Color</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.colorWrapper}
                    >


                        <TouchableOpacity
                            onPress={() => this.colorSelection(reminderColors[0].id)}
                            style={[
                                this.state.remindercolorId == reminderColors[0].id
                                    ?
                                    [styles.selected, { backgroundColor: reminderColors[0].color }]
                                    :
                                    [styles.unSelected, { backgroundColor: reminderColors[0].color }]
                            ]}
                        >
                            {
                                this.state.remindercolorId == reminderColors[0].id
                                    ?
                                    <Icon name="check" size={44} color='white' />
                                    :
                                    null
                            }
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.colorSelection(reminderColors[1].id)}
                            style={[
                                this.state.remindercolorId == reminderColors[1].id
                                    ?
                                    [styles.selected, { backgroundColor: reminderColors[1].color }]
                                    :
                                    [styles.unSelected, { backgroundColor: reminderColors[1].color }]
                            ]}
                        >
                            {
                                this.state.remindercolorId == reminderColors[1].id
                                    ?
                                    <Icon name="check" size={44} color='white' />
                                    :
                                    null
                            }
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.colorSelection(reminderColors[2].id)}
                            style={[
                                this.state.remindercolorId == reminderColors[2].id
                                    ?
                                    [styles.selected, { backgroundColor: reminderColors[2].color }]
                                    :
                                    [styles.unSelected, { backgroundColor: reminderColors[2].color }]
                            ]}
                        >
                            {
                                this.state.remindercolorId == reminderColors[2].id
                                    ?
                                    <Icon name="check" size={44} color='white' />
                                    :
                                    null
                            }
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.colorSelection(reminderColors[3].id)}
                            style={[
                                this.state.remindercolorId == reminderColors[3].id
                                    ?
                                    [styles.selected, { backgroundColor: reminderColors[3].color }]
                                    :
                                    [styles.unSelected, { backgroundColor: reminderColors[3].color }]
                            ]}
                        >
                            {
                                this.state.remindercolorId == reminderColors[3].id
                                    ?
                                    <Icon name="check" size={44} color='white' />
                                    :
                                    null
                            }
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.colorSelection(reminderColors[4].id)}
                            style={[
                                this.state.remindercolorId == reminderColors[4].id
                                    ?
                                    [styles.selected, { backgroundColor: reminderColors[4].color }]
                                    :
                                    [styles.unSelected, { backgroundColor: reminderColors[4].color }]
                            ]}
                        >
                            {
                                this.state.remindercolorId == reminderColors[4].id
                                    ?
                                    <Icon name="check" size={44} color='white' />
                                    :
                                    null
                            }
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.colorSelection(reminderColors[5].id)}
                            style={[
                                this.state.remindercolorId == reminderColors[5].id
                                    ?
                                    [styles.selected, { backgroundColor: reminderColors[5].color, marginRight: 20 }]
                                    :
                                    [styles.unSelected, { backgroundColor: reminderColors[5].color, marginRight: 20 }]
                            ]}
                        >
                            {
                                this.state.remindercolorId == reminderColors[5].id
                                    ?
                                    <Icon name="check" size={44} color='white' />
                                    :
                                    null
                            }
                        </TouchableOpacity>

                    </ScrollView>

                    <TouchableOpacity
                        onPress={() => this.addReminder()}
                        style={styles.finishButton}>
                        <Text style={styles.finishButtonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {
        newReminderModal: state.newReminderModal.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReminder);