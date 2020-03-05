import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './Mood.style';
import theme from './../../style/theme';

class Mood extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedMood: null,
            toggleSelected: false,
        };
    }

    moodSelection(mood) {

        switch (mood) {
            case 'Very Happy':
                return this.setState({ selectedMood: mood})
                break;
            case 'Happy':
                return this.setState({ selectedMood: mood})
                break;
            case 'Good':
                return this.setState({ selectedMood: mood})
                break;
            case 'Bleh':
                return this.setState({ selectedMood: mood})
                break;
            case 'Not so Great':
                return this.setState({ selectedMood: mood})
                break;
            case 'Very Unhappy':
                return this.setState({ selectedMood: mood})
                break;


        }
    }



    render() {

        const { mood } = this.props;
        console.warn(1,this.props.mood)
        console.warn(2,this.state.selectedMood)

        return (

            <TouchableOpacity
                // onPress={() => this.setState({ selectedMood: mood.title, toggleSelected: !this.state.toggleSelected })}
                onPress={() => this.moodSelection(mood.title)}
                style={[styles.moods,
                // this.state.toggleSelected &&
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