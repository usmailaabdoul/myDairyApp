import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './Mood.style';

class Mood extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedMood: null,
            toggleSelected: false,
        };
    }

    handleMoodSelection(mood) {
        // this.setState({ selectedMood: mood })
        this.setState({ selectedMood: mood.title })

    }

    moodSelection() {
        const { selectedMood } = this.state;

        if (selectedMood == 'very_happy') {
            return this.setState({ selectedMood: theme.VERY_HAPPY_COLOR })
        }
        if (selectedMood == 'happy') {
            return theme.HAPPY_COLOR
        }
        if (selectedMood == 'good') {
            return theme.GOOD_COLOR
        }
        if (selectedMood == 'bleh') {
            return theme.BLEH_COLOR
        }
        if (selectedMood == 'not_so_great') {
            return theme.NOT_SO_GREAT
        }
        if (selectedMood == 'very_unhappy') {
            return theme.VERY_UNHAPPY
        }
    }

    render() {

        const { mood } = this.props;
        // console.warn(this.state.selectedMood)
        return (

            <TouchableOpacity onPress={() => this.setState({ selectedMood: mood.title, toggleSelected: !this.state.toggleSelected })}
                style={[styles.moods,
                this.state.toggleSelected &&
                    this.state.selectedMood == mood.title
                    ?
                    { borderColor: mood.color, backgroundColor: mood.color + 50 }
                    :
                    { borderColor: mood.color, }
                ]}
            >
                <Text style={styles.moodsText}>{mood.title}</Text>
            </TouchableOpacity>

        )
    }
}

export default Mood;