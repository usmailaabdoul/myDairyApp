import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import Moment from 'react-moment';
import Feather from 'react-native-vector-icons/Feather';

import styles from './SpecialMemoryCard.style';
import theme from './../../style/theme';

class SpecialMemoryCard extends Component {

    moodSelection() {
        const { dairy } = this.props;
        if (dairy.mood == 'very_happy') {
            return theme.VERY_HAPPY_COLOR
        }
        if (dairy.mood == 'happy') {
            return theme.HAPPY_COLOR
        }
        if (dairy.mood == 'good') {
            return theme.GOOD_COLOR
        }
        if (dairy.mood == 'bleh') {
            return theme.BLEH_COLOR
        }
        if (dairy.mood == 'not_so_great') {
            return theme.NOT_SO_GREAT
        }
        if (dairy.mood == 'very_unhappy') {
            return theme.VERY_UNHAPPY
        }
    }

    render() {
        const { dairy } = this.props;

        return (
            <View style={[styles.dairyCard, { borderBottomColor: this.moodSelection() }]}>

                {dairy.images == null ?
                    null
                    :
                    <TouchableOpacity >
                        <Image
                            source={dairy.images[0]}
                            style={styles.image}
                        />
                    </TouchableOpacity>

                }

                <View style={styles.dairyCardDate}>
                    <Text >
                        <Moment
                            element={Text}
                            style={styles.dairyCardDateText}
                            format="ddd Do MMM, YYYY"
                            date={dairy.date}
                        />
                    </Text>
                    <TouchableOpacity>
                        <Feather name="more-vertical" size={20} color='#9DA3AB' />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Text style={styles.dairyCardHeader}>{dairy.title}</Text>
                    <Text style={styles.dairyContentText}>{(dairy.dairyContent).substr(0, 100)}...</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default SpecialMemoryCard;