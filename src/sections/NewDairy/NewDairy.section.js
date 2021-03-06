import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";
import Evilicon from 'react-native-vector-icons/EvilIcons';
import ImagePicker from 'react-native-image-crop-picker';

import { Mood } from './../../components/';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ReduxActions from './../../redux/actions/PostActions';

import styles from './NewDairy.style';
import theme from './../../style/theme';

const Moods = [
    { title: 'Very Happy', color: theme.VERY_HAPPY_COLOR },
    { title: 'Happy', color: theme.HAPPY_COLOR },
    { title: 'Good', color: theme.GOOD_COLOR },
    { title: 'Bleh', color: theme.BLEH_COLOR },
    { title: 'Not so Great', color: theme.NOT_SO_GREAT },
    { title: 'Very Unhappy', color: theme.VERY_UNHAPPY },
]
class NewDairy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            dairy: '',
            specialMemory: false,
            isSelectImageModalVisible: false,
            images: [],

            selectedMood: 'Very Happy',
        };
    }

    handleToggleSpecialMemory() {
        this.setState({ specialMemory: !this.state.specialMemory })
    }

    openGallery() {
        ImagePicker.openPicker({
            multiple: true,
        }).then(images => {
            images.map(image => this.addSelectedImageToState(image));
        });
    }

    addSelectedImageToState(image) {
        let source = { uri: image.path };
        let images = [...this.state.images, source];
        this.setState({ images });
        return true;
    }

    dropPhoto(image) {
        var images = this.state.images.filter((img, index) => {
            return img.uri != image.uri;
        })
        this.setState({ images })
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
            default:
                return this.state.selectedMood

        }
    }
    
    render() {

        return (

            <Modal
                isVisible={this.props.newDairyModal}
                style={{ margin: 0, justifyContent: 'flex-end', }}
                onBackdropPress={() => this.props.toggleNewDairyModal(false)} //enables background click to disappear
            // backdropColor={theme.LIGHT_BACKGROUND_COLOR}
            // backdropOpacity={0.5}
            // onSwipeComplete={() => this.props.toggleNewDairyModal(false)}
            // swipeDirection={['down']}
            >
                <View style={styles.rootContainer}>
                    <ScrollView>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>How do you feel?</Text>
                            <TouchableOpacity onPress={() => this.props.toggleNewDairyModal(false)}>
                                <AntDesign name='close' size={20} color='red' />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.moodsWrapper}>
                            {/* {Moods.map((mood, key) =>
                                <Mood mood={mood} key={key} />
                            )} */}

                            <TouchableOpacity
                                onPress={() => this.moodSelection(Moods[0].title)}
                                style={[styles.moods,
                                    this.state.selectedMood == Moods[0].title
                                    ?
                                    { borderColor: Moods[0].color, backgroundColor: Moods[0].color + 50 }
                                    :
                                    { borderColor: Moods[0].color, }
                                ]}
                            >
                                <Text style={styles.moodsText}>{Moods[0].title}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => this.moodSelection(Moods[1].title)}
                                style={[styles.moods,
                                    this.state.selectedMood == Moods[1].title
                                    ?
                                    { borderColor: Moods[1].color, backgroundColor: Moods[1].color + 50 }
                                    :
                                    { borderColor: Moods[1].color, }
                                ]}
                            >
                                <Text style={styles.moodsText}>{Moods[1].title}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.moodSelection(Moods[2].title)}
                                style={[styles.moods,
                                    this.state.selectedMood == Moods[2].title
                                    ?
                                    { borderColor: Moods[2].color, backgroundColor: Moods[2].color + 50 }
                                    :
                                    { borderColor: Moods[2].color, }
                                ]}
                            >
                                <Text style={styles.moodsText}>{Moods[2].title}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.moodSelection(Moods[3].title)}
                                style={[styles.moods,
                                    this.state.selectedMood == Moods[3].title
                                    ?
                                    { borderColor: Moods[3].color, backgroundColor: Moods[3].color + 50 }
                                    :
                                    { borderColor: Moods[3].color, }
                                ]}
                            >
                                <Text style={styles.moodsText}>{Moods[3].title}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.moodSelection(Moods[4].title)}
                                style={[styles.moods,
                                    this.state.selectedMood == Moods[4].title
                                    ?
                                    { borderColor: Moods[4].color, backgroundColor: Moods[4].color + 50 }
                                    :
                                    { borderColor: Moods[4].color, }
                                ]}
                            >
                                <Text style={styles.moodsText}>{Moods[4].title}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.moodSelection(Moods[5].title)}
                                style={[styles.moods,
                                    this.state.selectedMood == Moods[5].title
                                    ?
                                    { borderColor: Moods[5].color, backgroundColor: Moods[5].color + 50 }
                                    :
                                    { borderColor: Moods[5].color, }
                                ]}
                            >
                                <Text style={styles.moodsText}>{Moods[5].title}</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.headerText}>How was your day, Today?</Text>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    placeholder="Write anything you thing is worthy of Mentioning!"
                                    textAlignVertical={'top'}
                                    placeholderTextColor={theme.Text_PRIMARY_COLOR}
                                    multiline
                                    numberOfLines={7}
                                    autoCorrect={false} // to stop auto correction on email field
                                    style={styles.input}
                                    value={this.state.dairy}
                                    onChangeText={text => this.setState({ dairy: text })}
                                />
                            </View>
                        </View>

                        <View style={styles.imageWrapper}>
                            <TouchableOpacity onPress={() => this.openGallery()}>
                                <Text style={styles.imageHeaderText}>Add an Image</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handleToggleSpecialMemory()} style={styles.iconWrapper}>
                                <Text style={styles.iconText}>Special Memory?</Text>
                                <FontAwesome name={this.state.specialMemory ? 'toggle-on' : 'toggle-off'} size={30} color={this.state.specialMemory ? theme.PRIMARY_COLOR + '' : theme.Text_PRIMARY_COLOR} />
                            </TouchableOpacity>
                        </View>

                        <ShowUploadedImages
                            dropPhoto={(img) => this.dropPhoto(img)}
                            images={this.state.images}
                        />
                        <TouchableOpacity
                            onPress={() => this.search()}
                            style={styles.finishButton}>
                            <Text style={styles.finishButtonText}>Finish</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewDairy);

const ShowUploadedImages = (props) => {
    const { images } = props;
    const jsxImages = images.map((image, key) => {
        return (
            <View key={key} style={styles.uploadedImageContainer} >
                <TouchableOpacity
                    style={styles.dropPhotoBtn}
                    onPress={() => props.dropPhoto(image)} >
                    <Text style={styles.dropPhotoBtnText}>X</Text>
                </TouchableOpacity>
                <Image style={styles.uploadedImage} source={image} />
            </View>
        );
    })

    return (
        <ScrollView >
            <View style={styles.uploadedImagesContainer}>
                {jsxImages}
            </View>
        </ScrollView>
    )
}
