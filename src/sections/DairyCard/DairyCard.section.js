import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import Moment from 'react-moment';
import Feather from 'react-native-vector-icons/Feather';

import styles from './DairyCard.style';
import theme from './../../style/theme';

class DairyCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            specialMemory: false
        }
    }

    componentDidMount() {
        this.setState({
            specialMemory: this.props.dairy.specialMemory
        })
    }

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

    modifySpecialMemory() {
        this.setState({ specialMemory: !this.state.specialMemory })
        this.props.dairy.specialMemory = this.state.specialMemory;
    }

    render() {
        
        const { dairy } = this.props;
        return (
            <View style={[styles.dairyCard, { borderBottomColor: this.moodSelection() }]}>
                <View style={styles.dairyCardDate}>
                    <Text >
                        <Moment
                            element={Text}
                            style={styles.dairyCardDateText}
                            format="ddd Do MMM, YYYY"
                            date={dairy.date}
                        />
                    </Text>
                    <TouchableOpacity onPress={() => this.modifySpecialMemory()}>
                        <Feather name="more-vertical" size={20} color='#9DA3AB' />
                    </TouchableOpacity>
                </View>
                <Text style={styles.dairyCardHeader}>{dairy.title}</Text>

                <View style={styles.dairyContent}>
                    {dairy.images == null ?
                        null
                        :
                        <TouchableOpacity style={styles.imageWrapper}>
                            <Image
                                source={dairy.images[0]}
                                style={styles.image}
                            />
                        </TouchableOpacity>

                    }

                    <TouchableOpacity style={{ flex: 1 }}>
                        <Text style={styles.dairyContentText}>{(dairy.dairyContent).substr(0, 80)}...</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default DairyCard;