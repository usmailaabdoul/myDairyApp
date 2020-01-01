import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { SpecialMemoryCard } from './../../sections/index';
import { dairies } from './../../../res/data';
import styles from './Memories.style';
import theme from './../../style/theme';


class Memories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            specialMemories: [],
            search: '',
        },

            this.arrayholder = [];
        this.specialMemory = [];
    }

    componentDidMount() {

        this.arrayholder = dairies;

        const filteredMemories = this.arrayholder.filter(val => val.specialMemory == true);

        this.setState({
            specialMemories: filteredMemories,
        });

        this.specialMemory = filteredMemories;
    }

    searchFilterFunction(text) {


        this.setState({
            search: text,
        });

        const newspecialMemories = this.specialMemory.filter(item => {
            const itemData = `${item.title.toLowerCase()}`;
            const textData = text.toLowerCase();

            return itemData.indexOf(textData) > -1;
        });

        this.setState({
            specialMemories: newspecialMemories,
        });
    };

    _withDairyEntriesHeader() {
        return (
            // <View>
                <View style={styles.headerContainer}>

                    <View style={styles.searchWrapper}>
                        <TextInput
                            selectTextOnFocus
                            placeholder="Search Dairies ..."
                            placeholderTextColor={theme.Text_PRIMARY_COLOR + 90}
                            autoCorrect={false} // to stop auto correction on email field
                            style={styles.search}
                            value={this.state.search}
                            onChangeText={text => this.searchFilterFunction(text)}
                        />
                        <TouchableOpacity onPress={() => this.searchFilterFunction()} style={styles.searchButtonWrapper}>
                            <Ionicons name="ios-search" size={25} color='#fcfbfb' />
                        </TouchableOpacity>
                    </View>
                </View>

            // </View>
        )
    }

    render() {

        const { specialMemories } = this.state;

        return (

            <SafeAreaView style={styles.mainContainer}>
                {this._withDairyEntriesHeader()}
                <FlatList
                    initialNumToRender={dairies.length}
                    data={specialMemories}
                    renderItem={({ item, index }) =>
                        <SpecialMemoryCard dairy={item} index={index} />
                    }
                    keyExtractor={(item) => item.id.toString()}
                    // ListHeaderComponent=
                />
            </SafeAreaView>
        )
    }
}

export default Memories;