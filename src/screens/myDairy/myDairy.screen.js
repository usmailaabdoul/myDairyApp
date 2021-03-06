import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';
import ActionButton from 'react-native-action-button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Moment from 'react-moment';
import Modal from 'react-native-modal';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ReduxActions from './../../redux/actions/PostActions';

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


    toggleModal() { 
        this.props.toggleNewDairyModal(true);
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
            // <View>
                <View style={styles2.headerContainer}>
                    <View style={{ flex: 1, marginRight: 10, }}>
                        <Text style={styles2.headerText}>
                            {/* <Moment
                                element={Text}
                                style={styles2.headerText}
                                format="dddd Do MMM, YYYY"
                                date={this.state.date}
                            /> */}
                            Goto Dairy
                        </Text>
                    </View>

                    <View style={styles2.searchWrapper}>
                        <TextInput
                            selectTextOnFocus
                            placeholder="Search Dairies ..."
                            placeholderTextColor={theme.Text_PRIMARY_COLOR + 90}
                            autoCorrect={false} // to stop auto correction on email field
                            style={styles2.search}
                            value={this.state.search}
                            // onChangeText={text => this.searchFilterFunction(text)}
                            onChangeText={text => this.setState({search: text})}
                        />
                        <TouchableOpacity onPress={() => this.searchFilterFunction(this.state.search) } style={styles2.searchButtonWrapper}>
                            <Ionicons name="ios-search" size={25} color='#fcfbfb' />
                        </TouchableOpacity>
                    </View>
                </View>

            // </View>
        )
    }

    _withDairyEntries() {

        const { dairies } = this.state;

        return (
            <SafeAreaView style={styles2.mainContainer} >
                {this._withDairyEntriesHeader()}
                <FlatList
                    initialNumToRender={dairies.length}
                    data={dairies}
                    renderItem={({ item, index }) =>
                        <DairyCard dairy={item} index={index} />
                    }
                    keyExtractor={(item) => item.id.toString()}
                    ListHeaderComponent={
                        // this._withDairyEntriesHeader()
                        <View style={styles2.welcomeCard}>
                            <View style={styles2.welcomeTextWrapper}>
                                <Text style={styles2.welcomeTextheading}>HELLO, Abdoul!</Text>
                                <TouchableOpacity>
                                    <Feather name="more-vertical" size={20} color='#fcfbfb' />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles2.welcomeText}>how was your day, today?</Text>
                        </View>
                    }
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
                        <NewDairy/>
                {/* {this.renderModalContent()} */}
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

function mapStateToProps(state) {
    return {
        newDairyModal: state.newDairyModal.data,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(myDairy);