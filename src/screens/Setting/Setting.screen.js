import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Language from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { SettingCard } from './../../components/index';
import styles from './Setting.style';

class Setting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nightMode: false,
        };
    }

    handleToggleNightMode() {
        this.setState({ nightMode: !this.state.nightMode })
    }

    render() {
        const { nightMode } = this.state;

        return (
            <View style={styles.mainContainer}>
                <ScrollView>
                    <SettingCard marginTop={50}>
                        <TouchableOpacity style={styles.settingContainer}>
                            <Icon name='update' size={30} color='#7A6EFC' />
                            <View style={styles.settingWrapper}>
                                <Text style={styles.settingWrapperText}>Upgrade to premium</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingContainer}>
                            <Icon name='shield-lock' size={30} color='#34E06D' />
                            <View style={styles.settingWrapper}>
                                <Text style={styles.settingWrapperText}>Secure Diary</Text>
                            </View>
                        </TouchableOpacity>
                    </SettingCard>

                    <SettingCard>
                        <TouchableOpacity style={styles.settingContainer}>
                            <Language name='language' size={30} color='#0D19FC' />
                            <View style={styles.settingWrapper}>
                                <Text style={styles.settingWrapperText}>Change Language</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.handleToggleNightMode()} style={styles.settingContainer}>
                            <Ionicons name='ios-moon' size={30} color='#000000' />
                            <View style={styles.settingWrapper}>
                                <Text style={styles.settingWrapperText}>Night mode</Text>
                                <FontAwesome name={nightMode ? 'toggle-on' : 'toggle-off'} size={25} color={nightMode ? '#3494f1' : '#9DA3AB90'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingContainer}>
                            <Ionicons name='ios-alarm' size={30} color='#E32490' />
                            <View style={styles.settingWrapper}>
                                <Text style={styles.settingWrapperText}>Set Reminder</Text>
                            </View>
                        </TouchableOpacity>
                    </SettingCard>

                    <SettingCard>
                        <TouchableOpacity style={styles.settingContainer}>
                            <Icon name='security-network' size={30} color='#0984e3' />
                            <View style={styles.settingWrapper}>
                                <Text style={styles.settingWrapperText}>Privacy and Policy</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingContainer}>
                            <AntDesign name='sharealt' size={25} color='#00000090' />
                            <View style={styles.settingWrapper}>
                                <Text style={styles.settingWrapperText}>Share App</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingContainer}>
                            <Ionicons name='ios-information-circle-outline' size={30} color='#00000090' />
                            <View style={styles.settingWrapper}>
                                <Text style={styles.settingWrapperText}>About App</Text>
                            </View>
                        </TouchableOpacity>
                    </SettingCard>
                </ScrollView>
            </View>
        )
    }
}

export default Setting;