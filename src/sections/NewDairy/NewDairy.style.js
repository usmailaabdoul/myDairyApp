import theme from './../../style/theme'
const styles = {
    rootContainer: {
        maxHeight: '95%',
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 10
    },
    headerText: {
        fontSize: 20,
        color: theme.Text_PRIMARY_COLOR,
        fontWeight: '700'
    },

    moodsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 10
    },
    
    inputContainer: {
        marginHorizontal: 15,
        marginTop: 25,
    },
    input: {
        height: 170,
        width: '100%',
        fontSize: 14,
        fontStyle: 'normal',
        color: '#383a45',
    },
    inputWrapper: {
        marginVertical: 5,
        borderRadius: 5,
        // backgroundColor: '#fcfbfb',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: theme.BORDER_RADIUS_COLOR
    },
    imageWrapper: {
        flexDirection: 'row',
        marginHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    imageHeaderText: {
        fontSize: 18,
        color: theme.PRIMARY_COLOR,
    },
    iconWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconText: {
        color: theme.Text_PRIMARY_COLOR,
        fontSize: 16,
        paddingRight: 10
    },
    finishButton: {
        backgroundColor: theme.PRIMARY_COLOR,
        padding: 10,
        paddingVertical: 15,
        marginTop: 5,
        justifyContent: 'flex-end',
        width: '100%',
        alignItems: 'center'
     },
     finishButtonText: {
         fontSize: theme.FONT_SIZE_LARGE,
         color: theme.WHITE_BACKGROUND_COLOR,
         fontWeight: theme.FONT_WEIGHT_HEAVY,
    },
    modalContent: {
        flexDirection: 'row',
        backgroundColor: '#ecf2f3',
        paddingVertical: 5,
    },
    modalIcon: {
        alignItems: 'center',
        width: '50%',
        borderLeftColor: theme.LIGHT_COLOR,
    },
    modalIconText: {
        color: theme.LIGHT_COLOR,
        fontSize: theme.FONT_SIZE_NORMAL,
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    uploadedImagesContainer: {
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
    },
    uploadedImageContainer: { 
        margin: 15, 
        width: '25%',
    },
    uploadedImage: { 
        width: 100, 
        height: 100, 
    },
    dropPhotoBtn: {
        position: 'absolute',
        paddingVertical: 3,
        paddingHorizontal: 7, 
        borderRadius: 10,
        backgroundColor: '#cd2f2b', 
        zIndex: 4,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginVertical: 5,
    },
    dropPhotoBtnText: {
        color: '#fff',
        fontWeight: theme.FONT_WEIGHT_HEAVY,
        fontSize: theme.FONT_SIZE_EXTRA_SMALL,
    },
}

export default styles;