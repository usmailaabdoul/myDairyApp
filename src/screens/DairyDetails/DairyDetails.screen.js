import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Moment from 'react-moment';


import styles from './DairyDetails.style';
import { dairies } from './../../../res/data';

class DairyDetails extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {

        const { dairy } = this.props;

        return (
            <View style={styles.mainContainer}>
                <ScrollView>
                    {
                        dairy.images == null ?
                            null :
                            <Image
                                source={dairy.images[0]}
                                style={styles.image}
                            />
                    }

                    <View style={styles.headerWrapper}>
                        <Text style={styles.headerText}>{dairy.title}</Text>
                        <TouchableOpacity>
                            <Feather name="more-vertical" size={20} color='#9DA3AB' />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ paddingHorizontal: 15, paddingBottom: 10 }}>
                        <Moment
                            element={Text}
                            style={styles.dairyCardDateText}
                            format="ddd Do MMM, YYYY"
                            date={dairy.date}
                        />
                    </Text>

                    <View style={styles.content}>
                        <Text style={styles.contentText}>{dairy.dairyContent}</Text>
                        <Text style={styles.contentText}>{dairy.dairyContent}</Text>
                        <Text style={styles.contentText}>{dairy.dairyContent}</Text>
                        <Text style={styles.contentText}>{dairy.dairyContent}</Text>
                        <Text style={styles.contentText}>{dairy.dairyContent}</Text>
                        <Text style={styles.contentText}>{dairy.dairyContent}</Text>
                        <Text style={styles.contentText}>{dairy.dairyContent}</Text>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

export default DairyDetails;