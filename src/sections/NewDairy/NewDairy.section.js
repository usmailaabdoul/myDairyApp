import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";
import Evilicon from 'react-native-vector-icons/EvilIcons';
import ImagePicker from 'react-native-image-crop-picker';


import styles from './NewDairy.style';
import theme from './../../style/theme';

const Moods = [
    { title: 'Very Happy', color: theme.VERY_HAPPY_COLOR },
    { title: 'Happy', color: theme.HAPPY_COLOR },
    { title: 'Good', color: theme.GOOD_COLOR },
    { title: 'Bleh', color: theme.BLEH_COLOR },
    { title: 'Not so Good', color: theme.NOT_SO_GREAT },
    { title: 'Very Unhappay', color: theme.VERY_UNHAPPY },
]
class NewDairy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            dairy: '',
            specialMemory: false,
            isSelectImageModalVisible: false,
            images: [],
        };
    }

    handleToggleSpecialMemory() {
        this.setState({ specialMemory: !this.state.specialMemory })
    }

    toggleModal() {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    getPhotoFromCamera() {
        ImagePicker.openCamera({
            cropping: true
        }).then(image => {
            this.addSelectedImageToState(image)
        });
    }

    selectPhoto() {
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

    renderModalContent() {

        return (
            <View style={styles.modalContent}>
                <TouchableOpacity onPress={() => this.getPhotoFromCamera()} style={[styles.modalIcon, { borderLeftWidth: 1 }]}>
                    <Evilicon name='camera' size={45} color='#8C8893' />
                    <Text style={styles.modalIconText}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.selectPhoto()} style={[styles.modalIcon, { borderLeftWidth: 1 }]}>
                    <Evilicon name='image' size={45} color='#8C8893' />
                    <Text style={styles.modalIconText}>Gallery</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {

        return (

            <View style={styles.rootContainer}>
                {/* <ScrollView> */}
                <View style={styles.header}>
                    <Text style={styles.headerText}>How do you feel?</Text>
                    <TouchableOpacity onPress={() => this.props.toggleModal()}>
                        <AntDesign name='close' size={20} color='red' />
                    </TouchableOpacity>
                </View>

                <View style={styles.moodsWrapper}>
                    {Moods.map((mood, key) =>
                        <Mood mood={mood} key={key} />
                    )}
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
                    <TouchableOpacity onPress={() => this.toggleModal()}>
                        <Text style={styles.imageHeaderText}>Add an Image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleToggleSpecialMemory()} style={styles.iconWrapper}>
                        <Text style={styles.iconText}>Special Memory?</Text>
                        <FontAwesome name={this.state.specialMemory ? 'toggle-on' : 'toggle-off'} size={30} color={this.state.specialMemory ? theme.PRIMARY_COLOR + '' : theme.Text_PRIMARY_COLOR} />
                    </TouchableOpacity>
                </View>

                <Modal
                    isVisible={this.state.isModalVisible}
                    style={styles.bottomModal}
                    onBackdropPress={() => this.setState({ isModalVisible: false })} //enables background click to disappear
                    onSwipeComplete={() => this.setState({ isVisible: false })} swipeDirection="down" //hides modal by swipping left
                >
                    {this.renderModalContent()}
                </Modal>

                <ShowUploadedImages
                    dropPhoto={(img) => this.dropPhoto(img)}
                    images={this.state.images}
                />
                <TouchableOpacity
                    onPress={() => this.search()}
                    style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>Finish</Text>
                </TouchableOpacity>
                {/* </ScrollView> */}
            </View>
        )
    }
}

export default NewDairy;

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

    moodSelection(mood) {
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