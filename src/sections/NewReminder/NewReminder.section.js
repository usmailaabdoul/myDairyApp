import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ReduxActions from '../../redux/actions/PostActions';

import styles from './NewReminder.style';
import theme from './../../style/theme';

class NewReminder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            reminder: '',
            isFocused: false
        };
    }

    handleToggleSpecialMemory() {
        this.setState({ specialMemory: !this.state.specialMemory })
    }

    Focused = () => {
        this.setState({ isFocused: !this.state.isFocused })
    }
    render() {

        return (
            <Modal
                isVisible={this.props.newReminderModal}
                style={{ margin: 0, justifyContent: 'flex-end', }}
                onBackdropPress={() => this.props.toggleNewDairyModal(false)} //enables background click to disappear
            // backdropColor={theme.LIGHT_BACKGROUND_COLOR}
            // backdropOpacity={0.8}
            // onSwipeComplete={() => this.props.toggleNewDairyModal(false)}
            // swipeDirection={['down']}
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

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.colorWrapper}
                    >

                        <TouchableOpacity onPress={this.Focused} style={[styles.color, { backgroundColor: theme.PRIMARY_COLOR }]}>
                            {this.state.isFocused ?
                                <Icon name="ios-checkmark-circle" size={25} color='white' />
                                :
                                // <Text></Text>
                                null
                                }
                        </TouchableOpacity>

                    </ScrollView>


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