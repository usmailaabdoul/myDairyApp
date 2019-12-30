import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import ActionButton from 'react-native-action-button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Moment from 'react-moment';
import Modal from 'react-native-modal';

import { DairyCard, NewDairy } from './../../sections/index';
import styles1 from './noEntryDairy.style';
import styles2 from './withEntryDairy.style';
import theme from './../../style/theme';
import { dairies } from './../../../res/data';
import styles from '../../sections/DairyCard/DairyCard.style';

class myDairy extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dairies: [],
            search: '',
            date: new Date(),
            isModalVisible: false,
        },

            this.arrayholder = [];
    }

    componentDidMount() {
        this.setState({ dairies: dairies });

        this.arrayholder = dairies;
    }


    toggleModal() { this.setState({ isModalVisible: !this.state.isModalVisible }) }

    renderModalContent() {
        return (
            <Modal
                isVisible={this.state.isModalVisible}
                style={{ margin: 0, justifyContent: 'flex-end', }}
                onBackdropPress={() => this.setState({ isModalVisible: false })} //enables background click to disappear
                backdropColor={theme.LIGHT_BACKGROUND_COLOR}
                backdropOpacity={0.8}
                onSwipeComplete={() => this.setState({ isModalVisible: false })}
                swipeDirection={['down']}
            // animationIn={'zoomInDown'}
            // animationOut={'zoomOutUp'}
            // animationInTiming={1000}
            // animationOutTiming={1000}
            // backdropTransitionInTiming={1000}
            // backdropTransitionOutTiming={1000}
            >
                <NewDairy toggleModal={() => this.setState({ isModalVisible: !this.state.isModalVisible })} />
            </Modal>
        )
    }
    _NoDairyEntries() {

        return (
            <View
                style={styles1.mainContainer}
            >
                <Image
                    source={require('./../../../res/img/mainImg.jpg')}
                    style={styles1.image}
                />
                <View>
                    <Text style={styles1.text1}>Let's Get started</Text>
                    <Text style={styles1.text2}>Documenting Your life has never been so easy!</Text>
                </View>

                <ActionButton
                    buttonColor="#27AE60"
                    position="center"
                    renderIcon={(active) => (active ?
                        <AntDesign name="edit" style={styles1.actionButtonIcon} />
                        :
                        <AntDesign name="edit" style={styles1.actionButtonIcon} />
                    )}
                    // onPress={() => { console.warn("hi") }}
                    onPress={() => this.toggleModal()}
                />

                {this.renderModalContent()}

            </View >
        )
    }

    searchFilterFunction(text) {

        this.setState({
            search: text,
        });

        const newDairies = this.arrayholder.filter(item => {
            const itemData = `${item.title.toLowerCase()}`;
            const textData = text.toLowerCase();

            return itemData.indexOf(textData) > -1;
        });

        this.setState({
            dairies: newDairies,
        });
    };

    _withDairyEntriesHeader() {
        return (
            <View>
                <View style={styles2.headerContainer}>
                    <View style={{ flex: 1, marginRight: 10 }}>
                        <Text>
                            <Moment
                                element={Text}
                                style={styles2.headerText}
                                format="dddd Do MMM, YYYY"
                                date={this.state.date}
                            />
                        </Text>
                    </View>

                    <View style={styles2.searchWrapper}>
                        <TextInput
                            placeholder="Search Dairies ..."
                            placeholderTextColor={theme.Text_PRIMARY_COLOR + 90}
                            autoCorrect={false} // to stop auto correction on email field
                            style={styles2.search}
                            value={this.state.search}
                            onChangeText={text => this.searchFilterFunction(text)}
                        />
                        <TouchableOpacity style={styles2.searchButtonWrapper}>
                            <Ionicons name="ios-search" size={25} color='#fcfbfb' />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles2.welcomeCard}>
                    <View style={styles2.welcomeTextWrapper}>
                        <Text style={styles2.welcomeTextheading}>HELLO, Abdoul!</Text>
                        <TouchableOpacity>
                            <Feather name="more-vertical" size={20} color='#fcfbfb' />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles2.welcomeText}>how was your day, today?</Text>
                </View>
            </View>
        )
    }

    _withDairyEntries() {

        const { dairies } = this.state;

        return (
            <SafeAreaView style={styles2.mainContainer} >
                <FlatList
                    initialNumToRender={dairies.length}
                    data={dairies}
                    renderItem={({ item, index }) =>
                        <DairyCard dairy={item} index={index} />
                    }
                    keyExtractor={(item) => item.id.toString()}
                    ListHeaderComponent={this._withDairyEntriesHeader()}
                />

                <ActionButton
                    buttonColor="#27AE60"
                    position="right"
                    renderIcon={(active) => (active ?
                        <AntDesign name="edit" style={styles2.actionButtonIcon} />
                        :
                        <AntDesign name="edit" style={styles2.actionButtonIcon} />
                    )}
                    onPress={() => this.toggleModal()}
                />

                {this.renderModalContent()}
            </SafeAreaView>
        )
    }

    render() {

        const { dairies } = this.state

        if (dairies.length == null) {
            return (
                this._NoDairyEntries()
            )
        }

        return (
            this._withDairyEntries()
        )

    }
}

export default myDairy;